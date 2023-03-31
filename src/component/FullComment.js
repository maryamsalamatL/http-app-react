import styles from "./FullComment.module.css";
import { useEffect, useState } from "react";
import { BsFillTrashFill, BsChevronUp, BsFillHeartFill } from "react-icons/bs";
import {
  getComment,
  deleteComment,
  getAllComments,
} from "../services/requestService";

const FullComment = ({ selectedId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);
  const [like, setLike] = useState(false);

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
  const closeHandler = () => {
    setSelectedId(null);
    setComment(null);
  };

  let commentDetail = (
    <p style={{ color: "#cc8383", margin: "5px" }}>Please select a comment !</p>
  );

  if (selectedId) commentDetail = <p>Loading ...</p>;

  if (comment)
    commentDetail = (
      <div className={styles.container}>
        <div className={styles.comment}>
          <div className={styles.profile}>
            <img src={comment.img} className={styles.img} />
            <div className={styles.info}>
              <p className={styles.name}>{comment.name}</p>
              <p className={styles.email}>{comment.email}</p>
            </div>
          </div>
          <p className={styles.body}>{comment.body}</p>
          <div className={styles.iconBox}>
            <BsChevronUp
              onClick={closeHandler}
              className={`${styles.icon} ${styles.up}`}
            />
            <BsFillHeartFill
              onClick={() => setLike(!like)}
              className={`${styles.icon} ${like && styles.liked}`}
            />
            <BsFillTrashFill onClick={deleteHandler} className={styles.icon} />
          </div>
        </div>
      </div>
    );

  return commentDetail;
};
export default FullComment;
