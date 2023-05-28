import React from 'react';
import "./leftmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint } from "../../secondary/exports";

const LeftMainComponent = () => (
    <div className='left'>
        <div className='content-box'>
            <SectionTitle content="experience2" />
            <JobTitle content="React Developer" />
            <InstitutionName content="Google" />
            <DateAndLocation date="30/5" location="Location1" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>
    </div>
);

export default LeftMainComponent;