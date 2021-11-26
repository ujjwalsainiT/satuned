import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./AboutUs.css";


const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="About Us" menu={true} />

            <div className="container">
                <div className="row ">
                    <div className="mb-2 contact_us_heading ">Looking to Upgrade?</div>
                    <div className="p-2 mb-1 font_oswald">
                        We Carry the Top Performance Brands Since the introduction of the automobile, drivers
                        have worked to get every ounce of performance from their car. Today, the scientific
                        approach to racing and product development gives enthusiasts the ability to upgrade
                        performance on the street or track. Whether you’re just looking for a more engaging
                        commute, or you owe someone a ten second car, the performance parts you need from top
                        manufacturers are all available at SATuned™.
                    </div>
                    <div className="p-2 mb-1 font_oswald">
                        No matter whether you’re doing basic repairs or maintenance, modifying your car’s
                        street appeal or performance, or adding high-tech lighting and electronics, our great
                        selection of branded products and knowledgeable associates will ensure success with
                        all your automotive projects.
                    </div>

                    <div className="p-2 mb-1 font_oswald">
                        SAtuned™ was started by Mr Mrugen Chorghe (aka Macky), a serious European car enthusiast
                        with the aim of supplying specialized and customized
                        performance based car parts to the emerging Indian automotive performance tuning market.
                    </div>

                    <div className="mt-5 mb-2 contact_us_heading ">Our Mission</div>

                    <div className="p-2 mb-1 font_oswald">
                        We offer the finest and widest variety of automotive performance parts and accessories
                        through our extensive research and development regarding updated products, and employ
                        the most dedicated and creative team members.
                    </div>

                    <div className="p-2 mb-1 font_oswald">
                        We fulfill our mission daily with enthusiasm and optimism, learning from our ongoing
                        opportunities and successes.
                    </div>

                </div>
            </div>

        </>
    );
};

export default AboutUs;