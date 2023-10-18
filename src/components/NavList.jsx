import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./Data/NavItem";
import { NavData } from "./Data";

export const NavList = () => {
  return (
    <Grid container spacing={2} sx={{marginBottom:3}}>
      {NavData.map((item) => (
        <NavItem item={item} />
      ))}
    </Grid>
  );
};
