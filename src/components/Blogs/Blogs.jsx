import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import { useHistory } from "react-router";
import "./Blogs.css";


const Blogs = (props) => {
    const history = useHistory();
    const blogsArr = [
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
        { data: "Brabus- the perfect combination of brutal power and elegant optical tuning. The world’s largest tuning house for the 3-pointed premium star company, Mercedes, has come a long way from creating luxury sedans including one of the fastest Limousines in the world, to creating beasts like the Invicto." },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Blogs" menu={true} />

            <div className="container">
                <div className="mb-4 contact_us_heading ">All Posts</div>

                {blogsArr.map((item, index) => (
                    <div className="blogBorder mb-4">
                        <div className="container"
                            onClick={() => history.push("/blog-details")}
                        >
                            <div className="row">
                                <div className="col-lg-5">
                                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png" alt="" style={{ height: "300px", width: "100%" }} />
                                </div>
                                <div className="col-lg-7 p-3 cursor_color">
                                    <div className="Blog_heading ">Brabus XL 850 Widestar Based On GLS63 AMG</div>
                                    <div className="mt-2 font_oswald">{item.data.length > 250 ? item.data.substring(0, 250) + "..." : item.data}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Blogs;