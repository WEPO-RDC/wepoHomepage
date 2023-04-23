import { solutionCopy } from "../../copy"
import "./Solutions.css"

function Solution(props)
{

    let copyContentElements = props.content > 0 ?  props.content>1 ? props.content.map(item => 
    <li >{item}</li>
) :<li>{props.content[0]}</li> : 0

return(
    <div className={props.num % 2 ?'xp' :"xp reverse"}>
        {/*<img alt="benefit" className="stick left"></img>*/}
        <img alt="phone" src={props.img} className="phone"></img>
        <div className="solutionText">
          <h2>{props.title}</h2>
          {
            copyContentElements === 0
            ?<p className="solutionTextP">{props.content}</p>
            : <ul className="solutionTextP">{copyContentElements}</ul>
          }
        </div>
      </div>
)
}


export default function Solutions(props)
{
    let solutionElements = solutionCopy.map(copy =>(<Solution 
    key = {solutionCopy.indexOf(copy)}
    num = {solutionCopy.indexOf(copy) + 1}
    content = {copy.content}
    title = {copy.title}
    img={copy.img}
    />))
    return(
        <div className="benefit">
            {solutionElements}
        </div>
    
    )
}
