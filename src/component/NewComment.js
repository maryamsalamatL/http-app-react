import styles from "./NewComment.module.css";
import { useState } from "react";
import axios from "axios";
import http from "../services/httpService";
import { postComment, getAllComments } from "../services/requestService";
import profile1 from "./pictures/profile1.png";
import profile2 from "./pictures/profile2.png";
import profile3 from "./pictures/profile3.png";
import profile4 from "./pictures/profile4.png";
import profile5 from "./pictures/profile5.png";
import profile6 from "./pictures/profile6.png";
import profile7 from "./pictures/profile7.png";

const images = [
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
  profile7,
];

const NewComment = ({ setComments, setIsShow }) => {
  console.log(Math.floor(Math.random() * 5));
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
    img: "",
  });
  const changeHandler = (e) => {
    setComment({
      ...comment,
      img: images[Math.floor(Math.random() * 6)],
      [e.target.name]: e.target.value,
    });
  };

  const addNewComment = (e) => {
    if (comment.name === "" || comment.email === "" || comment.body === "") {
      alert("Please complete the form !");
      return;
    }
    e.preventDefault();
    postComment(comment).then((res) => {
      getAllComments().then((res) => setComments(res.data));
    });
    setComment({
      name: "",
      email: "",
      body: "",
      img: "",
    });
    setIsShow(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputBox}>
          <label>name</label>
          <input type="text" name="name" onChange={changeHandler}></input>
        </div>
        <div className={styles.inputBox}>
          <label>email</label>
          <input type="email" name="email" onChange={changeHandler}></input>
        </div>
        <div className={styles.inputBox}>
          <label>content</label>
          <input type="textarea" name="body" onChange={changeHandler}></input>
        </div>
        <button onClick={addNewComment}>add</button>
      </form>
    </div>
  );
};

export default NewComment;
