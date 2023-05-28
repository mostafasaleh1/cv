import React from 'react';
import "./skills.css";

const Skills = () => {
    const skills = [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Redux",
        "CCNA"
    ];

    return (
        <div className='skills-container'>
            {skills.map(skill => <div className='skill'>{skill}</div>)}
        </div>
    )
}

export default Skills;