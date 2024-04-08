"use client"

import { useProductContext } from '@/context/ProductContext'
import React from 'react'

const ProductDetail = ({params}) => {

    const {productId} = params

    const {product} = useProductContext()

    const filter = product.filter(item => item.id === Number(productId))

  return (
    <>
        {filter.map(({title, description, category, price, images}) => (
            <div className='product-container'>
                <div className='mt-6 w-full'>
                    <article>
                        <div>
                            <div>
                                <img src={images[0]} alt={title} className="h-full w-full rounded-lg" />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        ))}
    </>
  )
}

export default ProductDetail