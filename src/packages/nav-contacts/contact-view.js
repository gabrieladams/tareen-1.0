import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OpenSourceNavContactsContactView({ contactType }) {
    return (
        <div className="contact d-flex align-items-center">
            <span className='icon-container'>
                <FontAwesomeIcon icon={contactType === 'phoneNumber' ? 'phone-alt' : 'envelope'} className='icon' />
            </span>
            <span className='contact-text'>
                {contactType === 'phoneNumber' ? '+254 726 410 740' : 'tareen@gmail.com'}
            </span>
        </div>
    );
}

export { OpenSourceNavContactsContactView };
