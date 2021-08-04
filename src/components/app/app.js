import React, { Fragment } from 'react';
import './app.scss';
import { SideNav } from '../side-nav';
import { HeaderView } from '../header';

function App() {
  return (
    <Fragment>
      <SideNav />
      <HeaderView />
    </Fragment>
  );
}

export default App;
