import {Realtime} from "ably";
import { atom } from "jotai";

export const AblyAtom = atom<Realtime | null>(null);
