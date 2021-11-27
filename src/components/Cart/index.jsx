import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/Cart/actions";
import Button from "../Button";
import { Container } from "./style";

const Cart = ({ product }) => {
  const { name, price, id, image} = product;

  const dispatch = useDispatch();

  return (
    <Container>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{price}</span>
      <Button onClick={() => dispatch(removeFromCart(id))}>
        Remover do carrinho
      </Button>
    </Container>
  );
};

export default Cart;
