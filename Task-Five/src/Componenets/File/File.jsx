import Counter  from "../Counter/Counter";

import reply from "../../assets/icon-reply.svg" ; 


function File (props) {
return (

    <div id="box"> 
    <button id="ptn"> <Counter> </Counter>   </button> 
<img id="image" src={props.image}/> 
<span id="bold">  {props.head} </span>
<span id="grey"> { props.label}</span>
<img id="reply" src={reply}/> <span id="violet"> Reply </span>
<p id="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perferendis reprehenderit voluptatum
    officia soluta maxime fuga eaque iusto! Accusamus officiis officia similique,
    odit distinctio commodi expedita architecto ratione voluptates necessitatibus.</p>
  </div>

)




}



export default File 