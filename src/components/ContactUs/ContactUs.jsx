import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./ContactUs.css";


const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Contact Us" menu={true} />



            <div className="container">
                <div className="row m-2">
                    <div className=" mb-2 contact_us_heading ">Our Location</div>
                    <div className="p-3 mb-3 address_border">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mt-1">
                                    <strong>SaTuned</strong>
                                    <div>
                                        Sushila Commercial Space,<br />
                                        Opp Gokul Wadi, Raipada, Virar East 401303
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-1">
                                    <strong>Telephone</strong>
                                    <div className="contact_data">
                                        <span id="contact_no">+91 97645 16224 / +91 744-8132412</span>
                                        <span id="contact_icon">
                                            <i className="fa fa-phone ml-3" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 mb-2 contact_us_heading">Contact Us</div>
                    <hr />
                    <div class="mt-1">
                        <label for="exampleInputEmail1">*Your Name</label>
                        <input type="text" class="form-control" placeholder="Enter Your Name" />
                    </div>

                    <div class="mt-1">
                        <label for="exampleInputEmail1">*E-Mail Address</label>
                        <input type="text" class="form-control" placeholder="Enter Your Email" />
                    </div>

                    <div class="mt-1">
                        <label for="exampleInputEmail1">*Enquriy</label>
                        <textarea class="form-control" rows="6" placeholder="Enter Your Message" />
                    </div>
                    <div class="mt-2 float-right">
                        <span>
                            <button
                                className="contact_btn"
                            >
                                Submit
                            </button>
                        </span>
                    </div>

                </div>
            </div>

        </>
    );
};

export default ContactUs;