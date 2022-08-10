function Signup(){
    return(
        <form >
            <input/>
            <input/>
            <button>Submit</button>
        </form>
    )
}

function Footer(){
    return(
        <footer id="footer">
            <div className="footer-1">
                <div className="footer-title">
                    <h3>WEPO RDC</h3>
                    <div className="footer-sns">
                        <p>s</p>
                        <p>s</p>

                        <p>s</p>

                        <p>s</p>

                        <p>s</p>

                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-about">

                    </div>
                    <div className="footer-signup">
                        <h3>Remplissez ce formulaire pour etre le premier a tester notre application</h3>
                        <Signup/>

                    </div>

                </div>

            </div>
            <div class="footer-text">
                <a href="#">Termes d'utilisation</a>
                <a href="#">Code de conduite de l'utilisateur</a>
                <a href="mailto:wepo.cd@gmail.com"> Email us</a>
            </div>
            <p></p>
            <p >Copyright WEPO 2022</p>
        </footer>
    )
}

export default Footer