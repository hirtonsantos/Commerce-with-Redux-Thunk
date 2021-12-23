import {addToCard} from "../Cart/actions"
import {removeFromCart} from "../Cart/actions";

export const addToCardThunk = (add, toastAdd) => { //coment

  return (dispatch, getState) => {
    const { cart } = getState();
    console.log(cart)
    const product = { add };
    toastAdd()
    dispatch(addToCard(product));
  };
};

export const removeToCardThunk = (remove, toastRemove) => {

  return (dispatch, getState) => {
    const {cart} = getState()
    console.log(cart)
    const id = { remove }
    toastRemove()
    dispatch(removeFromCart(id))
  }
}