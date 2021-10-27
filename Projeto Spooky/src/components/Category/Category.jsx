import { categoryData } from "../../data/categoryData";
import {
  CategoryContainer,
  Title,
  CategoryContent,
  CategoryCard,
  CardImg,
  CardTitle,
  CardDescription,
} from "./CategoryStyle";

const Category = () => {
  return (
    <CategoryContainer>
      <Title>Favorite Scare Category</Title>
      <CategoryContent>
        {categoryData.map((item, index) => (
          <CategoryCard key={index}>
            <CardImg src={item.img} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CategoryCard>
        ))}
      </CategoryContent>
    </CategoryContainer>
  );
};

export default Category;
