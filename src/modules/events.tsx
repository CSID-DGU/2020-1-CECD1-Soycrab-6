import { ArgumentType } from "./arguments";

type ReturnType = {
  productPrefix: string;
  name: string;
};

type CallTargetReprType = {
  productPrefix: string;
  repr: {
    productPrefix: 'plain' | 'regex';
    text: string;
  };
  attrs: any[];
};

type BaseType = {
  productPrefix: string;
  name: string;
};

export type EventType = {
  id: number;
  productPrefix: string;
  eventableId: number;
  eventableType: string;
  return: ReturnType;
  callTargetRepr: CallTargetReprType;
  base: BaseType;
  args: ArgumentType[];
};