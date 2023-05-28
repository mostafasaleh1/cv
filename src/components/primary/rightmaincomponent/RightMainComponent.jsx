import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint } from '../../secondary/exports';

const RightMainComponent = () => (
    <div className='right'>
        <div className='content-box'>
            <SectionTitle content="experience1" />
            <JobTitle content="Software Develper" />
            <InstitutionName content="Yahoo" />
            <DateAndLocation date="33/5/2021 - 2022" location="Location" />
            <BulletPoint content="adkjfhdaskfjhsadlkfjshadlkf hsdfjkah kasjdhf kah" />
        </div>
    </div>
);

export default RightMainComponent;