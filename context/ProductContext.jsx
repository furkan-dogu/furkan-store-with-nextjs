"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProduct = async () => {
    try {
      const {data} = await axios.get(
        `https://product-api-kappa.vercel.app/products?search=${search}`
      );
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    getProduct();
  }, [search]);

  const values = { product, search, setSearch };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
