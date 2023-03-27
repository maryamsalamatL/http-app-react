import styles from "./CommentCom.module.css";
import Comment from "./Comment";
import { useRef } from "react";
import { Component } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CommentCom = ({ comments, clickHandler, error }) => {
  const sliderRef = useRef();
  const renderComment = () => {
    let renderValue = <p>Loading ...</p>;
    if (error) renderValue = <p>fetch data failed</p>;
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          img={c.img}
          styles={styles}
          clickHandler={() => clickHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <div className={`${styles.container} ${styles.selected}`}>
      {renderComment()}
    </div>
  );
};
export default CommentCom;

// class CommentCom extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         {this.props.comments
//           ? this.props.comments.map((c) => (
//               <Comment
//                 styles={styles}
//                 name={c.name}
//                 email={c.email}
//                 clickHandler={""}
//               />
//             ))
//           : "loading ..."}
//       </div>
//     );
//   }
// }
