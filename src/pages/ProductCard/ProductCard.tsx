import style from "./ProductCard.module.css";
import ChipSmall from "../../components/ChipSmall/ChipSmall";
import sienaLogoImg from "../../images/Siena.png"

function ProductCard() {
  return (
    <div className={style.pageContainer}>
      <div className={style.headerSection}>
        <img
          src={sienaLogoImg}
          alt="Siena-Logo"
          className={style.sienaLogo}
        />
        <div>
          <h1 className={style.productTitle}>Circle Running Jersey</h1>
        </div>
      </div>

      <div className={style.cardWrapper}>
        {/* Secção da Imagem */}
        <div className={style.productPicture}>
          <img
            src="https://circlesportswear.com/cdn/shop/files/T-shirt_manches_longues_Feel_Good_Onyx_Black_women_3.jpg?v=1772027694&width=2200"
            alt="Long-sleeve"
          />
        </div>

        {/* Conteúdo com Padding */}
        <div className={style.contentSection}>
          <div className={style.descriptionSection}>
            <h2>Description</h2>
            <div className={style.infoRow}>
              <span className={style.label}>Item:</span> <span>Jersey</span>
            </div>
            <div className={style.infoRow}>
              <span className={style.label}>Material:</span>{" "}
              <span>100% Cotton</span>
            </div>
          </div>

          <div className={style.sizeSection}>
            <h3>Sizes</h3>
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
              <li>Product ID</li>
              <li>Country of Production</li>
              <li>Year of Commercialization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
