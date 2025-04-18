import { CALENDAREVENT, IEventItem } from "@/constants/admin/event";
import { atom } from "jotai";

export const eventAtom = atom<IEventItem[]>(CALENDAREVENT);
