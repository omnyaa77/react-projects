import './App.css'
import { useEffect, useState } from 'react' ; 

function App() {
const [ArrayOfObjects , setArrayOfObjects]  = useState ([ ]) ; 

useEffect(() => {
   function CallApi() {
   fetch("http://localhost:3000/users")
   .then((response) => {
   return response.json();
   })
   .then((finalResult) => {
   setArrayOfObjects(finalResult);
 });
   }
   CallApi();
   }, []);
  


return (
    <>
    <div> 
      {ArrayOfObjects.map((item) => {
        return <h1>{item.username} </h1> ; 
      }
    
    )}
    </div>
    </>
  ) ; 
}

export default App ; 
