import addToCard from "../Cart/actions"
import { removeFromCart } from "../Cart/actions";

export const addToCardThunk = (add, toastAdd) => { //coment

	// No thunk retornamos uma função anonima
  return (dispatch, getState) => {

	// aqui estamos pegando o state card 
    const { cart } = getState();
    console.log(cart)
	// aqui adicionamos o comentário que entrou como parâmetro lá em cima
    const product = { add };
	// nessa linha damos o dispatch na nossa action, com a alteração feita
    toastAdd()
    dispatch(addToCard(product));
  };
};

export const removeToCardThunk = (remove, toastRemove) => {
  return (dispatch, getState) => {
    const {cart} = getState()
    console.log("cart",cart)
    const id = { remove }
    toastRemove()
    dispatch(removeFromCart(id))
  }
}


// ENVIA PARA A LOCAL STORAGE
// localStorage.setItem("updatecart",JSON.stringify(cart));
          // PEGA O VALOR
// const [token] = useState(
//   JSON.parse(localStorage.getItem("updatecart")) || ""
// );