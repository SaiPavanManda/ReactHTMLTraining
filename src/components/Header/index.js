import React from 'react';
import './header.css';
import logo from '../../logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components';
import { Button } from '../Button';

const element = <FontAwesomeIcon icon={faCalendar} />

const NavItems = styled.ul`
list-style: none;
padding:0;
margin-right: 15px;
`;


const Header = () => {
    const headerItems = ['Home', 'Over JCI', 'Commissies', 'Jaarkalendar', 'Contact']
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="header-navigation">
                    <NavItems>
                        {headerItems.map(item => <li key={item} className="list-item">{item}</li>)}
                    </NavItems>
                    <NavItems>
                        {[1, 2, 3].map(item => <li key={item} className="list-item">{element}</li>)}
                    </NavItems>
                    <Button>LID WORDEN</Button>
                </div>
            </div>
        </header>
    )
}

export default Header
