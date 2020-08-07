import { PropagatorType } from "./propagators";

export type EdgeType = {
  productPrefix: string;
  id: number;
  fromId: number;
  toId: number;
  propagators: PropagatorType[];
};