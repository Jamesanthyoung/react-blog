import BlogPostList from "../components/blogPosts/BlogPostList";

const DUMMY_DATA = [
  {
    id: "bp1",
    title: "This is my first blog post",
    image:
      "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    date: "14/11/2021",
    description:
      "This is my first blog post, talking about how I am learning react.",
  },
  {
    id: "bp2",
    title: "This is my second blog post",
    image:
      "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    date: "14/11/2021",
    description:
      "This is my first blog post, talking about how I am learning react.",
  },
  {
    id: "bp3",
    title: "This is my third blog post",
    image:
      "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    date: "14/11/2021",
    description:
      "This is my first blog post, talking about how I am learning react.",
  },
];

function AllBlogPostsPage() {
  return (
    <section>
      <h1>All Blog Posts</h1>
        <BlogPostList blogPosts={DUMMY_DATA}/>
    </section>
  );
}

export default AllBlogPostsPage;
