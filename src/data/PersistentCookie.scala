// 문자열 상수에서 파싱된 정수 상수, 혹은 직접 사용된 정수 상수가
// 지정된 값(3600) 이내인지 확인되지 않은 상태로
// setMaxAge 의 인자로 전달되는 것을 검출

TaintRuleChecker(
    nodes = List(
        Node(
            id = 0,
            traceVars = List("tainted_str"),
            events = List(
                AssignmentEvent(
                    lhs = TraceVar("tainted_str"),
                    rhs = ValueIndicator(
                        RegexRepr(Pattern.compile("\".*\""), prettyName = "any_const_string")
                    )
                )
            ),
            isEnd = false
        ),
        Node(
            id = 1,
            traceVars = List("tainted_str", "tainted_int"),
            events = List(
                CallEvent(
                    ret = Some(TraceVar("tainted_int")),
                    callTargetRepr = MethodFqnIndicator(
                        repr = PlainTextRepr("java.lang.Integer.valueOf(java.lang.String)"),
                        attrs = List.empty
                    ),
                    base = None,
                    args = List(IndexedArgument(1, TraceVar("tainted_str")))
                ),
                CallEvent(
                    ret = Some(TraceVar("tainted_int")),
                    callTargetRepr = MethodFqnIndicator(
                        repr = PlainTextRepr("java.lang.Integer.parseInt(java.lang.String)"),
                        attrs = List.empty
                    ),
                    base = None,
                    args = List(IndexedArgument(1, TraceVar("tainted_str")))
                )
          ),
          isEnd = false
        ),
        Node(
            id = 2,
            traceVars = List("tainted_int"),
            events = List(
                AssignmentEvent(
                    lhs = TraceVar("tainted_int"),
                    rhs = ValueIndicator(
                        RegexRepr(Pattern.compile("[0-9]+"), prettyName = "any_int")
                    )
                )
            ),
            isEnd = false
        ),
        Node(
            id = 3,
            traceVars = List("tainted_int"),
            events = List(
                CallEvent(
                    ret = None,
                    callTargetRepr = MethodFqnIndicator(
                        repr = PlainTextRepr("java.net.HttpCookie.setMaxAge(long)"),
                        attrs = List.empty
                    ),
                    base = Some(DontCare),
                    args = List(IndexedArgument(1, TraceVar("tainted_int")))
                )
            ),
            isEnd = true
        )
    ),
    edges = List(
        Edge(
            fromId = 0,
            toId = 1,
            propagators = List.empty,
            filter = None
        ),
        Edge(
            fromId = 1,
            toId = 3,
            propagators = List.empty,
            filter = Some(Filter(
                nodes = List(
                    Node(
                        id = 4,
                        traceVars = List("tainted_int"),
                        events = List(
                            BinaryOperationEvent(
                                operator = PlainTextRepr("<"),
                                lhs = TraceVar("taint_int"),
                                rhs = ValueIndicator(PlainTextRepr("3600"))
                            )
                        ),
                        isEnd = true
                    )
                ),
                edges = List.empty
            ))
        ),
        Edge(
            fromId = 2,
            toId = 3,
            propagators = List.empty,
            filter = Some(Filter(
                nodes = List(
                    Node(
                        id = 5,
                        traceVars = List("tainted_int"),
                        events = List(
                            BinaryOperationEvent(
                                operator = PlainTextRepr("<"),
                                lhs = TraceVar("taint_int"),
                                rhs = ValueIndicator(PlainTextRepr("3600"))
                            )
                        ),
                        isEnd = true
                    )
                ),
                edges = List.empty
            ))
        )
    )
)