import {useState} from "react"
import logo from "../WEPOLOGOSVG.svg"


function Navbar(props) {
    const [navState, setNavState] = useState(false)

    function toggle() {
        setNavState(prev => !prev)
        console.log(navState)
    }

    return (
        <header>
            <nav className="nav">
                <a href="https://magmukendi.me/wepoHomepage"><img className="wepo-logo" alt="logo-wepo"
                                                                  src={logo} /></a>

                {
                    props.screenWidth > 600 ?
                        <div className="navRight">
                            <div className="linkContainer">

                                <div className="nav-sns">

                                    <a className="link" href="https://www.instagram.com/wearewepo" target="_blank"
                                       rel="noreferrer">About
                                        Us{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                                    <a className="link" href="https://www.facebook.com/wearewepo"
                                       target="_blank"
                                       rel="noreferrer">Astuces{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                                    <a className="link" href="https://wa.me/821027026758"
                                       target="_blank"
                                       rel="noreferrer">Contacts{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
                                </div>

                                <div id="commission">
                                    <a className="link" href="https://wa.me/821027026758" target="_blank"
                                       rel="noreferrer">Devenez
                                        commissionneur</a>
                                </div>
                            </div>
                        </div>
                        :
                        <a href="#" className="icon" onClick={toggle}>
                            <i className="fa fa-bars" />
                        </a>
                }
            </nav>
            {
                navState &&

                <div style={{height: window.innerHeight}} className="responsiveNav">
                    <button id="close" onClick={toggle}>Close</button>
                    <div className="responsiveEl">

                        <a className="link" href="https://www.instagram.com/wearewepo" target="_blank" rel="noreferrer">About
                            Us{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                        <a className="link" href="https://www.facebook.com/wearewepo"
                           target="_blank"
                           rel="noreferrer">Astuces{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                        <a className="link" href="https://wa.me/821027026758"
                           target="_blank"
                           rel="noreferrer">Contacts{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
                    </div>
                    <div className="sns-logo">

                        <a href="https://www.instagram.com/wearewepo" target="_blank" rel="noreferrer">
<span>

                            <i className="fa-brands fa-instagram fa-xl" />
</span>
                        </a>
                        <a href="https://www.facebook.com/wearewepo" target="_blank" rel="noreferrer">
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
