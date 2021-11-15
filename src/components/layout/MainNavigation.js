import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Blog</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Blog Posts</Link>
          </li>
          <li>
            <Link to="/new-blog-post">New Blog Post</Link>
          </li>
          <li>
            <Link to="/favourites">Favourite Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
