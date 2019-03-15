import React from 'react';
import {NavLink} from 'react-router-dom';

import '../styles/header.scss';

const Header = () => {

    return(
        <header>
            <NavLink to='/login'>Sig in</NavLink>
            <NavLink to='/register'>Sig up</NavLink>
        </header>
    )
};

export default Header;

