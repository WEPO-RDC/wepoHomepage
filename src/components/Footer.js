import logo from "../WEPOLOGOSVG.svg"




function Footer() {
    return (
        <footer id="footer">
            <div className="footer-1">
                <div className="footer-title">
                    <a href="https://wepo.tech/"><img className="wepo-logo" alt="logo-wepo"
                                                                      src={logo} /></a>
                    <div className="footer-right">
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
                        <p>
                            © WEPO RDC 2022
                        </p>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-about">

                    </div>
                    {/*<div className="footer-signup">
                        <h3>Remplissez ce formulaire pour etre le premier a tester notre application</h3>
    </div>*/}

                </div>

            </div>
            {/*<div class="footer-text">
                <a href="#">Termes d'utilisation</a>
                <a href="#">Code de conduite de l'utilisateur</a>
                <a href="mailto:wepo.cd@gmail.com"> Envoyez-nous un email</a>
    </div>*/}
        </footer>
    )
}

export default Footer
