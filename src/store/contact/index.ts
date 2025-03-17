import { atom } from "jotai";
export interface IContact{
    id: string;
    avatar: string;
    email: string;
    name: string;
    role: string;
    birth: string;
    gender: string;
    phone: string;
  }; 
export const contactListAtom = atom<IContact[]>([]);