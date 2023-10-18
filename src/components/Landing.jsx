import React from "react";
import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import { NavList } from "./NavList";
import { CategoriesList } from "./CategoriesList";
import { CommentList } from "./CommentList";
import { PostList } from "./PostList";
import { UserList } from "./UserList";

export const Landing = () => {
  return (
    <BrowserRouter>
      <Card sx={{bgcolor:"gray"}}>
        <CardContent>
          <NavList />

          <Routes>
            <Route path="/Product" element={<ProductList />} />
            <Route path="/cat" element={<CategoriesList />} />
            <Route path="/comm" element={<CommentList />} />
            <Route path="/Posts" element={<PostList />} />
            <Route path="/User" element={<UserList />} />
          </Routes>
        </CardContent>
      </Card>
    </BrowserRouter>
  );
};
