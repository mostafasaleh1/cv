import React from 'react';
import "./rightmaincomponent.css";
import { SectionTitle, JobTitle, InstitutionName, DateAndLocation, BulletPoint, Skills } from '../../secondary/exports';

const RightMainComponent = () => (
    <div className='right'>
        <SectionTitle content="Education" />
        <div className='content-box'>
            <JobTitle content="Software Develper" />
            <InstitutionName content="Higher Institute of Engineering and Technology - Kafr ELsheikh" />
            <DateAndLocation date="Sep 2018 - Jul 2023" location="Kafr Elsheikh" />
            <BulletPoint content="Bachelor of Engineering - Computer and Control Engineering" />
        </div>

        <div className='content-box'>
            <SectionTitle content="Skills" />
            <Skills />
        </div>

        <div className='content-box'>
            <SectionTitle content="Courses" />
            <BulletPoint content="Front End Web Development Professional Nanodegree" />
            <BulletPoint content="Introduction to Git and GitHub" />
        </div>
    </div>
);

export default RightMainComponent;