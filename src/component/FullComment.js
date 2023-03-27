import styles from "./FullComment.module.css";
import { useEffect, useState } from "react";

import {
  getComment,
  deleteComment,
  getAllComments,
} from "../services/requestService";

const FullComment = ({ selectedId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (selectedId) {
      getComment(selectedId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [selectedId]);

  const deleteHandler = () => {
    deleteComment(selectedId)
      .then((res) =>
        getAllComments().then((res) => {
          setComments(res.data);
          setSelectedId(null);
          setComment(null);
        })
      )
      .catch();
  };

  let commentDetail = <p>Please select a comment !</p>;
  if (selectedId) commentDetail = <p>Loading ...</p>;

  if (comment)
    commentDetail = (
      <div className={styles.container}>
        <div className={styles.comment}>
          <p>{comment.name} </p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
          <button onClick={deleteHandler}>delete</button>
        </div>
      </div>
    );

  return commentDetail;
};
export default FullComment;
