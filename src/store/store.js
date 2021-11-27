import { createStore, combineReducers } from "redux";
import productsReducer from "./modules/Products/reducer";
import cartReducer from "./modules/Cart/reducer";
import showCartReducer from "./modules/ShowCart/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  showCart: showCartReducer,
});

const store = createStore(reducers);

export default store;