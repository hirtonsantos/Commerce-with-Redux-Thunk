import "./style.css"
import { useSelector } from "react-redux";
import RecipeReviewCard from "../RecipeReviewCard"

const ProductList = () => {

  const produtos = useSelector((store) => store.products)
  const carrinho = useSelector((store) => store.cart)

  console.log(carrinho)

  return (
    <div className="main">
      <div className="products">
      {produtos.map((item) => {
        return <RecipeReviewCard product={item} key={item.id}/> 
      })}
      </div>
      </div>
  )
};

export default ProductList;