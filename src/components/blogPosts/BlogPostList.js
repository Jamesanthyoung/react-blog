import BlogPostItem from "./BlogPostItem";
import classes from "./BlogPostList.module.css";

function BlogPostList(props) {
  return (
    <ul className={classes.list}>
      {props.blogPosts.slice(0).reverse().map((blogPost) => (
        <BlogPostItem
          key={blogPost.id}
          id={blogPost.id}
          image={blogPost.image}
          title={blogPost.title}
          date={blogPost.date}
          description={blogPost.description}
        />
      ))}
    </ul>
  );
}

export default BlogPostList;
