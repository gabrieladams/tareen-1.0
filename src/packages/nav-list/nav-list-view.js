import React from 'react';

import { OpenSourceNavListItemView } from './nav-list-item-view';

function OpenSourceNavListView({ screen }) {
    const routes = ['home', 'about', 'services', 'contact'];

    return (
        <ul className={`nav-list ${screen === 'lg-and-above' ? 'lg-and-above d-none d-lg-flex' : 'lg-and-below w-100'}`}>
            <OpenSourceNavListItemView routes={routes} />
        </ul>  
    );
} 

export { OpenSourceNavListView };
