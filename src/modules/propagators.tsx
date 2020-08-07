import { EventType } from "./events";

export type PropagatorType = {
  productPrefix: string;
  events: EventType[];
  fromTraceVar: string;
  toTraceVar: string;
};