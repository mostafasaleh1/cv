import React from 'react';
import "./leftmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation } from "../../secondary/exports";

const LeftMainComponent = () => (
    <div className='left'>
        <div className='content-box'>
            <SectionTitle content="experience2" />
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
        </div>
    </div>
);

export default LeftMainComponent;