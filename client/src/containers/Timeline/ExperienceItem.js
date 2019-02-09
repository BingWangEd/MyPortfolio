import React from 'react';
import Radium from 'radium';

const ExperienceItem = (experience) => (
  <div>
    {console.log(experience.experience)}
    <h2>experience</h2>
  </div>
)

export default Radium(ExperienceItem);