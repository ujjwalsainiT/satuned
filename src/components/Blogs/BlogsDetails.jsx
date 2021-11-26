import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./Blogs.css";


const BlogsDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Blog-details" menu={true} />

            <div className="container mt-3">
                <div className="blogBorder mb-4 p-2">

                    <div className="Blog_heading ">Brabus XL 850 Widestar Based On GLS63 AMG</div>

                    <div className="mt-3 mb-4">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png" alt="" style={{ height: "500px", width: "100%" }} />
                    </div>

                    <div className="mt-2 font_oswald">
                        Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning
                        house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans
                        including one of the fastest Limousines in the world, to creating beasts like the Invicto. Although
                        expensive, Brabus makes it a point to please its customers with its commendable work. Especially with
                        the brilliant cosmetic modifications like low profile spoilers, bodykits, carbon fiber splitters
                        multi-piece alloy wheels and other mad upgrades like racing LSDs,
                        twelve-piston disc brakes and engine remapping it is almost impossible to beat Brabus at what it does.
                    </div>

                    <div className="mt-2 font_oswald">
                        As we all know that the Mercedes GLS63 AMG is a looker from every angle, we at Sushila Autotechnik had the
                        privilege of customizing this behemoth SUV by adding a Brabus Style Body Kit.
                    </div>


                </div>

            </div>
        </>
    );
};

export default BlogsDetails;