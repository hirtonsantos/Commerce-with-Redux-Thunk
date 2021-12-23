import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/modules/Cart/actions";
import { removeToCardThunk } from "../../store/modules/Cart/thunks";
import Button from "../Button";
import { Container } from "./style";
import { toast } from "react-hot-toast"

const Cart = ({ product, setIsLog, isLog }) => {
  const { name, price, id, image} = product;

  // console.log(product)

  const dispatch = useDispatch();

  const toastRemove = () => {
    toast.success("Remoção concluída")
  };

  function teste () {
    dispatch(removeToCardThunk(id, toastRemove))
    setIsLog(!isLog)
  }

  return (
    <Container>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{price.toFixed(2)}</span>
      <Button onclick={teste}>
        Remover do carrinho
      </Button>
    </Container>
  );
};

export default Cart;
