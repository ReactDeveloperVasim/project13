import { Grid , Card , CardContent } from "@mui/material";
import React from "react";

export const UserItem=({item})=>{
    return(

        <Grid item xs={4}>
        <Card sx={{bgcolor:"lightgoldenrodyellow"}}>
            <CardContent>
            <h2>{item.name}</h2>
            <h4>{item.email}</h4>
            </CardContent>
        </Card>
           
        </Grid>
        
       
    );
}