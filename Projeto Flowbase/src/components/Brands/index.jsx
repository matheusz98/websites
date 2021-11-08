import { brandsData } from "../../data/brandsData";
import { BrandsContainer, BrandsContent, BrandsItem, BrandsImg } from "./style";

const Brands = () => {
  return (
    <BrandsContainer>
      <BrandsContent>
        {brandsData.map((item, index) => (
          <BrandsItem key={index}>
            <BrandsImg src={item.img} />
          </BrandsItem>
        ))}
      </BrandsContent>
    </BrandsContainer>
  );
};

export default Brands;
