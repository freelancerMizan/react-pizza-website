import React from "react";

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>
        {   data.map((product, index) => {
            return (
                <ProductCard key={index}>
                    <ProductImg src={product.img} akt={product.alt}></ProductImg>                    
              </ProductCard>;
            )
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
