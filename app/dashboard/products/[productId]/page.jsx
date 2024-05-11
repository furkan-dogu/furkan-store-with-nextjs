"use client";

import Loading from "@/app/loading";
import useProductCalls from "@/hooks/useProductCalls";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductDetail = ({ params }) => {
  const { productId } = params;

  const { getSingleProduct } = useProductCalls();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getSingleProduct(productId);
  }, []);

  const { singleProduct } = useSelector((state) => state.product);

  const router = useRouter();

  const selectedImage =
    singleProduct?.images && singleProduct.images[selectedImageIndex];

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="product-container">
        <div className="mt-6 w-full">
          <article className="w-full h-full mx-auto block lg:flex mt-4 2xl:h-[70vh] shadow-lg border rounded-md duration-300 hover:shadow-sm">
            <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
              <div className="w-full row-span-3">
                <img
                  src={selectedImage}
                  alt={singleProduct?.title}
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-4 row-span-1">
                {singleProduct?.images
                  ?.slice(
                    0,
                    singleProduct?.images?.length >= 4
                      ? 4
                      : singleProduct?.images?.length
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                    >
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
                <h3 className="text-lg text-gray-900 capitalize">
                  {singleProduct?.title}
                </h3>
                <p className="mt-1 text-gray-400">
                  {singleProduct?.description}
                </p>
              </div>
              <div className="flex mt-2 ml-4 mr-2 pt-3">
                <div>
                  <span className="block text-gray-900 capitalize">
                    Category : {singleProduct?.category?.name}
                  </span>
                  <span className="block text-sm">
                    Price : {singleProduct?.price} $
                  </span>
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
  }
};

export default ProductDetail;
