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

export default function RecipeReviewCard({ product }) {

  const { name, image } = product;
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name} // NOME DA COMIDA
        subheader="September 14, 2016"    // ANO DA COMIDA
      />
      <CardMedia
        component="img"
        height="194"
        image={image} // IMAGEM DA COMIDA 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
        <IconButton aria-label="cart" onClick={() => dispatch(addToCardThunk(product))}>
              <StyledBadge color="secondary">
                <AddShoppingCartTwoTone />
              </StyledBadge>
            </IconButton>
      </CardActions>
    </Card>
  );
}
