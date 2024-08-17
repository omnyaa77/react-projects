import { useState } from "react";
import "./AddnewComment.css";

function AddnewComment(props) {
  const [commentInput, setCommentInput] = useState("");

  function HandleOnChange(event) {
    setCommentInput(event.target.value);
  }
  function HandleAddNewComment(event) {
    props.HideReplaySection();
    const id = event.target.getAttribute("uniqueid");
    props.addNewComment(commentInput, id);
    setCommentInput("");
  }
  return (
    <div className="AddNewCommentSection">
      <input
        value={commentInput}
        placeholder="Add new Comment ....."
        onChange={HandleOnChange}
      ></input>
      <button onClick={HandleAddNewComment} uniqueid={props.UniqueID}>
        Send New Comment
      </button>
    </div>
  );
}

export default AddnewComment;
