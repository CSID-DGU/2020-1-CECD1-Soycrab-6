package com.fasoo.javafinch.parser.taint.graph

sealed abstract class TaintExpression extends UseTraceVars

sealed trait TraceVarHolder { this: TaintExpression =>
  def isEmpty: Boolean
  def nonEmpty: Boolean
  def traceVars: List[String]
}
case object DontCare extends TaintExpression with TraceVarHolder {
  override def toString: String = "_"
  override def traceVars: List[String] = List.empty
  def isEmpty: Boolean = true
  def nonEmpty: Boolean = false
}
case class TraceVar(name: String) extends TaintExpression with TraceVarHolder {
  override def toString: String = name
  override def traceVars: List[String] = List(name)
  def isEmpty: Boolean = false
  def nonEmpty: Boolean = true
}
case class VariableIndicator(repr: Repr) extends TaintExpression {
  override def toString: String = repr.toString
  override def traceVars: List[String] = List.empty
}
case class ValueIndicator(repr: Repr) extends TaintExpression {
  override def toString: String = repr.toString
  override def traceVars: List[String] = List.empty
}
case class TypeIndicator(repr: Repr) extends TaintExpression {
  override def toString: String = repr.toString
  override def traceVars: List[String] = List.empty
}
case class DotAccessExpression(base: TaintExpression, member: Repr) extends TaintExpression {
  override def toString: String = s"$base.$member"
  override def traceVars: List[String] = base.traceVars
}
case class IndexAccessExpression(base: TaintExpression, index: TaintExpression) extends TaintExpression {
  override def toString: String = s"$base[$index]"
  override def traceVars: List[String] = base.traceVars ++ index.traceVars
}
