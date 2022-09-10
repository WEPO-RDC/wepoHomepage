import logo from "../WEPOLOGOSVG.svg"

function Navbar(){
    return(
        <header>
            <nav className="nav">
                <img className="wepo-logo"alt="logo-wepo"src={logo}/>
                <div className="nav-sns">
                    <a href="https://www.instagram.com/wearewepo" target="_blank" >About Us{/*<i className="fa-brands fa-instagram fa-xl"></i>*/}</a>
                    <a href="https://www.facebook.com/wearewepo" target="_blank" >About Us{/*<i className="fa-brands fa-facebook fa-xl"></i>*/}</a>
                    <a href="https://wa.me/821027026758" target="_blank" >{/*<i className="fa-brands fa-whatsapp fa-xl"></i>*/}</a>
                </div>
                <div id="commission">
                <a href="https://wa.me/821027026758" target="_blank" >Devenez commissionneur</a></div>
            </nav>
        </header>
    )
}
export default Navbar
