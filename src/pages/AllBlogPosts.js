import { useState, useEffect } from "react";

import BlogPostList from "../components/blogPosts/BlogPostList";

function AllBlogPostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBlogPosts, setLoadedBlogPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-my-blog-85a8f-default-rtdb.firebaseio.com/blogPosts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const blogPosts = [];

        for (const key in data) {
          const blogPost = {
            id: key,
            ...data[key],
          };
          blogPosts.push(blogPost);
        }

        setIsLoading(false);
        setLoadedBlogPosts(blogPosts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Blog Posts</h1>
      <BlogPostList blogPosts={loadedBlogPosts} />
    </section>
  );
}

export default AllBlogPostsPage;
