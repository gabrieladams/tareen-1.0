import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OpenSourceNavListView } from '../../open-source/nav-list';
import { OpenSourceNavContactsView } from '../../open-source/nav-contacts';

function SideNav() {
    return (
        <div className='side-nav d-block d-lg-none position-absolute top-0 end-0 h-100'>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="side-nav-content">
                        <div>
                            <FontAwesomeIcon icon='faTimes' />
                        </div>
                        <OpenSourceNavListView screen='lg-and-below' />
                        <OpenSourceNavContactsView screen='lg-and-below' />
                    </div>
                </div>
                 
            </div>
               
        </div>
    )
}

export { SideNav };