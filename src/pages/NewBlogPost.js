import NewBlogPostForm from "../components/blogPosts/NewBlogPostForm";

function NewBlogPostPage() {
  function addBlogPostHandler(blogPostData) {
    fetch(
      "https://react-my-blog-85a8f-default-rtdb.firebaseio.com/blogPosts.json",
      {
        method: "POST",
        body: JSON.stringify(blogPostData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  
  return (
    <section>
      <h1>Add New Blog Post</h1>
      <NewBlogPostForm onAddBlogPost={addBlogPostHandler} />
    </section>
  );
}

export default NewBlogPostPage;
