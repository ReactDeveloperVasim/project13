import { CardContent, Grid , Card } from "@mui/material";
import React from "react";

export const PostItem=({item})=>{
    return(
        <Grid item xs={12}>
            <Card sx={{bgcolor:"aliceblue"}}>
                <CardContent>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </CardContent>
            </Card>
        </Grid>
    );
}