import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faTimes,
	faPhoneAlt,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

// adding icons to the library
library.add(faBars, faTimes, faPhoneAlt, faEnvelope);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
