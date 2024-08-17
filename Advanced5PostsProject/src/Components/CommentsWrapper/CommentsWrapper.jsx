import "./CommentsWrapper.css";

function CommentsWrapper(props) {
  return (
    <div>
      {props.AllComments.map((comment) => {
        return (
          <div>
            <p>{comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsWrapper;
