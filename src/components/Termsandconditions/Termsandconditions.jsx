import React, { useEffect } from 'react';
import PageBanner from './../../components/commonComponent/PageBanner/PageBanner';
import "./Termsandconditions.css";


const Termsandconditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <PageBanner title="Terms and Condition" menu={true} />

            <div className="container">
                <div className="row m-2">
                    <div className="mb-2 contact_us_heading ">Product Review Posting Guidelines</div>

                    <p className="mt-1 content_justify">
                        SATuned.com encourages our customers to share their personal feedback regarding
                        the quality of the items ordered. We want customers to be able to make smart buying
                        decisions based on the feedback shared by fellow buyers. Product feedback can be shared
                        on SATuned.com, directly on the product detail page. All product reviews submitted by
                        customers will be reviewed to ensure that the Product Review Guidelines are being
                        followed prior to being shared in a public setting.
                    </p>

                    <div className="mt-1 content_justify">
                        <ul>
                            <li className="mt-2 content_justify">Who can create product reviews?</li>

                            <p className="mt-1 content_justify">
                                All customers who have purchased an item from SATuned.com are encouraged to
                                share feedback regarding the quality of the product ordered.
                            </p>


                            <li className="mt-2 content_justify">What can be discussed in product reviews?</li>

                            <p className="mt-1 content_justify">
                                Reviews must be focused solely on the product quality, performance, ease of install, etc.
                            </p>
                            <p className="content_justify">
                                Customers should be specific while writing the review, and must explain why they like or dislike a product.
                            </p>
                            <p className="content_justify">
                                Character limitation of 2000
                            </p>


                            <li className="mt-2 content_justify">What cannot be discussed in product reviews?</li>

                            <p className="mt-1 content_justify">
                                Profanity or distasteful comments.
                            </p>
                            <p className="content_justify">
                                Off-topic or unrelated material (Transaction related issues, etc.).
                            </p>
                            <p className="content_justify">
                                Vague comments that do not explain the product.
                            </p>
                            <p className="content_justify">
                                Promotional content.
                            </p>
                            <p className="content_justify">
                                Copyright protected material.
                            </p>
                            <p className="content_justify">
                                Web links or hyperlinks
                            </p>
                        </ul>
                    </div>
                    <p className="content_justify">
                        Should you feel that there is a quality or product safety concern, please contact us
                        immediately so that we may address your concerns.
                    </p>

                    <p className=" content_justify">
                        The customer sharing product reviews is responsible for all of the content within the
                        review. In the event that the customer review contains any copyright protected information
                        or material from another source, SATuned.com will not be held responsible, either directly
                        or indirectly for any copyright violation. It is the customer’s responsibility to share his
                        or her personal product review, in his or her own words.
                    </p>

                    <p className=" content_justify">If you have any other questions or concerns, please contact us!</p>


                    <div className="mt-3 mb-2 contact_us_heading ">Product Media Posting Guidelines</div>

                    <p className="mt-1 content_justify">
                        SATuned.com encourages our customers to share photos, videos and installation PDF’s for the products
                        they have ordered either throughout the installation process, or once the product has been installed.
                        We want customers to be able to make smart buying decisions based on the feedback and media shared by
                        fellow buyers. All product media submitted by our customers will be reviewed to ensure that
                        the Product Media Posting Guidelines are being followed prior to being shared in a public setting.
                    </p>

                    <ul>
                        <li className="mt-2 content_justify">What is product media?</li>

                        <p className="mt-1 content_justify">
                            Product media is defined as any photo, video or pdf that may be shared on our website.
                        </p>

                        <li className="mt-2 content_justify">Who can share product media?</li>

                        <p className="mt-1 content_justify">
                            All customers who have purchased an item from SATuned.com are encouraged to share
                            media of the items ordered during or after installation.
                        </p>

                        <li className="mt-2 content_justify">What type of media can be shared?</li>

                        <p className="mt-1 content_justify">
                            Customers must provide quality media of the product(s) if they wish for the media
                            to be shared publicly.
                        </p>

                        <li className="mt-2 content_justify">There is a minimum resolution of <strong>800x600p and 72dpi</strong> for photos</li>

                        <li className="mt-2 content_justify">The only document type that will be accepted will be PDF documents.</li>

                        <li className="mt-2 content_justify">What media will not be accepted?</li>
                        <li className="mt-2 content_justify">Off-topic or unrelated media.</li>
                        <li className="mt-2 content_justify">Vague or poor quality media.</li>
                        <li className="mt-2 content_justify">Promotional content.</li>
                        <li className="mt-2 content_justify">Media with any form of “watermark” or “branding”.</li>
                        <li className="mt-2 content_justify">Media that include any form of text or added artwork. (i.e. MEMES, etc.).</li>
                        <li className="mt-2 content_justify">Copyright protected material.</li>

                    </ul>


                    <p className="mt-1 content_justify">
                        By sharing media with SATuned.com, the person or party responsible for sharing the media
                        transfers the ownership of said media to SATuned.com. This content will be shared on the
                        product page and/or marketing content that will be distributed by SATuned.com, as well
                        as our distributors. In the event that the customer media(s) contains any copyright
                        protected information or material from another source, SATuned.com will not be held
                        responsible, either directly or indirectly for any copyright violation. It is the
                        customer’s responsibility to share his or her personal product media only.

                    </p>

                    <p className="mt-1 content_justify">
                        In some cases, SATuned.com may modify user submitted material so that it can be shared
                        on the product detail page. Some cases may include, but are not limited to: Removal of
                        competitor branding, stickers, trademarks or logos, as well as photo quality enhancements.
                    </p>

                    <p className="mt-1 content_justify">
                        Should you feel that there is a quality or product safety concern, please contact us
                        immediately so that we may address your concerns.
                    </p>

                    <p className="mt-1 content_justify">
                        If you have any other questions or concerns, please contact us!
                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">Free Shipping</div>

                    <p className="mt-1 content_justify">
                        Items marked with a ‘Free Shipping On Orders INR 25000 and Up’ logo may qualify for free
                        standard shipping. Oversized products and direct ship products are excluded from this offer
                        unless otherwise noted.
                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">Damaged/Missing Items In Shipment</div>

                    <p className="mt-1 content_justify">
                        If you’ve received a damaged product you MUST notify the Customer Service Department (CSD)
                        within seven days to initiate a damaged package claim. You MUST also submit 3-5 pictures of
                        the damaged parts (from different angles) via email at <strong>support@SATuned.com</strong> with the Order
                        Number as reference. It is required that you keep all of the packaging material, box(es) and
                        broken product(s) until the shipping carrier completes the investigation. Failure to report
                        damaged items from an order before forwarding, re-shipping or transferring the shipment to
                        another location will result in immediate claim denial.
                    </p>

                    <p className="mt-1 content_justify">
                        If you are missing any products from your order, you MUST notify the CSD within seven days
                        of receiving the items. If you fail to report damaged and/or missing items in your shipment
                        within seven business days of receiving the package, replacement products will not be shipped
                        out under any circumstances. Failure to report missing items from an order before forwarding,
                        re-shipping or transferring the shipment to another location will result in immediate claim
                        denial.

                    </p>

                    <p className="mt-1 content_justify">
                        Replacement orders will be placed as soon as we are informed of the damaged package pending
                        the authorization provided by the shipping carrier you have selected on the original order.
                        Our shipping carrier typically requires ten to fourteen business days from the time the
                        claim is started. Please be sure to cooperate with the investigation and any questions that
                        the carrier may have during this time. SATuned.com will only provide replacement products
                        for damaged or missing products. SATuned.com will not provide refunds for any damaged or
                        missing product under any circumstances.
                    </p>

                    <p className="mt-1 content_justify">
                        Shipping Charges are non-refundable.
                    </p>


                    <div className="mt-3 mb-2 contact_us_heading ">Product Warranty</div>

                    <p className="mt-1 content_justify">
                        <strong>SATuned.com offers a one year warranty against manufacturer defects unless otherwise noted.
                            This warranty is void if we find that a product is used or installed against the
                            manufacturer’s suggested use or if the product has been modified in any way.</strong> Please contact
                        SATuned.com in order to obtain RMA # for any warranty transaction. Additionally the non
                        warranty products will be specifically mentioned on the website and strictly no warranty
                        can be claimed on the same products.
                    </p>

                    <p className="mt-1 content_justify">
                        Items ordered with clearance pricing or “limited time sale” transactions do not qualify for
                        warranty replacement of an equal item. These items are sold as is, no warranty as they are
                        not replaceable.
                    </p>

                    <p className="mt-1 content_justify">
                        Due to the possible rapid failure or misdiagnosis of some products SATuned.com excludes the
                        following products from the warranty above:
                    </p>

                    <p className="mt-1 content_justify">
                        Items marked with a ‘Free Shipping On Orders INR 25000 and Up’ logo may qualify for free
                        standard shipping. Oversized products and direct ship products are excluded from this offer
                        unless otherwise noted.
                    </p>

                    <ul>
                        <li className="mt-2 content_justify">Brake components* (Brake pads, rotors, etc.)</li>
                        <li className="mt-2 content_justify">Clutch Components* (Flywheels, disk, pressure plate, etc.)</li>
                        <li className="mt-2 content_justify">Electrical Components* (Sensors, switches, bulbs, etc.)</li>
                    </ul>

                    <p className="mt-1 content_justify">
                        *In some cases a manufacturer may consider offering a warranty for the items listed as
                        excluded above, however this will be done on a case by case basis only.
                    </p>

                    <p className="mt-1 content_justify">
                        All manufacturers require a proper shop diagnosis / paperwork with a description of the
                        problem/defect in order to be submitted for warranty review. All products must be returned
                        in the original packaging, including labeling, manuals, hardware, etc.
                    </p>

                    <p className="mt-1 content_justify">
                        Warranties are non-transferable, and only apply to the original purchaser of the products(s).
                        SATuned.com will only replace or repair warranty items at our discretion. Refunds are not
                        provided for any warranty transaction, only webstore credits and replacement products can
                        be provided.
                    </p>

                    <p className="mt-1 content_justify">
                        All products returned for warranty inspection are subject to testing within our company
                        and in some cases may require that the products are sent to the manufacturer for inspection
                        and testing. SATuned.com does not guarantee that any products will be warrantied until this
                        process is complete. In some cases warranties will be denied and SATuned.com must return
                        the product(s) at the expense of the customer.
                    </p>

                    <p className="mt-1 content_justify">
                        SATuned.com is not responsible for any damages that may have occurred by using the products
                        that we sell. SATuned.com does not pay for consequential, incidental and contingent damages
                        or costs incurred of any kind, including the cost incurred directly or indirectly in
                        relation to products sold by SATuned.com including labor or product coverage. SATuned.com
                        will only replace the defective product that was originally purchased from SATuned.com,
                        once the manufacturer and Customer Service department have verified that this part is faulty
                        and we have confirmed that the part is within its warranty period. Products that may have
                        been damaged or lost as a result of a faulty product will not be replaced by SATuned.com
                        under any circumstances.

                    </p>

                    <p className="mt-1 content_justify">
                        SATuned.com will only ship replacement products to the original address that the items were
                        shipped to. The customer is responsible for the cost of returning any item for warranty
                        inspection or repair. Shipping charges are non-refundable.

                    </p>


                    <div className="mt-3 mb-2 contact_us_heading ">Returns And Exchanges</div>

                    <ul>
                        <li className="mt-2 content_justify">New and Unused Products:</li>

                        <p className="mt-1 content_justify">
                            SATuned.com will accept returns for unused products that are normally stocked within 1 year from the
                            time that the order was shipped. If a product is returned within 15 days of the original ship date
                            you are eligible for a refund in the webstore credit. The customer is responsible for the return
                            shipping costs and fees. All the products must
                            be new, unused and must be in the original packaging, including labeling, manuals, hardware, etc.
                        </p>


                        <li className="mt-2 content_justify">Application and Fitment Issues:</li>
                        <p className="mt-1 content_justify">
                            If you wish to return a product that does not fit your vehicle and you feel that there is
                            an error in our listing, please submit a return request through your customer account page.
                            Our Customer Service team will review your Return Merchandise Authorisation (RMA) request,
                            investigate the cause of the fitment problem, and make any corrections that are needed. In
                            the event that we find an error on our website or on behalf of an SATuned.com representative,
                            we will provide a label for your return. All products must be new, unused and must be in the
                            original packaging, including labeling, manuals, hardware, etc.

                        </p>
                        <p className="mt-1 content_justify">
                            Replacement orders will be shipped only to the address used on the original order.
                            Shipping Charges are non-refundable.

                        </p>
                        <p className="mt-1 content_justify">
                            Customers are responsible for checking the fitment guide prior to ordering any product(s)
                            to verify that the parts you have selected are appropriate for your vehicle. To ensure
                            that you are ordering the correct products you must select your vehicle prior to ordering.

                        </p>


                        <li className="mt-2 content_justify">Refused Packages:</li>
                        <p className="mt-1 content_justify">
                            Any domestic orders that are returned to SATuned.com as refused by receiver or
                            non-deliverable will be subject to a return handling fee and will be processed as
                            a return in compliance with our standard return policy.

                        </p>


                        <li className="mt-2 content_justify">Return Process:</li>
                        <p className="mt-1 content_justify">
                            SATuned.com now offers an online returns solution! To get started, simply log into your
                            SATuned account, Click the “View Orders” button on the My Account home page and select
                            the order that you wish to make a return on to begin. If you have any questions, feel
                            free to reach out to our Customer Service Team for assistance!

                        </p>
                    </ul>

                    <p className=" content_justify">
                        Original shipping costs are non-refundable and the buyer is responsible for return shipping
                        charges.
                    </p>

                    <p className="content_justify">
                        All in store credit balances will expire after one year from the original purchase date.
                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">Lost Packages</div>

                    <p className="mt-1 content_justify">
                        If you do not receive your package and the tracking information shows that the package has
                        been delivered you must notify us within seven days of the marked delivery date so that we
                        can initiate a lost package tracer with the shipping carrier you have originally selected.
                        Replacement products will not be sent until the shipping carrier completes the tracer
                        request and grants permission for replacement product to be shipped. Our shipping carrier
                        typically requires ten to fourteen business days from the time the claim is started.
                        Please note that this is the policy of the shipper and not of SATuned.com. SATuned.com
                        does not guarantee that any packages will be credited by the shipping carrier until this
                        process is complete.
                    </p>

                    <p className="mt-1 content_justify">
                        SATuned.com will not provide refunds for any lost package under any circumstances. However,
                        webstore credits or replacement products can be granted depending on the circumstances of
                        the lost packages.
                    </p>

                    <p className="mt-1 content_justify">
                        Items ordered with clearance or “limited time sale” transactions do not qualify for
                        replacement of an equal item when they are found to be damaged. These items are sold
                        as is, no warranty as they are not replaceable. In the event that a clearance item or
                        limited quantity sale item is damaged in shipment, we will only be able to provide
                        webstore credit to the customer based on the purchase price of the transaction.

                    </p>

                    <p className="mt-1 content_justify">
                        Shipping Charges are non-refundable.
                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">100% Satisfaction Guaranteed</div>

                    <p className="mt-1 content_justify">
                        SATuned.com has one goal in mind and that is to make sure that our customers receive the industry’s highest
                        level of customer satisfaction and support during all phases of the customer’s experience.
                    </p>

                    <p className="mt-1 content_justify">
                        Did you change your plans? Did you sell your car? Did you order the incorrect product?
                    </p>

                    <p className="mt-1 content_justify">
                        We understand that things can change unexpectedly and that mistakes can happen.
                    </p>

                    <p className="mt-1 content_justify">
                        SATuned.com will provide its customers with a Satisfaction Guarantee return policy for
                        all qualifying new and unused products. Incase of any unexpected circumstances, SATuned.com
                        will accept returns, only if the following conditions are fulfilled:
                    </p>

                    <ul>
                        <li className="mt-2 content_justify">The qualifying product must be returned within 15 days of the original ship date</li>
                        <li className="mt-2 content_justify">The qualifying product must be new and unopened</li>
                        <li className="mt-2 content_justify">The product and its packaging should be undamaged</li>
                    </ul>

                    <p className="mt-1 content_justify">
                        Any returns made within 15 days that fulfill the above-mentioned criteria will qualify for
                        an SATuned.com webstore credit.
                    </p>

                    <p className="mt-1 content_justify">
                        Are you experiencing quality issues with a product after installation? Has the product that
                        you ordered failed? SATuned.com wants to make sure that all products meet your expectations
                        both before and after installation. Contact our Customer Service Team who will be happy to
                        take care of you regarding any warranty claims or questions you may have.
                    </p>

                    <p className="mt-1 content_justify">
                        Inventory Stock Description:
                    </p>

                    <p className="mt-1 content_justify">
                        In Stock: Usually ships within 48 hours / two business days excluding weekends.
                    </p>

                    <p className="mt-1 content_justify">
                        Ships in [# of days]: This product is sourced from a local supplier and will usually ship
                        within the time frame shown, meaning that your order would not ship from our location until
                        those products are received within the given timeframe. This is not to be confused with the
                        transit time from our warehouse to your location from the time the order was placed.
                    </p>

                    <p className="mt-1 content_justify">
                        Back Order: This product is currently on back order with our supplier or manufacturer.
                        are unable to predict the exact date that this product will be available for shipment.
                        Orders placed containing back ordered products will ship as soon as possible as products
                        become available. An alternate or equivalent product may be available. Please contact the
                        SATuned.com Sales Team if you have any questions.

                    </p>

                    <p className="mt-1 content_justify">
                        On Order [ETA]: This product is currently on order with our supplier. An ETA (estimated time
                        of arrival) will be listed on the description.

                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">Product Disclaimer</div>

                    <p className="mt-1 content_justify">
                        All the customers are requested to check the compatibility or the fitment of the product
                        by themselves. In case of any questions regarding the product vehicle fitment all the customers
                        requested to call / e-mail their enquiries and consult with us. We will not be responsible for
                        the products wrongly ordered from
                        the customer side. We can offer replacement or credit on customer’s SATuned.com account.

                    </p>

                    <p className="mt-1 content_justify">
                        It is the responsibility of the customer to check with all state local and environmental
                        laws prior to ordering and installing a product. SATuned.com is not responsible for any
                        fees, fines or costs that a customer may incur as a result of failing to check with federal,
                        state, local or environmental laws prior to ordering and installing a product.

                    </p>

                    <div className="mt-3 mb-2 contact_us_heading ">Shipping & Stock Status Policy</div>

                    <p className="mt-1 content_justify">
                        SATuned.com strives to ship “In-Stock” orders within 48 hours of receiving the order.
                        Shipping times may vary depending on the contents of your order. SATuned.com will only
                        ship an order once it is 100% in stock. SATuned.com does not ship partial orders unless
                        requested by the customer, at which time additional shipping charges may apply. If you
                        need your order by a specific date, it is important to contact us by phone so that we
                        may assist you. Once you have placed your order, it is important to log into your
                        SATuned.com Account page to review your order status, expected ship date, order
                        updates and order history. All dates provided are based on estimates given by the
                        supplier. SATuned.com does not guarantee ship dates as delivery times are subject to
                        change. All shipping times are based on our Monday through Saturday business hours.
                        Orders will not be shipped from our facility on Sunday.

                    </p>

                </div>
            </div>


        </>
    );
};

export default Termsandconditions;