import { brandsData } from "../../data/brandsData";
import { BrandsSection, BrandsItem, BrandsImg } from "./style";

const Brands = () => {
  return (
    <BrandsSection>
      {brandsData.map((item, index) => (
        <BrandsItem key={index}>
          <BrandsImg src={item.img} alt={item.alt} />
        </BrandsItem>
      ))}
    </BrandsSection>
  );
};

export default Brands;
