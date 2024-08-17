import { useState , useEffect } from "react";
import "./Followers.css" ; 

function Followers () { 
const [arrayOfObjects , setArrayOfObjects ] = useState ( [ ] ) ; 


useEffect(() => {
     function CallApi() {
     fetch("http://localhost:3000/followers")
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
         <div id="social"> 
         
            {arrayOfObjects.map((item) => (
                <div id="container">
                    <h1>{item.platform}</h1>
                    <h1>{item.username}</h1>
                    <h1>{item.metric}</h1>
                    <h1>{item.value}</h1>
                    <h1>{item.change}</h1>
</div> 
                
            )
        
        )}
         </div>
    )
    

}

export default Followers 