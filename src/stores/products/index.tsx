import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
export interface IProduct {
  id: number;
  title: string;
  price: number;
  slug: string;
  quantity: number;
  description: string;
  images: string[];
}
type CardType = { [key: string]: IProduct[] };
type FavoritesStorageType = { [key: string]: number[] };
export const authShoppingCart = atomWithStorage<CardType>("cart", {});

export const totalCartAmountAtom = atom<number>(0);

export const favoritesAtom = atomWithStorage<FavoritesStorageType>(
  "favorites",
  {}
);

export const stockAtom = atom<IProduct[]>([]);
