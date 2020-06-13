import { ProductsActionTypes } from "../types";

const fetchProductsStart = () => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_START,
});

const fetchProductsSuccess = (data) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: data,
});

const fetchProductsFailure = (error) => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_FALIURE,
  payload: error,
});

const deserializeProducts = (products) => ({
  type: ProductsActionTypes.DESERIALIZE_PRODUCTS,
  payload: products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const respone = await fetch(
        "http://www.mocky.io/v2/5e9ebdaa2d00007800cb7697"
      );
      const data = await respone.json();
      dispatch(fetchProductsSuccess(data.products));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};
