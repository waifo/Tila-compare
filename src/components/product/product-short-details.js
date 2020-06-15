import React from "react";
import styled from "styled-components";

import { Colors } from "../common";

const ProductSummaryContainer = styled.div`
  width: 100%;
  padding: 5px 10px;
  text-align: center;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 200px;
  max-height: 200px;
  display: inline-block;
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`;

const Remove = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${Colors.WHITE};
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  cursor: pointer;
`;

const ProductTitle = styled.div`
  padding: 5px;
`;

const Price = styled.div``;
const DiscountedPrice = styled.div`
  display: inline-block;
  padding: 5px;
  font-weight: bold;
`;
const PreviousPrice = styled.div`
  display: inline-block;
  padding: 5px;
  text-decoration: line-through;
  opacity: 0.5;
`;
const Discount = styled.div`
  text-align: center;
  color: ${Colors.DARK_GREEN};
`;

export const ProductShortDetails = ({
  selectedProducts,
  products,
  removeProduct,
}) => {
  if (!selectedProducts.length) return null;

  let product = products.compareSummary;

  return selectedProducts.map((selectedProduct, index) => (
    <ProductSummaryContainer key={index}>
      <ImageContainer>
        <Image src={product.images[selectedProduct]} />
        {selectedProducts.length === 1 ? null : (
          <Remove
            onClick={(event) => {
              removeProduct(event, selectedProduct);
            }}
          >
            &#10006;
          </Remove>
        )}
      </ImageContainer>
      <ProductTitle>{product.titles[selectedProduct].title}</ProductTitle>
      <Price>
        <DiscountedPrice>
          {product.productPricingSummary[selectedProduct].finalPrice}
        </DiscountedPrice>
        <PreviousPrice>
          {product.productPricingSummary[selectedProduct].price}
        </PreviousPrice>
        <Discount>
          {product.productPricingSummary[selectedProduct].totalDiscount}% off
        </Discount>
      </Price>
    </ProductSummaryContainer>
  ));
};
