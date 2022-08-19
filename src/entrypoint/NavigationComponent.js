import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../Components/CartPage";
import ProductHandler from "../Components/ProductHandler";
import ProductInventory from "../Components/ProductInventory";
import WishlistPage from "../Components/WishlistPage";

function NavigationComponent() {
  return (
    <Routes>
      <Route path="/" element={<ProductInventory />} />
      <Route path="/addProduct" element={<ProductHandler />} />
      <Route path="/editProduct/:id" element={<ProductHandler />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="wishlist" element={<WishlistPage />} />
    </Routes>
  );
}

export default NavigationComponent;
