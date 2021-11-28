import { AppBar, Box, Toolbar, Typography, IconButton } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledBadge } from "./style";
import "./style.css";
import { activeFromCart } from "../../store/modules/ShowCart/actions";
import { useState } from "react";

const Header = () => {

  const somBuy = useSelector((store) => store.cart)
  const {show} = useSelector((store) => store.showCart)

  const dispatch = useDispatch()

  const enableCart = () => {
    dispatch(activeFromCart(!show))
  }

    const [list] = useState(
    JSON.parse(localStorage.getItem("updatecart")) || ""
  );


  console.log("carrinho", somBuy, "list", list)

  function tamanho () {
    if(list.length >= 1){
      return list.length
    } else {
      return somBuy.length
    }
  }

  const tamanhoLeng = tamanho()


  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Commerce
          </Typography>
          <IconButton aria-label="cart" onClick={enableCart}>
              <StyledBadge badgeContent={tamanhoLeng} color="secondary">
                <ShoppingCart />
              </StyledBadge>
            </IconButton>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
};

export default Header;
