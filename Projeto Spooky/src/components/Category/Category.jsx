import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <CategoryContainer>
      <Title data-aos="fade-up">Favorite Scare Category</Title>
      <CategoryContent>
        {categoryData.map((item, index) => (
          <CategoryCard key={index} data-aos="zoom-in">
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
