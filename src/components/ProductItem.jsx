import { CardContent, Grid, Card, Rating, Badge ,  } from "@mui/material";
import React from "react";

export const ProductItem=({item})=>{
  return(
    <Grid item xs={3}>
      <Card>
        <CardContent>
            <h3>{item.title.slice(0,25)}</h3>
            <Badge color="secondary" badgeContent={`$${item.price}`}>
            <img src={item.image} alt="" />
            </Badge>
            <h4>{item.price}</h4>
            <p>{item.description.slice(0,100)}</p>
            <Rating value={item.rating.rate}/>
            ({item.rating.count})
            <h4>{item.category.toUpperCase()}</h4>
        </CardContent>
      </Card>
    </Grid>
  );
}