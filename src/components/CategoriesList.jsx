import React, { useEffect, useState } from "react";
import {Grid } from "@mui/material"
import axios from "axios";
import { CategoriesItem } from "./CategoriesItem";

export const CategoriesList=()=>{
    const[data,setData]=useState([]);

    const getData=async ()=>{
        const result= await axios.get("https://fakestoreapi.com/products/categories");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                <CategoriesItem item={item} />
                )
            }
        </Grid>
    );
}