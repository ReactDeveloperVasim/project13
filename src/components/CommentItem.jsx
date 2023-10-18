import { Card, CardContent , Grid , Badge } from "@mui/material";
import React from "react";

export const CommentItem=({item})=>{
    return(
        
        <Grid item xs={12}>
            <Card>
                <CardContent>
                <Badge color="success" badgeContent={item.postId}> <h2>{item.name}</h2></Badge><br/>
                   
                    <a href={`mailTo:${item.email}`}>{item.email}</a>
                    <h4>{item.body}</h4>
                </CardContent>
            </Card>
        </Grid>
           
    );
}