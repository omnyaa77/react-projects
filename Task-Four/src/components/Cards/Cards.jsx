import "./Cards.css" ; 
import Data  from "../Data/Data";
import supervisor from "../../assets/images/icon-supervisor.svg" ; 
import team from "../../assets/images/icon-team-builder.svg" ; 
import karma from "../../assets/images/icon-karma.svg" ; 
import calc from "../../assets/images/icon-calculator.svg" ; 
function Cards () { 
    const ArrayOfObjects [
        {className="cyan" ; }
        {}
        {}
        {}
    ]
return (
    <div id="container"> 
        <div id="Cards">

            <section id="template" className="cyan">
            <h2> Supervisor </h2>
            <label id="third"> monitors activity to identify project </label>
            <img id="photo" src={supervisor}/> 
            </section> 

            <section id="template" className="red"> 
                <h2> Team Builder </h2>
                <label id="third">  scans our talent network to create </label>
                 <img  id="photo"  src={team}/>  
            </section>

            <section id="template" className="yellow"> 
                <h2> Karma  </h2>
                <label id="third"> regularly evaluates our talent to ensure quality </label>
                 <img  id="photo"  src={karma}/>  
            </section>

            <section id="template" className="blue"> 
                <h2> Calculator </h2>
                <label id="third"> uses data from past projects  </label>
                 <img  id="photo"  src={calc}/>  
            </section>


             </div>
    </div>
)


}
export default Cards