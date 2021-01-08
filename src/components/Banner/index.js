import React from 'react';
import { Button } from '../Button';
import './banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <img src="https://i.picsum.photos/id/453/1920/800.jpg?hmac=0Hs26xvAWQepYNYDIhKfla7TZcgmYJLcQ1DG1Anj4ds" alt="banner" />
            <div className="image-content">
                <h2 className="content-title">REGELMATIGE ONTMOETINGEN</h2>
                <p>Nieuwjaarswandelingen, kampeerweekenden, stedentripjes and running diners</p>
                <Button>LID WORDEN</Button>
            </div>
        </div>
    )
}

export default Banner
