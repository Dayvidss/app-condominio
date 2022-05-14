import React from 'react';
import './styles.css';

const Header = (props) => (
    <header id='main-header'>
        <img src={`${process.env.PUBLIC_URL}/favicon.ico`} />
        {props.title}
    </header>
)

export default Header;
