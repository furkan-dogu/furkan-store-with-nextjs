"use client"

import ProductCard from '@/components/ProductCard'
import SearchInput from '@/components/SearchInput'
import useProductCalls from '@/hooks/useProductCalls'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const [search, setSearch] = useState("")
  const { products } = useSelector(state => state.product)
  const { getProducts } = useProductCalls()

  useEffect(() => {
    getProducts(search)
  }, [search])
  
  return (
    <div className='product-container'>
      <SearchInput search={search} setSearch={setSearch} />
      <div className='mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-y-8'>
        {products.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products