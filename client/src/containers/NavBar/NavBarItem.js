import React from 'react';
import Radium from 'radium';
import NavSelectButton from './NavSelectButton';

const NavBarItem = ({category, selectExperienceCategory, unselectExperienceCategory, updateExperienceData}) => (
  <div>
    <NavSelectButton 
      category={category}
      selectExperienceCategory={selectExperienceCategory}
      unselectExperienceCategory = {unselectExperienceCategory}
    />{category}
  </div>
)

export default Radium(NavBarItem);