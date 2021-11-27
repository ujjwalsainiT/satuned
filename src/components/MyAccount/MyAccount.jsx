import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./MyAccount.css";
import { useHistory } from "react-router";

const MyAccount = () => {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <PageBanner title="Account" menu={true} />

            <div className="container">
                <div className="row mb-3">
                    <div className=" mb-2 contact_us_heading ">My Account</div>
                    <div><span className="edit_Links" onClick={() => history.push("/edit-information")}>Edit Your Account Information</span></div>
                    <div><span className="edit_Links" onClick={() => history.push("/change-password")}>Change Your Password</span></div>
                    <div><span className="edit_Links" onClick={() => history.push("/modify-address")}>Modify your address book</span></div>

                    <div className="mt-4 mb-2 contact_us_heading ">My Orders</div>
                    <div><span className="edit_Links" onClick={() => history.push("/order-history")}>Order History</span></div>
                    <div> <span className="edit_Links">download</span></div>
                    <div><span className="edit_Links">Your Reward Point</span></div>
                    <div><span className="edit_Links" onClick={() => history.push("/return")}>Returns</span></div>
                    <div><span className="edit_Links">Transaction</span></div>
                    {/* <div> <span className="edit_Links">Payment Pofile</span></div> */}


                    {/* <div className="mt-4 mb-2 contact_us_heading ">My Affilate Account</div>
                    <div><span className="edit_Links">Register for an Affilate Account</span></div>


                    <div className="mt-4 mb-3 contact_us_heading ">News Letter</div>
                    <div> <span className="edit_Links">News Letter</span></div> */}

                </div>
            </div>

        </>
    );
};

export default MyAccount;