import { ORDERLIST } from "@/constants/order";
import { Dayjs } from "dayjs";
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
  date: Dayjs[] | null;
  type: string[];
  status: string[];
}

export const searchAtom = atom<IOrderSearch>({
  date: null,
  type: [],
  status: [],
});
export const orderListAtom = atom<IOrder[]>(ORDERLIST);
