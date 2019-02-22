import React from 'react';
import Radium from 'radium';
import NavSelectButton from './NavSelectButton';

const styles = {
  textParent: {
    position: 'relative',
    zIndex: '10'
  },
  text: {
    display: 'inline',
    paddingLeft: '5px',
    position: 'absolute',
    bottom: '0.1px',
    color: 'white'
  }
};

const NavBarItem = ({category, selectExperienceCategory, unselectExperienceCategory, updateExperienceData}) => (
  <div style={[styles.textParent]}>
    <NavSelectButton 
      category={category}
      selectExperienceCategory={selectExperienceCategory}
      unselectExperienceCategory = {unselectExperienceCategory}
    /><p style={[styles.text]}>{category}</p>
  </div>
)

export default Radium(NavBarItem);