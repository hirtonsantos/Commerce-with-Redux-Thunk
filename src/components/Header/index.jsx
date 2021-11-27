import { AppBar, Box, Toolbar, Typography, IconButton } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons";
import * as React from "react";
import { StyledBadge } from "./style";
import "./style.css";

const Header = () => {

  // se você clicar no icone, irá aparecer um componente

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Commerce
          </Typography>
          <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCart />
              </StyledBadge>
            </IconButton>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
};

export default Header;
