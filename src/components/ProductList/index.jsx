import "./style.css"
import { useSelector } from "react-redux";
import RecipeReviewCard from "../RecipeReviewCard"
import Cart from "../Cart";
import { Content } from "./style";
import Button from "../Button"
import { useState } from "react";

const ProductList = () => {

  const produtos = useSelector((store) => store.products)
  const carrinho = useSelector((store) => store.cart)
  const {show} = useSelector((store) => store.showCart)



  function getItem(){
    localStorage.setItem("updatecart",JSON.stringify(carrinho));
  }





  // console.log("carrinho", somBuy, "list", list)

  const [newlist] = useState(
    JSON.parse(localStorage.getItem("updatecart")) || ""
  );

  function current () {

    if(newlist.length >= 1){
      return newlist
    } else {
      return carrinho
    }
  }

  const tamanhocurrent = current()

  const somPrice = tamanhocurrent.reduce((acc, curr) => {
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
      {tamanhocurrent.map((item) => {
        return <Cart product={item} key={item.id}/>
      })}
      </div>
      <nav>
      <span>Preço total: <p>{somPrice.toFixed(2)}</p></span>
      <Button onclick={getItem}> Fechar carrinho </Button>
      </nav>
      </Content>
      </div>
  )
};

export default ProductList;