import { atomWithStorage } from "jotai/utils";

export const userToken = atomWithStorage<string >("user", "");