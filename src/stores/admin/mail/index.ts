import { atom } from "jotai";
export interface ILabelColor {
  name: string;
  attr: string;
}
const colors : ILabelColor[] = [
  { name: "Primary", attr: "#00b69b" },
  { name: "Social", attr: "#5a8cff" },
  { name: "Work", attr: "#fd9a56" },
  { name: "Friends", attr: "#d456fd" },
];
export const labelColor = atom<ILabelColor[] | null>(colors);
export const labelAtom = atom<string | null>(null)