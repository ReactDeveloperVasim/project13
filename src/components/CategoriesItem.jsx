import React from "react";
import {Card , CardContent , Grid} from "@mui/material"

export const CategoriesItem=({item})=>{
    return(
        <Grid item xs={3}>
            <Card sx={{ bgcolor:"pink"}}>
                <CardContent>
                    <h2>{item.toUpperCase()}</h2>
                </CardContent>
            </Card>
        </Grid>
    );
}