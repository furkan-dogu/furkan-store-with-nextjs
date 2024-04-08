"use client"

import ProductCard from '@/components/ProductCard'
import SearchInput from '@/components/SearchInput'
import { useProductContext } from '@/context/ProductContext'
import React from 'react'

const Products = () => {
  const {product} = useProductContext()

  return (
    <div className='product-container'>
      <SearchInput />
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-y-8'>
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products