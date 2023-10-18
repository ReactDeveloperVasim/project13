import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CommentItem } from "./CommentItem";

export const CommentList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/comments");
        setData(result.data);
    };

    useEffect(()=>{
        getData();
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.map((item)=>
                    <CommentItem item={item}/>
                )
            }
        </Grid>
    );
}