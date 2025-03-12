import { Dayjs } from "dayjs";
import { atom, } from "jotai";

export const dateSelectedAtom = atom<Dayjs | null>(null);
export const typesSelectedAtom = atom<string[]>([]);
export const statusSelectedAtom = atom<string[]>([]);