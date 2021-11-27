import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/Products/reducer";
import cartReducer from "./modules/Cart/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;