import { parseData } from "./api/callDatas";

export class Node {
  constructor({ productPrefix, id, traceVars, events, isEnd }) {
    this.productPrefix = productPrefix;
    this.id = id;
    this.traceVars = traceVars;
    this.events = events.map(event => new Event(event));
    this.isEnd = isEnd;
  };
};

export class Edge {
  constructor({ productPrefix, fromId, toId, propagators, filter }) {
    this.productPrefix = productPrefix;
    this.fromId = fromId;
    this.toId = toId;
    this.propagators = propagators.map(propagator => new Propagator(propagatorConvert(propagator)));
    this.filter = filter ? new Filter(filter) : {};
  };
};

export class Event {
  constructor({ ...event }) {
    this.productPrefix = event.productPrefix;
    switch (event.productPrefix) {
      case 'CallEvent':
        this.ret = event.ret;
        this.callTargetRepr = event.callTargetRepr;
        this.base = event.base;
        this.args = event.args;   
        break;
      case 'AnyArrayAccessEvent':
        this.indexVar = event.indexVar;
        break;
      case 'ArrayCreateEvent':
        this.sizeVar = event.sizeVar;
        break;
      case 'AssignmentEvent':
        this.lhs = event.lhs;
        this.rhs = event.rhs;
        break;
      case 'UnaryOperationEvent':
        this.operator = event.operator;
        this.operandVar = event.operandVar;
        break;
      case 'BinaryOperationEvent':
        this.operator = event.operator;
        this.lhs = event.lhs;
        this.rhs = event.rhs;
        break;
      case 'BranchConditionEvent':
        this.cond = event.cond;
        break;
      case 'PredefEventAlias':
        this.eventName = event.eventName;
        this.args = event.args;
        break; 
      default:
        throw new Error('Unhandled Event Product Prefix');
    };
  };
};

export class Filter {
  constructor({ productPrefix, nodes, edges }) {
    this.productPrefix = productPrefix;
    this.nodes = nodes ? nodes.map(node => new Node(nodeConvert(node))) : [];
    this.edges = edges ? edges.map(edge => new Edge(edgeConvert(edge))) : [];
  };
};

export class Propagator {
  constructor({ productPrefix, events, fromTraceVar, toTraceVar }) {
    this.productPrefix = productPrefix;
    this.events = events.map(event => new Event(event));
    this.fromTraceVar = fromTraceVar;
    this.toTraceVar = toTraceVar;
  };
};

const nodeConvert = node => {
  return {
    ...node, 
    events: node.alias ? node.alias.events : []
  };
};

const edgeConvert = edge => {
  return {
    ...edge,
    fromId: parseInt(edge.source, 10),
    toId: parseInt(edge.target, 10)
  };
};

const propagatorConvert = propagator => {
  return {
    ...propagator,
    events: propagator.alias ? propagator.alias.events : []
  };
};

export const exportJson = () => {
  const data = parseData();
  const nodes = data.nodes.map(node => new Node(nodeConvert(node)));
  const edges = data.links.map(edge => new Edge(edgeConvert(edge)));
  
  const exportData = {
    nodes: nodes,
    edges: edges
  };

  console.log(exportData)

  const exportText = JSON.stringify(exportData, null, "\t");
  return exportText;
};

