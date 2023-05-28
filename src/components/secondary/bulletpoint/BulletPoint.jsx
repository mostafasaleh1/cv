import React from 'react';
import "./bulletpoint.css";

const BulletPoint = ({ content }) => (
  <ul className='bullet-point'>
    <li><span>{content}</span></li>
  </ul>
);

export default BulletPoint;