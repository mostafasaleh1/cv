import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { GrLanguage, GrMail } from "react-icons/gr";

const Header = () => {
    return (
        <header>
            <div>
                <h1>Mostafa Saleh</h1>
                <h3>Software Engineer</h3>
            </div>
            <div className='links'>
                <Link to="mailto:most.saleh@hotmail.com"target='_blank' rel='noreferrer'><div><GrMail /> most.saleh@hotmail.com</div></Link>
                <Link to="https://mostafasaleh1.github.io/myprofile" target='_blank' rel='noreferrer'><div><GrLanguage /> mostafasaleh1.github.io/myprofile</div></Link>
                <Link to="https://linkedin.com/in/mostafasaleh5" target='_blank' rel='noreferrer'><div><BsLinkedin /> mostafasaleh5</div></Link>
                <Link to="https://linkedin.com/in/mostafasaleh5" target='_blank' rel='noreferrer'><div><BsLinkedin /> mostafasaleh5</div></Link>
            </div>
        </header>
    )
}

export default Header;