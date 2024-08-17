import "./TextContainer.css" ; 
import cart from "../../assets/cart.svg" ; 


function TextContainer () { 
    return (
        <div id="text"> 
        <span id="title"> PERFUME </span>
        <h1 id="header"> Gabrielle Essence Eau De Parfum</h1>
        <p id="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas, 
            sapiente officia et voluptatibus magni ut 
            dolorem optio Dolorem officiis minima vero saepe ducimus rerum eveniet delectus, sequi .</p>
        <div id="price"> 
            <label id="green"> $ 149.99 </label>
            <label id="grey"> <s>    $ 169.99  </s>  </label>
        </div>
        <div> 
            <button id="cart">
                <span>  Add to Cart </span>  
               <img src={cart}></img>
                </button>
                </div>

        
        
        
        
        
        
        
        
        
        
        
        
         </div> ) 
    
}
export default TextContainer ; 