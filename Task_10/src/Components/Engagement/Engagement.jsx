import { useState , useEffect } from "react";
import "./Engagement.css" ; 

function Engagement () { 
const [arrayOfObjects , setArrayOfObjects ] = useState ( [ ] ) ; 


useEffect(() => {
     function CallApi() {
     fetch("http://localhost:3000/engagement")
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
        <div id="all"> 
        <header> Social Media Dashbord </header>
        <p> Total Followers : 23,004 </p>
         <div id="overview"> 
            {arrayOfObjects.map((item) => (
                <div key={item.platform}>
                    <h1>{item.platform}</h1>
                    <h1>{item.metric}</h1>
                    <h1>{item.value}</h1>
                    <h1>{item.change}</h1>   
                    </div>       
            )
        )}
         </div>
         </div> 
    )
    

}

export default Engagement 