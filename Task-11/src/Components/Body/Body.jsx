
import "./Body.css" ; 
import Cart from "../../assets/images/icon-cart.svg" 
import Counter from "../Counter/Counter"


function Body () { 
    return ( 
        <div className="parent">  
        <label> Sneaker Company </label>

        <h1> Fall Limited Edition Sneakers </h1>

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, iure. Voluptatem animi
             at tenetur suscipit maxime corrupti cum laudantium
             quia nihil aspernatur atque quidem omnis natus, ipsa quibusdam. Voluptates, dolore!</p>
        
<s> $150.00 </s>

<button>  <Counter> </Counter> </button>
       <button  id="cart">
                <span>  Add to Cart </span>  
               <img src={Cart}></img>
                </button>
        
             </div>
    )


}
export default Body 