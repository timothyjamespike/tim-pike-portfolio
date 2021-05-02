import React from 'react';

const ContentFilteringProject = () => {
    return (
        <div className="content-filtering-container">
            
            <div className="content-filtering-description-container description-1">
            <span className="content-filtering-description-subheader">Making content flexible</span>
            <div clasName="customer-problem"></div>
            <div className="content-filtering-description-container description-2">
            <span className="customer-problem-eyebrow">Customer Problem</span>
             "This content's too easy for me! This page doesn't have everything I need!"
            </div>
            <div className="content-filtering-description-container description-3">
            Our team collected categories of customer metadata, such as <span className="strong-tags">job type</span>, <span className="strong-tags">industry</span>, and <span className="strong-tags">role</span>.
            </div>
            <div className="content-filtering-description-container description-4">
            From this data, we designed colorful "chips" that let customers pick and choose the content they want to see.
            <div className="content-filtering-image-1"></div>
            <div className="content-filtering-image-2"></div>
            </div>
            </div>
            <div className="content-filtering-images-container">
            <div className="content-filtering-image-3">

            </div>
            </div>
            
        </div>
    )
}

export default ContentFilteringProject;