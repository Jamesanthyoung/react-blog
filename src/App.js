import { Route } from "react-router-dom";
import { Routes } from "react-router";
import AllBlogPostsPage from "./pages/AllBlogPosts";
import NewBlogPostPage from "./pages/NewBlogPost";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllBlogPostsPage />}></Route>
        <Route path="/new-blog-post" element={<NewBlogPostPage />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
