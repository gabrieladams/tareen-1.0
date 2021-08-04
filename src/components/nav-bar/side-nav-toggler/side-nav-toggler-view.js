import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBarSideNavTogglerView() {
    return (
        <button className="side-nav-toggler d-lg-none d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon='bars' className='icon' />           
       </button>

    )
}

export { NavBarSideNavTogglerView };
