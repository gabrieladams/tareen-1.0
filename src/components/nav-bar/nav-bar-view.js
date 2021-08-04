import React from 'react';

import { NavBarBrandView } from './brand';
import { OpenSourceNavListView } from '../../open-source/nav-list';
import { OpenSourceNavContactsView } from '../../open-source/nav-contacts';
import { NavBarSideNavTogglerView } from './side-nav-toggler';

function NavBarView() {
    return (
        <div className="nav-bar">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <NavBarBrandView />
                    <OpenSourceNavListView screen='lg-and-above' />
                    <OpenSourceNavContactsView screen='lg-and-above' />
                    <NavBarSideNavTogglerView />
                </div>
            </div>
        </div>
    )
}

export { NavBarView };
