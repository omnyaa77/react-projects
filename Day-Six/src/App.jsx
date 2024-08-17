import Post from "./Components/Post/Post" ; 
import Newpost from "./Components/Newpost/Newpost" ; 
import './App.css'

function App() {
 const ArrayOfObjects = [ 
  {
    likes : 0 ,
    content : "postt",
    id:1, 
  },
  {
    likes : 5 ,
    content : "postt",
    id:1, 
  }
  
 ] ; 
  function AddNewPostInsideArray (postcontent) {
    console.log (postcontent) ; 
  }
    return (
      <>
      <div>
        {ArrayOfObjects.map((post) => {
          return (
            <Post key={post.id}
            likes={post.likes}
            content={post.content}>
            </Post>
          )
        }
      )}
      </div>
      <Newpost AddNewPostInsideArray={AddNewPostInsideArray}> </Newpost>
      </>
    ) ; 
    
  
}

export default App
