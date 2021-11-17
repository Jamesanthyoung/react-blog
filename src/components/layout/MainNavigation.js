import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";
import logo from './logo2.png'; // with import

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div><img className={classes.logo} src={logo} alt="logo"/></div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Blog Posts</Link>
          </li>
          <li>
            <Link to="/new-blog-post">New Blog Post</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites<span className={classes.badge}>{favouritesCtx.totalFavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
