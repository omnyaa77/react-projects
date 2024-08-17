import "./Box.css" ; 
import File from "../File/File";
import Amy from "../../assets/amy.webp" ; 
import max from "../../assets/max.png" ; 

function Box()  { 
    return (
        <div id="parent"> 
 <File head="amyrobson" label=" 1 month ago" image={Amy} ></File>
 <File head="maxblagun" label=" 2 weeks ago" image={max}> </File>

   </div>

    )
}

export default Box
