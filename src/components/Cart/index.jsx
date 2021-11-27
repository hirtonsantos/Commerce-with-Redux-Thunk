import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/Cart/actions";

const Cart = ({ product }) => {
  const { name, price, id, image} = product;

  const dispatch = useDispatch();

  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h3>{price}</h3>
      <button onClick={() => dispatch(removeFromCart(id))}>
        Remover do carrinho
      </button>
    </div>
  );
};

export default Cart;
