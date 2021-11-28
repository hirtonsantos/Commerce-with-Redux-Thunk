import * as React from 'react';
import { Typography, IconButton, Avatar, Card ,CardActions , CardContent ,CardMedia, CardHeader} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Favorite, Share, MoreVert } from '@material-ui/icons';
import "./style.css"
import { StyledBadge } from '../Header/style';
import { AddShoppingCartTwoTone } from '@material-ui/icons';
import { useDispatch } from "react-redux";
// import { addToCard } from "../../store/modules/Cart/actions";
import { addToCardThunk } from '../../store/modules/Cart/thunks';
import {toast} from "react-hot-toast"

export default function RecipeReviewCard({ product }) {

  const { name, image, price, description } = product;
  const dispatch = useDispatch();

  const toastAdd = () => {
    toast.success("Item adicionado ao carrinho")
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name} // NOME DA COMIDA
        subheader={price.toFixed(2)}    // ANO DA COMIDA
      />
      <CardMedia
        component="img"
        height="194"
        image={image} // IMAGEM DA COMIDA 
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
        <IconButton aria-label="cart" onClick={() => dispatch(addToCardThunk(product, toastAdd))}>
              <StyledBadge color="secondary">
                <AddShoppingCartTwoTone />
              </StyledBadge>
            </IconButton>
      </CardActions>
    </Card>
  );
}
