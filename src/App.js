import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/commonComponent/BactToTop/BackToTop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import { totalQuantity } from "./Utilis/GetTotalQuantity";
import CartPage from "./pages/CartPage/CartPage";
import { newsData } from "./components/Data/newsData";
import NotFind from "./added/pages/NotFound/NotFind.js";
import Faq from "./added/pages/FaqPage/Faq.js";
import Register from "./added/pages/Account/Register.js";
import Login from "./added/pages/Account/Login.js";
import Services from "./added/pages/Services/Services";
import SingleNewsPage from "./added/pages/NewsPage/SingleNewsPage";
import Gallery from "./added/pages/Gallery/Gallery.js";
import Payment from "./pages/Payment/Payment";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Termsandconditions from "./components/Termsandconditions/Termsandconditions";
import AboutUs from "./components/AboutUs/AboutUs";
import Blogs from "./components/Blogs/Blogs";
import BlogsDetails from "./components/Blogs/BlogsDetails";
import MyAccount from "./components/MyAccount/MyAccount";
import EditInformation from "./components/MyAccount/EditInformation";
import ChangePassword from "./components/MyAccount/ChangePassword";
import GetService from "./components/GetService/GetService";
import InteriorProducts from "./components/productPageComponent/ProductPageLayout/InteriorProducts";
import ExteriorProducts from "./components/productPageComponent/ProductPageLayout/ExteriorProducts";
import PerformanceandTunning from "./components/productPageComponent/ProductPageLayout/PerformanceandTunning";
import OrderHistory from "./components/MyAccount/OrderHistory";
import ModifyAddress from "./components/MyAccount/ModifyAddress";
import ReturnsorReplace from "./components/MyAccount/ReturnsorReplace";

export const CardContext = createContext();

function App() {
  const quantity = totalQuantity();
  const [cardProductLength, setcardproductLength] = useState(quantity);
  return (
    <CardContext.Provider value={[cardProductLength, setcardproductLength]}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/home" exact>
              <HomePage />
            </Route>

            <Route path="/payment" exact>
              <Payment />
            </Route>

            <Route path="/products" exact>
              <ProductPage />
            </Route>
            <Route path="/products/:id">
              <ProductDetailsPage />
            </Route>
            <Route path="/news">
              <NewsPage />
            </Route>
            <Route path="/news/:title" exact>
              <SingleNewsPage newsData={newsData} />
            </Route>
            <Route path="/check-out">
              <CheckoutPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/pages/faq">
              <Faq />
            </Route>
            <Route path="/account/register">
              <Register />
            </Route>
            <Route path="/account/login">
              <Login />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            
            <Route path="/gallery">
              <Gallery />
            </Route>

            <Route path="/contact-us">
              <ContactUs />
            </Route>

            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>

            <Route path="/terms-and-conditions">
              <Termsandconditions />
            </Route>

            <Route path="/about-us">
              <AboutUs />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            <Route path="/blog-details">
              <BlogsDetails />
            </Route>

            <Route path="/my-account">
              <MyAccount />
            </Route>

            <Route path="/edit-information">
              <EditInformation />
            </Route>

            <Route path="/change-password">
              <ChangePassword />
            </Route>

            <Route path="/get-service-quote">
              <GetService />
            </Route>

            <Route path="/interior-products">
              <InteriorProducts />
            </Route>

            <Route path="/exterior-products">
              <ExteriorProducts />
            </Route>

            <Route path="/performance-and-tunning">
              <PerformanceandTunning />
            </Route>

            <Route path="/order-history">
              <OrderHistory />
            </Route>

            <Route path="/modify-address">
              <ModifyAddress />
            </Route>

            <Route path="/return">
              <ReturnsorReplace />
            </Route>

            <Route path="/not-found">
              <NotFind />
            </Route>

            <Redirect from="*" to="/not-found" />

            <Footer />
          </Switch>
          <BackToTop />
        </div>
        <Footer />
      </Router>
    </CardContext.Provider>
  );
}

export default App;
