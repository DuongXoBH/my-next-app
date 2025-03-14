import { ORDERLIST } from "@/constants/order";
import { atom } from "jotai";

export interface IOrder {
  id: number;
  name: string;
  type: string;
  status: string;
  date: string;
  address: string;
}
export interface IOrderSearch{
  date: string[] ;
  type: string[];
  status: string[];
}

export const searchAtom = atom<IOrderSearch>({
  date: [],
  type: [],
  status: [],
});
export const orderListAtom = atom<IOrder[]>(ORDERLIST);
