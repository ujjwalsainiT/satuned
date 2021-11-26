import React, { useEffect } from 'react'
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import { useHistory } from "react-router";

function ChangePassword() {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <PageBanner title="change password" menu={true} />

            <div className="container">
                <div className="row ">
                    <div className="mb-2 contact_us_heading ">Change Your Password</div>
                    <hr />
                    <div className="col-sm-2 mt-2">
                        <span>
                            <span className="text-danger">*</span>Password
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    <div className="col-sm-2 mt-3">
                        <span>
                            <span className="text-danger">*</span>Confirm Password
                        </span>
                    </div>
                    <div className="col-sm-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Confirm Password"
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
                                Save Changes
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
