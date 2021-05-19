import { useContext } from "react";
import Card from "../ui/Card/Card";
import itemCss from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
const MeetupItem = ({ meetup }) => {
  const { id, title, image, address, description } = meetup;

  const favoritesCtx = useContext(FavoritesContext);
  const isItemFavorite = favoritesCtx.itemIsFavoriteHandler(id);

  function toggleFavoriteHandler() {
    if (isItemFavorite) {
      favoritesCtx.removeFavoriteHandler(id);
    } else {
      favoritesCtx.addFavoriteHandler(meetup);
    }
  }
  return (
    <Card>
      <li className={itemCss.list}>
        <div className={itemCss.image}>
          <img src={image} alt={title} />
        </div>
        <div className={itemCss.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={itemCss.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isItemFavorite ? "Remove From Favorites" : "Add To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
