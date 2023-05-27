import React from 'react';
import "./sectiontitle.css";

const SectionTitle = ({ content }) => {
    return (
        <h2 className="section-title">
            {content}
        </h2>
    )
}

export default SectionTitle;