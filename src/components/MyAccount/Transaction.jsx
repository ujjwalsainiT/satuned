import React, { useEffect } from 'react'
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import { useHistory } from "react-router";

function Transaction() {
    const history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <PageBanner title="Transaction" menu={true} />

            <div className="container">
                <div className="row ">
                    <div className="mb-2 contact_us_heading ">Transaction</div>
                    <hr />
                    <div className="text-center mt-2 mb-3">No Data</div>
                    <div className=" mt-3 mb-3">
                        <span>
                            <button
                                className="contact_btn"
                                onClick={() => history.goBack()}
                            >
                                <i className="fa fa-arrow-left" /> Back
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction
