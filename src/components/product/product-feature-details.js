import React from "react";
import styled from "styled-components";

import { Colors } from "../common";

const FeatureContainer = styled.div``;

const FeatureTitle = styled.div`
  background-color: ${Colors.LIGHT_GREY};
  padding: 10px;
  text-transform: uppercase;
  border-left: 1px solid ${Colors.GREY};
  border-right: 1px solid ${Colors.GREY};
  font-weight: bold;
`;

const FeatureCategoryContainer = styled.div`
  display: flex;
`;

const FeatureCategory = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-right: 1px solid ${Colors.GREY};
  font-weight: bold;
  &:last-child {
    border-right: none;
  }
`;

const FeatureValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-right: 1px solid ${Colors.GREY};
  padding: 10px;
  &:last-child {
    border-right: none;
  }
`;

export const ProductFeatureDetails = ({ products, selectedProducts }) => {
  if (!products.featuresList) return null;

  return products.featuresList.map((feature, index) => (
    <FeatureContainer key={index}>
      <FeatureTitle>{feature.title}</FeatureTitle>
      {feature.features.map((subFeature, ind) => (
        <FeatureCategoryContainer key={ind}>
          <FeatureCategory>{subFeature.featureName}</FeatureCategory>
          {selectedProducts.length
            ? selectedProducts.map((product, i) => {
                return (
                  <FeatureValue key={i}>
                    {subFeature.values[product]}
                  </FeatureValue>
                );
              })
            : null}
        </FeatureCategoryContainer>
      ))}
    </FeatureContainer>
  ));
};
