import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./MyGarage.css";


const MyGarage = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="My Garage" menu={true} />
            <div className="container">
                <div className="mt-3 mb-2 contact_us_heading">Add Car</div>
                <div className="row m-2">


                    <div className="p-2 address_border">

                        <div class="mt-1">
                            <label for="exampleInputEmail1">Car Name</label>
                            <input type="text" class="form-control" placeholder="Enter Car Name" />
                        </div>

                        <div class="mt-1">
                            <label for="exampleInputEmail1">Model Name</label>
                            <input type="text" class="form-control" placeholder="Enter Model Name" />
                        </div>

                        <div class="mt-1">
                            <label for="exampleInputEmail1">Brand Name</label>
                            <input type="text" class="form-control" placeholder="Enter Brand Name" />
                        </div>

                        <div class="mt-1">
                            <label for="exampleInputEmail1">Description</label>
                            <textarea class="form-control" rows="6" placeholder="Enter Description" />
                        </div>
                        <div class="mt-2 text-right">
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
            </div>

        </>
    );
};

export default MyGarage;