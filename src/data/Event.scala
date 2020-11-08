package com.fasoo.javafinch.parser.taint.graph

sealed abstract class Event extends UseTraceVars

case class CallEvent(ret: Option[TraceVarHolder], callTargetRepr: MethodIndicator, base: Option[TraceVarHolder], args: List[ArgumentHolder]) extends Event {
  override def traceVars: List[String] = (ret.flatMap(_.traceVars) ++ base.flatMap(_.traceVars) ++ args.flatMap(_.traceVars)).toList
}
case class AnyArrayAccessEvent(indexVar: TraceVar) extends Event {
  override def traceVars: List[String] = indexVar.traceVars
}
case class ArrayCreateEvent(sizeVar: TraceVar) extends Event {
  override def traceVars: List[String] = sizeVar.traceVars
}
case class AssignmentEvent(lhs: TaintExpression, rhs: TaintExpression) extends Event {
  override def traceVars: List[String] = lhs.traceVars ++ rhs.traceVars
}
case class UnaryOperationEvent(operator: Repr, operandVar: TraceVar) extends Event {
  override def traceVars: List[String] = operandVar.traceVars
}
case class BinaryOperationEvent(operator: Repr, lhs: TaintExpression, rhs: TaintExpression) extends Event {
  override def traceVars: List[String] = lhs.traceVars ++ rhs.traceVars
}
case class PredefinedEventAlias(eventName: String, args: List[TraceVarHolder]) extends Event {
  override def traceVars: List[String] = args.map(_.toString)
}

sealed abstract class MethodIndicator {
  def repr: Repr
  def attrs: List[Repr]
}

case class MethodNameIndicator(repr: Repr, attrs: List[Repr]) extends MethodIndicator
case class MethodFqnIndicator(repr: Repr, attrs: List[Repr]) extends MethodIndicator

sealed abstract class ArgumentHolder extends Ordered[ArgumentHolder] {
  def arg: TaintExpression
  def compare(that: ArgumentHolder): Int = {
    ArgumentHolder.compare(this, that)
  }
  def traceVars: List[String] = arg.traceVars
}

case class IndexedArgument(n: Int, arg: TaintExpression) extends ArgumentHolder {
  override def toString: String = s"$n: $arg"
}

case class NamedArgument(name: Repr, arg: TaintExpression) extends ArgumentHolder {
  override def toString: String = s"$name: $arg"
}

case class AnyArgument(arg: TaintExpression) extends ArgumentHolder {
  override def toString: String = s"*: $arg"
}

object ArgumentHolder {
  def compare(l: ArgumentHolder, r: ArgumentHolder): Int = {
    (l, r) match {
      case (NamedArgument(ln, _), NamedArgument(rn, _)) => ln.toString.compare(rn.toString)
      case (_: NamedArgument, _) => -1
      case (_, _: NamedArgument) => 1
      case (IndexedArgument(ln, _), IndexedArgument(rn, _)) => ln - rn
      case (_: IndexedArgument, _) => -1
      case (_, _: IndexedArgument) => 1
      case (AnyArgument(la), AnyArgument(ra)) => // this case must not reached
        la.toString.compare(ra.toString)
    }
  }
}