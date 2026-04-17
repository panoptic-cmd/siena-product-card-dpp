import style from "./ProductCard.module.css";
import ChipSmall from "../../components/ChipSmall/ChipSmall";
import ChipBig from "../../components/ChipBig/ChipBig";
import sienaLogoImg from "../../images/Siena.png";
import CalendarCheck from "../../images/Icons/CalendarCheck";
import MapPin from "../../images/Icons/MapPin";
import PackageSearch from "../../images/Icons/PackageSearch";

import type { ITypeJersey } from "../../types/TypeJersey";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

// interface Props {
//   product: ITypeJersey
// }

function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState<ITypeJersey | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/items/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={style.pageContainer}>
      <div className={style.headerSection}>
        <Link to={"/"}>
          <img
            src={sienaLogoImg}
            alt="Siena-Logo"
            className={style.sienaLogo}
          />
        </Link>
        <div>
          <h1 className={style.productTitle}>{product.item_name}</h1>
        </div>
      </div>

      <div className={style.cardWrapper}>
        {/* Secção da Imagem */}
        <div className={style.productPicture}>
          <img src={product.backdrop_path} alt="Long-sleeve" />
        </div>

        {/* Conteúdo com Padding */}
        <div className={style.contentSection}>
          <div className={style.descriptionSection}>
            <h2>Product Description</h2>
            <div className={style.infoRow}>
              <span className={style.label}>Item:</span>
              <span>{product.item_type}</span>
            </div>
            <div className={style.infoRow}>
              <span className={style.label}>Material:</span>
              <span>{product.material}</span>
            </div>
          </div>

          <div className={style.sizeSection}>
            <h3>{product.sizes}</h3>

            <div className={style.chipGroup}>
              <ChipSmall>XS</ChipSmall>
              <ChipSmall>S</ChipSmall>
              <ChipSmall>M</ChipSmall>
              <ChipSmall>L</ChipSmall>
              <ChipSmall>XL</ChipSmall>
            </div>
          </div>

          <div className={style.certificationsWrapper}>
            <h3>Certifications</h3>
            <div className={style.chipGroup}>
              <ChipSmall>GOTS</ChipSmall>
              <ChipSmall>BCI</ChipSmall>
            </div>
          </div>

          <div className={style.characteristicsSection}>
            <h3>Characteristics</h3>
            <ul>
              <li>
                {" "}
                <ChipBig
                  title="Product ID"
                  label="JerseyLongSleeveDark"
                  icon={<PackageSearch />}
                />{" "}
              </li>

              <li>
                <ChipBig
                  title="Country of Production"
                  label="Portugal"
                  icon={<MapPin />}
                />
              </li>

              <li>
                <ChipBig
                  title="Year of Commercialization"
                  label="2025"
                  icon={<CalendarCheck />}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
