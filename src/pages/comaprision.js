import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  ProductShortDetails,
  ProductFeatureDetails,
} from "../components/product";
import { Dropdown, Spinner, Colors } from "../components/common";
import { fetchProducts } from "../actions/product";

const ComaprisionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CompareHeadline = styled.div`
  display: flex;
  align-self: center;
  font-size: 28px;
  width: 100%;
  padding: 5px 10px;
  flex-direction: column;
  align-items: center;
`;
const ProductsContainer = styled.div``;

const ShortDetailsContainer = styled.div`
  display: flex;
`;

const AllDetailsContainer = styled.div`
  border: 1px solid ${Colors.GREY};
`;

const Tilte = styled.div`
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;

const Count = styled.div`
  padding: 5px;
  font-size: 18px;
  opacity: 0.9;
`;

const Comparision = () => {
  const products = useSelector((store) => store.products.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const isFetching = useSelector((store) => store.products.isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToSelectedProducts = (product) => {
    let isDuplicate = selectedProducts.includes(product);
    !isDuplicate
      ? setSelectedProducts([...selectedProducts, product])
      : alert("Product already added :-)");
  };

  if (!Object.keys(products).length) return <Spinner />;
  if (isFetching) return <Spinner />;
  if (!selectedProducts.length) {
    addToSelectedProducts(Object.keys(products.compareSummary.titles)[0]);
  }
  // setSelectedProducts([])

  const selectProduct = (event) => {
    let product = event.target.options[event.target.selectedIndex].dataset.id;
    addToSelectedProducts(product);
  };

  const removeProduct = (event, productToRemove) => {
    if (!selectedProducts.length) return;
    setSelectedProducts(
      selectedProducts.filter((product) => product !== productToRemove)
    );
  };
  return (
    <ComaprisionContainer>
      <ProductsContainer>
        <ShortDetailsContainer>
          <CompareHeadline>
            <div>Compare Products</div>
            <Count> {selectedProducts.length} item selected</Count>
          </CompareHeadline>
          <ProductShortDetails
            products={products}
            selectedProducts={selectedProducts}
            removeProduct={removeProduct}
          />
        </ShortDetailsContainer>
        <AllDetailsContainer>
          <ProductFeatureDetails
            selectedProducts={selectedProducts}
            products={products}
          />
        </AllDetailsContainer>
      </ProductsContainer>
      {selectedProducts.length >= 0 && selectedProducts.length <= 3 ? (
        <Dropdown
          options={products?.compareSummary?.titles}
          selectProduct={selectProduct}
        >
          <Tilte>Add a product</Tilte>
        </Dropdown>
      ) : null}
    </ComaprisionContainer>
  );
};

export default Comparision;
