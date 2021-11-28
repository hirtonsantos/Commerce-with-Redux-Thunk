import { useDispatch } from "react-redux";
// import { removeFromCart } from "../../store/modules/Cart/actions";
import { removeToCardThunk } from "../../store/modules/Cart/thunks";
import Button from "../Button";
import { Container } from "./style";
import { toast } from "react-hot-toast"

const Cart = ({ product }) => {
  const { name, price, id, image} = product;

  // console.log(product)

  const dispatch = useDispatch();

  const toastRemove = () => {
    toast.success("Remoção concluída")
  };

  return (
    <Container>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{price.toFixed(2)}</span>
      <Button onclick={() => dispatch(removeToCardThunk(id, toastRemove))}>
        Remover do carrinho
      </Button>
    </Container>
  );
};

export default Cart;
