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

export const dateSelectedAtom = atom<Dayjs | null>(null);
export const typesSelectedAtom = atom<string[]>([]);
export const statusSelectedAtom = atom<string[]>([]);
export const orderListAtom = atom<IOrder[]>(ORDERLIST);
