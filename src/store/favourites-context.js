import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteBlogPost) => {},
  removeFavourite: (blogPostId) => {},
  itemIsFavourite: (blogPostId) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favouriteBlogPost) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteBlogPost);
    });
  }

  function removeFavouriteHandler(blogPostId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter(
        (blogPost) => blogPost.id !== blogPostId
      );
    });
  }

  function itemIsFavouriteHandler(blogPostId) {
    return userFavourites.some((blogPost) => blogPost.id === blogPostId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;