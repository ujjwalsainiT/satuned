import React, { useEffect } from "react";
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
//used css
import './TrackMyOrder.css'


const TrackMyOrder = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Track My Order" menu={true} />
            <div className="main_container">

                <div class="container padding-bottom-3x mb-1">
                    <div class="outside_border mb-3">
                        <div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">0001</span></div>
                        <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                            <div class="w-100 text-center text-white py-1 px-2"><span class="text-medium">Shipped Via:</span> UPS Ground</div>
                            <div class="w-100 text-center text-white py-1 px-2"><span class="text-medium">Status:</span> Checking Quality</div>
                            <div class="w-100 text-center text-white py-1 px-2"><span class="text-medium">Expected Date:</span> DEC 05, 2021</div>
                        </div>
                        <div class="mt-3">
                            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                               <div class="step completed">
                                    <div class="step-icon-wrap">
                                        <div class="step-icon"><i class="fa fa-shopping-cart"></i></div>
                                    </div>
                                    <h4 class="step-title">Confirmed Order</h4>
                                </div>
                                <div class="step completed">
                                    <div class="step-icon-wrap">
                                        <div class="step-icon"><i class="fas fa-cog"></i></div>
                                    </div>
                                    <h4 class="step-title">Processing Order</h4>
                                </div>
                                <div class="step">
                                    <div class="step-icon-wrap">
                                        <div class="step-icon"><i class="fa fa-check-circle"></i></div>
                                    </div>
                                    <h4 class="step-title">Quality Check</h4>
                                </div>
                                <div class="step">
                                    <div class="step-icon-wrap">
                                        <div class="step-icon"><i class="fa fa-car"></i></div>
                                    </div>
                                    <h4 class="step-title">Product Dispatched</h4>
                                </div>
                                <div class="step">
                                    <div class="step-icon-wrap">
                                        <div class="step-icon"><i class="fa fa-home"></i></div>
                                    </div>
                                    <h4 class="step-title">Product Delivered</h4>
                                </div> 
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );

}
export default TrackMyOrder;