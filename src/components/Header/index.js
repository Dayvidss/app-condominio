import React from 'react';
import './styles.css';

const Header = (props) => (
    <header id='main-header'>
        <img src={`${process.env.PUBLIC_URL}/logoSistema.png`} />
        {props.title}
    </header>
)

export default Header;
