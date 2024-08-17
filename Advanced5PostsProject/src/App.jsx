import { useEffect, useState } from "react";
import "./App.css";
import NewPost from "./Components/AddNewPost/NewPost";
import Post from "./Components/Post/Post";

function App() {
  const [ArrayOfObjects, setArrayOfObjects] = useState([
    {
      likes: 0,
      content: "Post11111",
      id: 1,
      username: "Fady",
      comments: [],
    },
    {
      likes: 0,
      content: "Post22222",
      id: 2,
      username: "Mai",
      comments: [],
    },
    {
      likes: 0,
      content: "Post333331",
      id: 3,
      username: "Hend",
      comments: [],
    },
  ]);

  //Function resoponsaible for creating and appeding the new post inside the array of objects that hold all the posts
  function xyz(PostContent) {
    //Create new object with the same keys of the original one
    let newPostObject = {
      likes: 0,
      content: PostContent,
      id: ArrayOfObjects.length + 1,
      username: "Fady",
      comments: [],
    };

    //Create new Array of objects and put inside all the old values + the new object
    let newArrayofobjects = [...ArrayOfObjects, newPostObject];

    //Update the state using the setArrayofobjects method
    setArrayOfObjects(newArrayofobjects);
  }

  //Function responsible for delting the selected post from the orignal array of object
  function deleteItem(PostId) {
    const newArrayAfterDelete = ArrayOfObjects.filter((post) => {
      return post.id != PostId;
    });
    setArrayOfObjects(newArrayAfterDelete);
  }

  function addNewComment(commentContent, id) {
    console.log(commentContent, id);

    let newArrayAfterUpdate = ArrayOfObjects.map((currentPost) => {
      if (currentPost.id == id) {
        currentPost.comments.push(commentContent);
      }
      return currentPost;
    });
    setArrayOfObjects(newArrayAfterUpdate);
  }

  return (
    <>
      <div id="PostsWrapper">
        {ArrayOfObjects.map((post) => {
          return (
            <Post
              UniqueID={post.id}
              key={post.id}
              likes={post.likes}
              content={post.content}
              username={post.username}
              comments={post.comments}
              addNewComment={addNewComment}
              delteItem={deleteItem}
            ></Post>
          );
        })}
      </div>

      <NewPost AddnewPostInsideArray={xyz}></NewPost>
    </>
  );
}

export default App;
