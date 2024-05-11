"use client";

import ProductCard from "@/components/ProductCard";
import SearchInput from "@/components/SearchInput";
import useProductCalls from "@/hooks/useProductCalls";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all products");
  const { products, categories } = useSelector((state) => state.product);
  const { getProducts, getCategories } = useProductCalls();

  useEffect(() => {
    getProducts(search);
    getCategories();
  }, [search]);

  const categoryNames = categories.map((item) => item.name);

  const categoryArr = ["all products", ...categoryNames];

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const newProducts =
    category.toLowerCase() === "all products"
      ? products.filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
        )
      : products.filter(
          (item) =>
            item.category.name.toLowerCase() === category &&
            item.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="product-container">
      <div className="mb-8 flex justify-center items-center">
        <select
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase cursor-pointer"
          onChange={handleChange}
        >
          {categoryArr.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <SearchInput search={search} setSearch={setSearch} />

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 xl:gap-y-8">
        {newProducts.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
