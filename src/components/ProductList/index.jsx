import "./style.css"
import { useSelector } from "react-redux";
import RecipeReviewCard from "../RecipeReviewCard"
import Cart from "../Cart";
import { Content } from "./style";
import Button from "../Button"

const ProductList = () => {

  const produtos = useSelector((store) => store.products)
  const {show} = useSelector((store) => store.showCart)

  const cartList = JSON.parse(localStorage.getItem("cart")) || []

  const somPrice = cartList.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)

  return (
    <div className="main">
      <div className="products">
      {produtos.map((item) => {
        return <RecipeReviewCard product={item} key={item.id}/> 
      })}
        </div>
      <Content show={show}>
        <div className="carts-car">
      {cartList.map((item) => {
        return <Cart product={item} key={item.id}/>
      })}
      </div>
      <nav>
      <span>Preço total: <p>{somPrice.toFixed(2)}</p></span>
      <Button coloRed={true}> Fechar carrinho </Button>
      </nav>
      </Content>
      </div>
  )
};

export default ProductList;