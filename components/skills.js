import React, { useState } from 'react';
import skillsdata from '../data/skillsinfo'; // Import the updated skills data

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Languages');

  const categories = Object.keys(skillsdata);

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`skills-tab ${category === activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-icons">
        {skillsdata[activeCategory].map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
