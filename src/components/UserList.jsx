import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserItem } from "./UserItem";
import axios from "axios";

export const UserList=()=>{
    const[data,setData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(result.data);
    };
    useEffect(()=>{
            getData();
    },[])
    return(
        <Grid container spacing={2} >
        {
            data.map((item)=>
                <UserItem item={item} />
            )
        }
        </Grid>
    );
}