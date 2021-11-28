import addToCard from "../Cart/actions"

export const addToCardThunk = (add) => { //coment

	// No thunk retornamos uma função anonima
  return (dispatch, getState) => {

	// aqui estamos pegando o state card 
    const { cart } = getState();

	// aqui adicionamos o comentário que entrou como parâmetro lá em cima
    const product = { add };
	// nessa linha damos o dispatch na nossa action, com a alteração feita
  localStorage.setItem("updatecart",JSON.stringify(cart))
    dispatch(addToCard(product));
  };
};


          // ENVIA PARA A LOCAL STORAGE
// localStorage.setItem("updatecart",JSON.stringify(cart));
          // PEGA O VALOR
// const [token] = useState(
//   JSON.parse(localStorage.getItem("updatecart")) || ""
// );