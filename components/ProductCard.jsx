"use client"

import { useRouter } from "next/navigation"

const ProductCard = ({item}) => {
    const {thumbnail, images, title, price, category, _id} = item

    const router = useRouter()

  return (
    <div className="cursor-pointer border border-gray-300 rounded-lg p-2 mx-auto sm:mx-0 max-w-60 w-full sm:max-w-96" onClick={() => router.push(`/dashboard/products/${_id}`)}>
        <div className="w-full rounded-md lg:h-72 bg-gray-200 hover:opacity-75">
            <img src={thumbnail || images[0]} className="h-40 w-full lg:h-full lg:w-full rounded-md" />
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