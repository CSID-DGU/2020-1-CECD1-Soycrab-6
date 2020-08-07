import { NodeType } from './nodes';
import { EdgeType } from './edges';

export type FilterType = {
  productPrefix: string;
  nodes: NodeType[];
  edges: EdgeType[];
};