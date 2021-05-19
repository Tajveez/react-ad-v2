import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext);
  let content = favoritesCtx.totalFavorites ? (
    <MeetupList meetups={favoritesCtx.favorites} />
  ) : (
    <p>
      <em>You got no Favorites yet, try adding some?</em>
    </p>
  );
  return (
    <section>
      <h1>Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
