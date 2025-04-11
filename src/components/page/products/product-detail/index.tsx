"use client";

import { useFetchProductByIdApi } from "@/api-hooks/product";
import ImageThumbs from "./image-thumbs";
import ProductInformation from "./product-info";

export default function ProductDetail({id}:{id:string}){
    const { data : product } = useFetchProductByIdApi(id);
    return (
        <div className="w-full min-h-[78vh] pb-2 bg-white p-5 rounded-lg flex flex-row gap-[2%] ">
            <ImageThumbs images={product?.images}/>
            <ProductInformation id={id}/>
        </div>
    )
}