import React from 'react';
import './card.css';
import card1 from '../card1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const element = <FontAwesomeIcon icon={faCalendar} />



const Card = () => {
    return (
        <div className="card-wrapper">
        <div className="card">
            <div className="image-container">
                <img src={card1} alt="card1"></img>
            </div>
            <div className="card-content">
            <h3 className="card-title">Green Quest Awards 2020</h3>
            <div className="card-date">
                <div className="date-icon">{element}</div>
                21 December 2020
            </div>
            <div className="card-text">
            Eind juni is de winnaar van The Green Quest 2020 verkozen. Voor het tweede jaar op rij kreeg de winnaar een door Oceanz 3D geprinte award overhandigd. De winnaar van The Green Quest 2020 is Heliatek! Heliatek maakt organisch zonnefolie dat deze zomer - na 14 jaar ontwikkelen - groot wordt opgeschaald.
            </div>
            <a href="#1">Lees verder</a>
            </div>
        </div>
        </div>
    )
}

export default Card
