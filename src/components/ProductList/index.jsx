import "./style.css"
import { useSelector } from "react-redux";
import RecipeReviewCard from "../RecipeReviewCard"
import Cart from "../Cart";
import { Content } from "./style";
import Button from "../Button"

const ProductList = () => {

  const produtos = useSelector((store) => store.products)
  const carrinho = useSelector((store) => store.cart)
  const {show} = useSelector((store) => store.showCart)


  const somPrice = carrinho.reduce((acc, curr) => {
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
      {carrinho.map((item) => {
        return <Cart product={item} key={item.id}/>
      })}
      <nav>
      <span>Preço total: <p>{`${somPrice}`}</p></span>
      <Button> Fechar carrinho </Button>
      </nav>
      </Content>
      </div>
  )
};

export default ProductList;