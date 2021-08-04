import React from 'react';

function OpenSourceNavListItemView({ routes }) {
    return (
        routes.map((route) => {
            return (
                <li className='nav-list-item' key={route}>
                    <a href="#" className='nav-link'>
                        {route}
                    </a>
                </li>
            )
        })
    )
}

export { OpenSourceNavListItemView };
