import { normalize } from "normalizr";
import { ProductsActionTypes } from "../types";

const INITIAL_STATE = {
  products: {},
  isFetching: false,
  error: null,
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };

    case ProductsActionTypes.FETCH_PRODUCTS_FALIURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    // case ProductsActionTypes.DESERIALIZE_PRODUCTS:
    //   let normalizedProducts = normalize(action.payload, productsSchema);

    //   return {
    //     ...state,
    //     products: normalizedProducts,
    //   };

    default:
      return state;
  }
};
