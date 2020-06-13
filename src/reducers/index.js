import { combineReducers } from "redux";
import { productsReducer } from "./products";

const getReducers = combineReducers({
  products: productsReducer,
});

export default getReducers;
