import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context'
//step 2 takes the props and uss the inofrmation what we see on page


function MeetUpItem(props) {
  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  
  function toggleFavoritesStatushandler(){
    if (itemIsFavorite) {
        favoritesCtx.removeFavorite(props.id);

    }else{
      favoritesCtx.addFavorite({
        id:props.id,
        title:props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
    
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.content}>
          {/* <button className={classes.actions}> To Favoritess </button> */}
          <button onClick={toggleFavoritesStatushandler}> {itemIsFavorite ? 'Remove from favorites' : "To Favorites"} </button>

        </div>
      </Card>
    </li>
  );
}

export default MeetUpItem;
