import "./style.css"
import { useSelector } from "react-redux";
import RecipeReviewCard from "../RecipeReviewCard"
import Cart from "../Cart";
import { Content } from "./style";
import Button from "../Button"
import { useState } from "react";

const ProductList = () => {

  const produtos = useSelector((store) => store.products)
  const {show} = useSelector((store) => store.showCart)
  const cartList = useSelector((store) => store.cart)
  const [isLog, setIsLog] = useState(false)

  const somPrice = cartList.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)


  return isLog ? (
    <div className="main">
      <div className="products">
      {produtos.map((item) => {
        return <RecipeReviewCard product={item} key={item.id}/> 
      })}
        </div>
      <Content show={show}>
        <div className="carts-car">
      {cartList.map((item) => {
        return <Cart product={item} key={item.id} isLog={isLog} setIsLog={setIsLog}/>
      })}
      </div>
      <nav>
      <span>Preço total: <p>{somPrice.toFixed(2)}</p></span>
      <Button coloRed={true}> Fechar carrinho </Button>
      </nav>
      </Content>
      </div>
  ) : (
    <div className="main">
      <div className="products">
      {produtos.map((item) => {
        return <RecipeReviewCard product={item} key={item.id}/> 
      })}
        </div>
      <Content show={show}>
        <div className="carts-car">
      {cartList.map((item) => {
        return <Cart product={item} key={item.id} isLog={isLog} setIsLog={setIsLog}/>
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