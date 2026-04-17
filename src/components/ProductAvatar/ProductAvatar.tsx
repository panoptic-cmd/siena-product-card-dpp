import style from "./ProductAvatar.module.css";
import type { ITypeJersey } from "../../types/TypeJersey";
import { Link } from "react-router";

function ProductAvatar(props: ITypeJersey) {
  return (
    <div className={style.cardContainer}>
      <Link to={`/details/${props.id}`} style={{ textDecoration: "none" }}>
        <div className={style.Wrapper}>
          <div className={style.cardPicture}>
            <img src={props.backdrop_path} alt="Long-sleeve" />
          </div>

          <div className={style.textContent}>
            <h1 className={style.itemTitle}>{props.item_name}</h1>
            {/* <p className={style.itemBrandText}>{props.brand}</p> */}
            <span className={style.itemMaterialsText}>
              {props.material.slice(0, 23)}
            </span>
            <span className={style.productCollection}>
              Collection SS/{props.year}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductAvatar;
