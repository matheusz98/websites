import Tilt from "react-tilt";
import { categoriesData } from "../../data/categoriesData";
import {
  CategoriesSection,
  CategoriesContainer,
  CategoriesContent,
  CategoriesCard,
  CategoriesTitle,
  CategoriesImg,
  CategoriesButton,
} from "./style";

const Categories = () => {
  return (
    <CategoriesSection id="categories">
      <CategoriesContainer>
        <CategoriesContent>
          {categoriesData.map((item, index) => (
            <Tilt
              className="Tilt"
              options={{ max: 15, scale: 1.02, speed: 200 }}
              key={index}
            >
              <CategoriesCard bgColor={item.bgColor}>
                <CategoriesTitle>{item.title}</CategoriesTitle>
                <CategoriesImg src={item.img} alt={item.alt} />
                <CategoriesButton>Shop Now</CategoriesButton>
              </CategoriesCard>
            </Tilt>
          ))}
        </CategoriesContent>
      </CategoriesContainer>
    </CategoriesSection>
  );
};

export default Categories;
