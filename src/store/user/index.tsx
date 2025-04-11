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

type CardType = {[key: string]: IProduct[]};

export const userToken = atomWithStorage<string >("auth", "");
export const authShoppingCart = atomWithStorage<CardType>("cart", {});
