import React from 'react';
import AdemirHome from "./AdemirHome/AdemirHome";
import AdemirSection from "./AdemirSection/AdemirSection";
import AdemirMaster from "./AdemirMaster/AdemirMaster";
import AdemirLevel from "./AdemirLevel/AdemirLevel";
import AdemirReviews from "./AdemirReviews/AdemirReviews";
import AdemirRequest from "./AdemirRequest/AdemirRequest";

const AboutSchool = () => {
    return (
        <>
            <AdemirHome/>
            <AdemirSection/>
            <AdemirMaster/>
            <AdemirLevel/>
            <AdemirReviews/>
            <AdemirRequest/>
        </>
    );
};

export default AboutSchool;