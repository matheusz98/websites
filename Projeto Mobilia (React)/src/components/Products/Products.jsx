import {
  ProductsSection,
  ProductsContainer,
  ProductsSectionTitle,
  ProductsContent,
  Item,
  ProductsInfo,
} from "./ProductsStyle";
import { Button } from "../Button/Button";

const Products = ({
  id,
  paragraphOne,
  productTitle1,
  productTitle2,
  productTitle3,
  productTitle4,
  productTitle5,
  productTitle6,
  price,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  buttonLabel,
}) => {
  return (
    <>
      <ProductsSection id={id}>
        <ProductsContainer>
          <ProductsSectionTitle>
            <h2>
              Nossos <span>produtos</span>
            </h2>
            <p>{paragraphOne}</p>
          </ProductsSectionTitle>

          <ProductsContent>
            <Item>
              <img src={img1} alt={alt1} />
              <ProductsInfo>
                <h3>{productTitle1}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
            <Item>
              <img src={img2} alt={alt2} />
              <ProductsInfo>
                <h3>{productTitle2}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
            <Item>
              <img src={img3} alt={alt3} />
              <ProductsInfo>
                <h3>{productTitle3}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
            <Item>
              <img src={img4} alt={alt4} />
              <ProductsInfo>
                <h3>{productTitle4}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
            <Item>
              <img src={img5} alt={alt5} />
              <ProductsInfo>
                <h3>{productTitle5}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
            <Item>
              <img src={img6} alt={alt6} />
              <ProductsInfo>
                <h3>{productTitle6}</h3>
                <h4>{price}</h4>
                <Button primary white>
                  {buttonLabel}
                </Button>
              </ProductsInfo>
            </Item>
          </ProductsContent>
        </ProductsContainer>
      </ProductsSection>
    </>
  );
};

export default Products;
