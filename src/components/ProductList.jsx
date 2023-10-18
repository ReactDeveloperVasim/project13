import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={3} align="center">
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </Grid>
  );
};

export default ProductList;