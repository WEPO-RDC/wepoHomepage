import {useState} from "react"
import logo from "../WEPOLOGOSVG.svg"
import { AiFillCloseCircle } from "react-icons/ai"

function Navbar(props) {
    const [navState, setNavState] = useState(false)

    function toggle() {
        setNavState(prev => !prev)
        console.log(navState)
    }

    return (
        <header>
            <nav className="nav">
                <a href="https://wepo.tech"><img className="wepo-logo" alt="logo-wepo"
                                                                  src={logo} /></a>

                {
                    props.screenWidth > 600 
                    ?
                    <div className="navRight">
                    <div className = "linkContainer">
                    
                    <div className="nav-sns">
                        {
                        /*
                        <a className="link" href="https://www.instagram.com/wepordc" target="_blank" >About Us</a>
                        <a className="link" href="https://www.facebook.com/wepordc" target="_blank" >Astuces</a>
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >Contacts</a>
                        */
                        }
                    </div>
                
                    <div id="commission">
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >Devenez commissionneur</a>
                    </div>
                    </div>
                </div>
                    :
                    <a href="#" className="icon" onClick={toggle}>
    <i className="fa fa-bars"/>
                </a>
                    }
            </nav>
            {
                navState &&
                
                <div style={{height:window.innerHeight}} className="responsiveNav">
                    <AiFillCloseCircle id="close" onClick={toggle} color="black"/>
                    <div className="responsiveEl">

                        <a className="link" href="https://www.instagram.com/wepo.rdc" target="_blank" >Instagram{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                        <a className="link" href="https://www.facebook.com/wepo.rdc" target="_blank" >Facebook{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >WhatsApp{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
                    </div>
                    <div className="sns-logo">

                        <a href="https://www.instagram.com/wepo.rdc" target="_blank" rel="noreferrer">
<span>

                            <i className="fa-brands fa-instagram fa-xl" />
</span>
                        </a>
                        <a href="https://www.facebook.com/wepo.rdc" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook fa-xl" />
                        </a>
                        <a href="https://wa.me/821027026758" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp fa-xl" />
                        </a>
                    </div>
                </div>
            }
        </header>
    )
}

export default Navbar
