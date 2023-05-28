import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint, Skills } from '../../secondary/exports';

const RightMainComponent = () => (
    <div className='right'>
        <SectionTitle content="Education" />
        <div className='content-box'>
            <JobTitle content="Software Develper" />
            <InstitutionName content="Yahoo" />
            <DateAndLocation date="33/5/2021 - 2022" location="Location" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='content-box'>
            <JobTitle content="Software Develper" />
            <InstitutionName content="Yahoo" />
            <DateAndLocation date="33/5/2021 - 2022" location="Location" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>

        <div className='content-box'>
            <SectionTitle content="Skills" />
            <Skills />
        </div>
    </div>
);

export default RightMainComponent;