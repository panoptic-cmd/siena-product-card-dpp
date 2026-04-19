import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AllProductsDisplay from "./pages/AllProductDisplay/AllProductsDisplay.tsx";
import ProductCard from "./pages/ProductCard/ProductCard.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllProductsDisplay />} />
        <Route path="/details/:id" element={<ProductCard />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
);
