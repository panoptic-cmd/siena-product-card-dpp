import { useState, useEffect } from "react";
import style from "./AllProductsDisplay.module.css";

import ProductAvatar from "../../components/ProductAvatar/ProductAvatar";
import type { ITypeJersey } from "../../types/TypeJersey";
import { supabase } from "../../supabaseClient"; 


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
    // 2. Cria uma função assíncrona para buscar os dados
    async function getProducts() {
      const { data, error } = await supabase
        .from('JerseyAPI') // 3. Usa o nome da tabela que vi no teu print
        .select('*');

      if (error) {
        console.error("Erro ao buscar dados:", error.message);
      } else if (data) {
        // 4. O Supabase já devolve os dados limpos, basta atualizar o estado
        setProduct(data as ITypeJersey[]);
      }
    }

    getProducts();
  }, []);


  return (
    <div className={style.mainContainer}>
      {product.map((item) => (
        <ProductAvatar key={item.id} {...item} />
      ))}
      
    </div>
  );
}

export default AllProductsDisplay;
