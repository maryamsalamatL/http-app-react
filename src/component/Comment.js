const Comment = ({ styles, name, email, clickHandler, img }) => {
  return (
    <div className={styles.comment} onClick={clickHandler}>
      <div className={styles.profile}>
        <img src={img} className={styles.profileImg}></img>
      </div>
      <p className={styles.name}>{name}</p>
      {/* <span>email : {email}</span> */}
    </div>
  );
};

export default Comment;
