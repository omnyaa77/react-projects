import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/images/logo.svg"
import Cart from "../../assets/images/icon-cart.svg" 
import avatar from "../../assets/images/image-avatar.png"
function NavBar () { 
    return (
        <> 

     
<nav> 

<ul className="navbar"> 
    <li> 
    <Link to="/">
    <img src={Logo} alt="logo" />
    </Link>
    </li>
<li > 
<Link className="text" to="/"> Collections </Link>
</li>
<li> 
<Link  className="text" to="/"> Men </Link>
</li>

<li> 
<Link className="text" to="/"> Women</Link>
</li>

<li> 
<Link className="text"  to="/"> About </Link>
</li>

<li> 
<Link  className="text" to="/"> Contact </Link>
</li>
<div className="left"> 
<li> 
    <Link to="/">
    <img src={Cart} alt="logo" />
    </Link>
    </li>

    <li> 
    <Link to="/">
    <img className="img" src={avatar} alt="logo" />
    </Link>
    </li>

    </div>
</ul>


</nav>



</>
    )
}


export default NavBar