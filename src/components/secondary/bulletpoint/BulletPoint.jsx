import React from 'react';
import "./bulletpoint.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const BulletPoint = ({ content }) => <div className='bullet-point'><div><VscDebugBreakpointLog className='point-svg' /></div> {content}</div>;

export default BulletPoint;