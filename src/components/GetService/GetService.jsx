import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./GetService.css";

const GetService = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="get a service quote" menu={true} />
            <div className="container">
                <div className="row m-2">
                    <div className=" mb-2 contact_us_heading ">Get a Service Quote</div>

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
                        <label for="exampleInputEmail1">*Phone Number</label>
                        <input type="text" class="form-control" placeholder="Enter Phone Number" />
                    </div>

                    <div class="mt-1">
                        <label for="exampleInputEmail1">*Make</label>
                        <input type="text" class="form-control" placeholder="Enter Make" />
                    </div>

                    <div class="mt-1">
                        <label for="exampleInputEmail1">*Car Model</label>
                        <input type="text" class="form-control" placeholder="Enter Car Model" />
                    </div>

                    <div class="mt-1">
                        <label for="exampleInputEmail1">*Car Year</label>
                        <input type="text" class="form-control" placeholder="Enter Car Year" />
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

export default GetService;