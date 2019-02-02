import React from 'react';
import Radium from 'radium';
import NavSelectButton from './NavSelectButton';

const NavBarList = ({category}) => (
  <div>{category}</div>
)

export default Radium(NavBarList);