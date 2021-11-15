import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewBlogPostForm.module.css";

function NewBlogPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const blogPostData = {
        title: enteredTitle,
        image: enteredImage,
        date: enteredDate,
        description: enteredDescription
    };

    //console.log(blogPostData);
    props.onAddBlogPost(blogPostData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Blog Post Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Blog Post Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Blog Post Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
          <button>Submit Post</button>
        </div>
      </form>
    </Card>
  );
}

export default NewBlogPostForm;
