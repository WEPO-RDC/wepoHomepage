import bg1 from "../bg1.png"

function Hero(){
    return(
        <div className="hero-container">
            {/*<img src={bg1}/>*/}
            <div className="tagline">
                <div className="tagline-left">

                    <h1>Lekisa Bor Cho!</h1>
                    <p>Nous vous aidons à vendre/acheter vos produits électroniques (telephones, télévisions, ordinateurs,etc) en toute securité, du bout de vos doigts.</p>
                    <ul className="tag-list">
                        <li>One</li>
                        <li>One</li>
                        <li>One</li>
                    </ul>
                </div>
                <div className="tagline-right">
                    <img id="test"alt="loca"src={bg1}/>
                </div>

            </div>
        </div>
    )
}
export default Hero