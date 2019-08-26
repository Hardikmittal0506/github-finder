import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users.js';

const home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default home;
