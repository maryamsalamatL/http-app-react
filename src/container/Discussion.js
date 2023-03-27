import CommentCom from "../component/CommentCom";
import FullComment from "../component/FullComment";
import NewComment from "../component/NewComment";
import styles from "./Discussion.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import http from "../services/httpService";
import { Component } from "react";
import { useToasts, ToastProvider } from "react-toast-notifications";
import { getAllComments } from "../services/requestService";
import Post from "../component/Post";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch {
        setError(true);
      }
    };

    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  return (
    <div className={styles.container}>
      <Post setIsShow={setIsShow} />
      {isShow && <NewComment setComments={setComments} setIsShow={setIsShow} />}
      <CommentCom
        comments={comments}
        clickHandler={selectCommentHandler}
        error={error}
      />
      <FullComment
        selectedId={selectedId}
        setComments={setComments}
        setSelectedId={setSelectedId}
      />
    </div>
  );
};

export default Discussion;
// class Discussion extends Component {
//   state = {
//     comments: null,
//   };
//   componentDidMount() {
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => this.setState({ comments: res.data.slice(0, 3) }))
//       .catch((err) => console.log(err));
//   }
//   render() {
//     return (
//       <div>
//         <CommentCom comments={this.state.comments} />
//       </div>
//     );
//   }
// }
