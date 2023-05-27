import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle } from '../../secondary/exports';

const RightMainComponent = () => {
    return (
        <div className='right'>
            <SectionTitle content="experience1" />
            <JobTitle />
        </div>
    )
}

export default RightMainComponent;