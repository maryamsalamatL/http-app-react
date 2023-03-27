import styles from "./Post.module.css";
import profile from "./pictures/profile.png";
import design from "./pictures/design.webp";
import { useState } from "react";
import { FaHeart, FaComment, FaThumbsDown } from "react-icons/fa";

const Post = ({ setIsShow }) => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.profile}>
          <img className={styles.profileImg} src={profile}></img>
        </span>
        <span>
          <h1>
            Alec J{" "}
            <span style={{ color: "#888", fontSize: "15px" }}>@alecjohan</span>
          </h1>
          <h4>This is my new design,what do you think?</h4>
        </span>
      </div>

      <div className={styles.imgBox}>
        <div className={styles.img}>
          <img src={design} />
        </div>
        <div className={styles.iconBox}>
          <FaHeart
            className={like && styles.liked}
            onClick={() => setLike(!like)}
          />
          <FaThumbsDown
            className={disLike && styles.disLike}
            onClick={() => setDisLike(!disLike)}
          />
          <FaComment className={styles.icon} onClick={() => setIsShow(true)} />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Post;
