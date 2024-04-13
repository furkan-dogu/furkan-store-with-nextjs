"use client"

import { useRouter } from "next/navigation"

const ProductCard = ({item}) => {
    const {images, title, price, category, _id} = item

    const router = useRouter()

  return (
    <div className="cursor-pointer" onClick={() => router.push(`/dashboard/products/${_id}`)}>
        <div className="w-full rounded-md lg:h-80 bg-gray-200 hover:opacity-75">
            <img src={images[0]} className="h-48 w-full lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">
            <div className="flex-1">
                <h3 className="text-sm text-gray-700 line-clamp-1 capitalize">{title}</h3>
                <p className="text-sm mt-1 capitalize text-gray-500 line-clamp-1">{category.name}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{price} $</p>
        </div>
    </div>
  )
}

export default ProductCard