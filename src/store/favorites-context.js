import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorite) =>
      prevUserFavorite.concat(favoriteMeetup)
    );
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorite) =>
      prevUserFavorite.filter((meetup) => meetup.id !== meetupId)
    );
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteHandler,
    removeFavoriteHandler,
    itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
