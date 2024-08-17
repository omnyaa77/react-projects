import "./Text.css" ; 
import avatar from "../../assets/avatar.jpeg" ; 

function Text () {
    return (
        <div id="head">
            <img id="photo" src={avatar}/>
            <h2 id="name"> Jessica Randall</h2>
            <label> London , United Kingdom </label>
            <h4 id="definition"> "Front-end developer and avid reader."</h4>
             </div>
        
    )
}

export default Text