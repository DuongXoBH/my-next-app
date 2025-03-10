import { CALENDAREVENT, IEventItem } from "@/constants/event";
import { atom } from "jotai";

export const eventAtom = atom<IEventItem[]>(CALENDAREVENT);