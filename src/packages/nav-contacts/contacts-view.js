import React from 'react';

import { OpenSourceNavContactsContactView } from './contact-view';

function OpenSourceNavContactsView({ screen }) {
    return (
        <div className={`contacts ${screen === 'lg-and-above' ? 'lg-and-above d-none d-lg-flex' : 'lg-and-below d-flex position-absolute'}`}>
            <OpenSourceNavContactsContactView contactType='phoneNumber' />
            <OpenSourceNavContactsContactView contactType='emailAddress' />
        </div>
    );
}

export { OpenSourceNavContactsView };
