import { parseData } from "./api/callDatas";

class Node {
  constructor({ productPrefix, id, traceVars, events, isEnd }) {
    this.productPrefix = productPrefix;
    this.id = id;
    this.traceVars = traceVars;
    this.events = events.map(event => new Event(event));
    this.isEnd = isEnd;
  };
};

class Edge {
  constructor({ productPrefix, fromId, toId, propagators, filter }) {
    this.productPrefix = productPrefix;
    this.fromId = fromId;
    this.toId = toId;
    this.propagators = propagators.map(propagator => new Propagator(propagatorConvert(propagator)));
    this.filter = filter ? new Filter(filter) : {};
  };
};

class Event {
  constructor({ productPrefix, ret, cond, callTargetRepr, left, right, accessor, base, args }) {
    this.productPrefix = productPrefix;
    this.ret = ret;
    this.cond = cond;
    this.callTargetRepr = callTargetRepr;
    this.left = left;
    this.right = right;
    this.accessor = accessor;
    this.base = base;
    this.args = args;
  };
};

class Filter {
  constructor({ productPrefix, nodes, edges }) {
    this.productPrefix = productPrefix;
    this.nodes = nodes.map(node => new Node(nodeConvert(node)));
    this.edges = edges.map(edge => new Edge(edgeConvert(edge)));
  };
};

class Propagator {
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
    events: node.alias.events
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
    events: propagator.alias.events
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

