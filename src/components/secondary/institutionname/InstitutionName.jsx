import React from 'react';
import "./institutionname.css";

const InstitutionName = ({ content }) => (
    <h5 className='institution-name'>
        {content}
    </h5>
);

export default InstitutionName;