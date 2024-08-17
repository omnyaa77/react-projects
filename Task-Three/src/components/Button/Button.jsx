import "./Button.css" ; 
import Media from "../Media/Media";

function Button () { 
    const ArrayOfObjects = [

       { social:"GitHub" , id:1 }       ,       
        { social:"Frontend Mentor" , id:2   }, 
         {social:"Twitter"           }    ,  
         { social:"Instagram"} ,
         { social:"Linkedin"} ,
    ] ; 



    return ( 
    <div id="form"> 
{ArrayOfObjects.map((item) => {
return(
    <Media social={item.social}> </Media>
) ; 

})}
   
    </div>
) ;  
} 
export default Button ; 