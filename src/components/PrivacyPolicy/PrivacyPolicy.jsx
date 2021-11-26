import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./PrivacyPolicy.css";


const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Privacy Policy" menu={true} />

            <div className="container">
                <div className="row m-2">
                    <div className="mb-2 contact_us_heading ">OUR COMMITMENT TO DATA SECURITY</div>

                    <div className="mt-1 content_justify">
                        To prevent unauthorized access, maintain data accuracy, and ensure the correct use of
                        information, we have put in place appropriate physical, electronic, and managerial
                        procedures to safeguard and secure the information we collect online.
                    </div>

                    <div className="mt-1 content_justify">
                        This notice applies to all the information that is collected or submitted on the SATuned site through the
                        contact us, live chat, and other pages. The following types of personal information are collected:
                    </div>
                    <div className="mt-2 content_justify">
                        <ul>
                            <li>E-mail address</li>
                            <li>Physical Address (for Billing and Delivery Purpose)</li>
                            <li>IP address for fraud detection purposes</li>
                            <li>Client information requests</li>
                            <li>Order-specific information, including source files and client notes</li>
                            <li>Information on referring sites through the use of cookies</li>
                        </ul>
                    </div>

                    <div className="mt-3 mb-2 contact_us_heading ">HOW WE USE YOUR INFORMATION</div>

                    <div className="mt-1 content_justify">
                        The personal information you provide when placing an order is used only to complete your
                        order. We do not share this information with outside parties.
                    </div>

                    <div className="mt-1 content_justify">
                        The e-mail address that you provide in the contact form is used only to notify you about
                        the status of your order and to send you occasional SATuned newsletters. We do not use this
                        e-mail address for any other purpose, and we do not share it with outside parties.
                    </div>

                    <div className="mt-1 content_justify">
                        To improve the design of our site and to better share it with advertisers, we use only
                        non-identifying, aggregate information. For example, we may tell an advertiser that a
                        certain number of individuals visited some area of our site, but we do not disclose anything
                        that could be used to identify those individuals.
                    </div>

                    <div className="mt-1 content_justify">
                        Finally, we never use or share the personally identifiable information provided to us
                        online in ways unrelated to those described above without also providing you with an
                        opportunity to opt out or otherwise prohibit such unrelated uses.
                    </div>

                    <div className="mt-3 mb-2 contact_us_heading ">HOW YOU CAN ACCESS OR CORRECT YOUR INFORMATION</div>

                    <div className="mt-1 content_justify">
                        You can correct factual errors in your personally identifiable information by sending us a
                        request that credibly shows an error.
                    </div>

                    <div className="mt-1 content_justify">
                        To protect your privacy and security, we will also take reasonable steps to verify your
                        identity before granting access or making corrections.
                    </div>
                    <div className="mt-1 content_justify">
                        OR you can also login to your account and make the changes under MY ACCOUNT page
                    </div>

                    <div className="mt-3 mb-2 contact_us_heading ">HOW TO CONTACT US</div>

                    <div className="mt-1 content_justify">
                        Should you have further questions or concerns about the services @ SATuned,
                        please place a request via <strong>Contact Form</strong> or send us an email on <strong>support@satuned.com</strong>
                    </div>

                    <div className="mt-1 content_justify">
                        © {new Date().getFullYear()} SATuned. All Rights Reserved.
                    </div>
                </div>
            </div>

        </>
    );
};

export default PrivacyPolicy;