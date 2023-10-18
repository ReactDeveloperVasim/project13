import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PostItem } from "./PostItem";
import axios from "axios";

export const PostList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.forEach((item)=>
                    <PostItem item={item}/>
                )
            }
        </Grid>
    );
}