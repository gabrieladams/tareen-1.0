import React from 'react';
import { NavBarView } from '../nav-bar'
import { HeaderBannerView } from './banner';

function HeaderView() {
    return (
        <header id='main-header'>
            <NavBarView />
            <HeaderBannerView />
        </header>
    )
}

export { HeaderView };
