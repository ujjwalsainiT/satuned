import React, { useEffect } from 'react'
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import { useHistory } from "react-router";

function EditInformation() {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <PageBanner title="Edit Information" menu={true} />

            <div className="container">
                <div className="row ">
                    <div className="mb-2 contact_us_heading ">Your Personal Details</div>
                    <hr />
                    <div className="col-sm-2 mt-2">
                        <span>
                            <span className="text-danger">*</span>First name
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </div>

                    <div className="col-sm-2 mt-3">
                        <span>
                            <span className="text-danger">*</span>Last name
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </div>

                    <div className="col-sm-2 mt-3">
                        <span>
                            <span className="text-danger">*</span>E-mail Address
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    <div className="col-sm-2 mt-3">
                        <span>
                            <span className="text-danger">*</span>Telephone
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Phone Number"
                            required
                        />
                    </div>

                    <div className="d-flex justify-content-between mt-3 mb-3">
                        <span>
                            <button
                                className="contact_btn"
                                onClick={() => history.goBack()}
                            >
                                <i className="fa fa-arrow-left" /> Back
                            </button>
                        </span>

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
    )
}

export default EditInformation
