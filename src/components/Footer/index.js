import React from 'react';
import './footer.css';
import footer from "../../footer.png";
import { Button } from '../Button';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-img">
                <img src={footer} alt="footer" />
            </div>
            <div className="footer-content">
                <div className="left-content">
                    <h3>Contactgegevens</h3>
                    <h4>JCI Doetinchem</h4>
                    <div className="details">
                        <div className="address">
                            <p>Hackforterweg 46</p>
                            <p>7234SH Wichmond</p>
                        </div>
                        <div className="email">
                            <p>info@jci-doetinchem.nl</p>
                        </div>
                    </div>
                    <div className="details">
                        <div className="address">
                            <p>Copyright © JCI Doetinchem | Online Marketing: Doit Online Media</p>
                            <p> Cookies | Privacyverklaring</p>
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    <h3>Heb je vragen?</h3>
                    <p>Wil je graag meer informatie over onze commissies of activiteiten? Aarzel niet en neem contact met ons op.</p>
                    <div className="details">
                        <Button background="#239BDD"
                            border="2px solid #fff">CONTACT OPNEMEN</Button>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
