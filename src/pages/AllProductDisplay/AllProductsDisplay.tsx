import { useState, useEffect } from "react";
import style from "./AllProductsDisplay.module.css"

import ProductAvatar from "../../components/ProductAvatar/ProductAvatar";
import type { ITypeJersey } from "../../types/TypeJersey";

function AllProductsDisplay() {
  const [product, setProduct] = useState<ITypeJersey[]>([]);

  console.log("API:_______", product);

  // use effect versão unclean;
  //
  // useEffect(() => {
  //     fetch("http://localhost:3000/items")
  //       .then((response) => response.json())
  //       .then((data) => setProduct(data));
  //   }, []);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data: ITypeJersey[]) => {
        const cleanData = data.map((item) => ({
          id: item.id,
          item_type: item.item_type,
          item_name: item.item_name,
          backdrop_path: item.backdrop_path,
          material: item.material,
          sizes: item.sizes,
          product_id: item.product_id,
          country_of_production: item.country_of_production,
          year: item.year,
        }));

        setProduct(cleanData);
      });
  }, []);

  return (
    <div className={style.mainContainer}>
      {product.map((item) => (
        <ProductAvatar key={item.id} {...item} />
      ))}
      ;
    </div>
  );
}

export default AllProductsDisplay;
