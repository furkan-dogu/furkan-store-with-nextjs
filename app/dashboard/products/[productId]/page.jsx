"use client";

import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductDetail = ({ params }) => {
  const { productId } = params;

  const { product } = useProductContext();

  const filter = product.filter((item) => item.id === Number(productId));

  const { title, description, category, price, images } = filter[0];

  const [selectedImage, setselectedImage] = useState(images[0]);

  const router = useRouter();

  return (
    <div className="product-container">
      <div className="mt-6 w-full">
        <article className="w-full h-full mx-auto block lg:flex mt-4 2xl:h-[70vh] shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-3">
              <img
                src={selectedImage}
                alt={title}
                className="h-full w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4 row-span-1">
              {images.slice(0, ((images.length >= 4) ? 4 : (images.length))).map((item, index) => (
                <div key={index} onClick={() => setselectedImage(item)}>
                  <img
                    src={item}
                    alt={index}
                    loading="lazy"
                    className="h-[15vh] w-full rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-lg text-gray-900">{title}</h3>
              <p className="mt-1 text-gray-400">{description}</p>
            </div>
            <div className="flex mt-2 ml-4 mr-2 pt-3">
              <div>
                <span className="block text-gray-900 capitalize">
                  Category : {category}
                </span>
                <span className="block text-sm">Price : {price} $</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="border p-2 rounded-lg text-white bg-gray-500"
                onClick={() => router.back()}
              >
                Go Back
              </button>
              <button
                className="border p-2 rounded-lg text-white bg-orange-500"
                onClick={() => router.push("/dashboard")}
              >
                Go Home
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
