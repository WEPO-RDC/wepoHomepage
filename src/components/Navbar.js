import { useState } from "react"
import logo from "../WEPOLOGOSVG.svg"


function Navbar(props){
    const [navState, setNavState] = useState(false)

    function toggle(){
        setNavState(prev => !prev)
        console.log(navState)
    }
    return(
        <header>
            <nav className="nav">
                <a href="https://magmukendi.me/wepoHomepage"><img className="wepo-logo"alt="logo-wepo"src={logo}/></a>

                {
                props.screenWidth >530 
                    ?
                <div className="navRight">
                    <div className = "linkContainer">
                    
                    <div className="nav-sns">
                        
                        <a className="link" href="https://www.instagram.com/wearewepo" target="_blank" >About Us{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                        <a className="link" href="https://www.facebook.com/wearewepo" target="_blank" >Astuces{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >Contacts{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
                    </div>
                
                    <div id="commission">
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >Devenez commissionneur</a>
                    </div>
                    </div>
                </div>
                    :
                    <a href="javascript:void(0);" class="icon" onClick={toggle}>
    <i class="fa fa-bars"/>
                </a>
                    }
            </nav>
            {
                navState &&

                <div style={{height:window.innerHeight/2}} className="responsiveNav">
            <a className="link" href="https://www.instagram.com/wearewepo" target="_blank" >About Us{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                        <a className="link" href="https://www.facebook.com/wearewepo" target="_blank" >Astuces{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                        <a className="link" href="https://wa.me/821027026758" target="_blank" >Contacts{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
            </div>
            }
        </header>
    )
}
export default Navbar
