import React from 'react';
import "./leftmaincomponent.css";
import { SectionTitle, JobTitle } from "../../secondary/exports";

const LeftMainComponent = () => {
    return (
        <div className='left'>
            <SectionTitle content="experience2" />
            <JobTitle />
        </div>
    )
}

export default LeftMainComponent;