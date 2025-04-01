import * as Ably from "ably";
import { atom } from "jotai";

export const AblyAtom = atom<Ably.Realtime | null>(null);
