import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import FashionList from "./components/FashionList/FashionList";
import { AboutUs } from "./components/Page sections/AboutUs";
import { CustomerReviews } from "./components/Page sections/CustomerReviews";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import Discounts from "./components/DiscountOffers/DiscountOffers";
import Newsletter from "./components/NewsLetter/NewsLetter";

function App() {
  const [totalComments, setTotalComments] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Fashion page */}
        <Route path="/fashion" element={<Layout />}>
          <Route index element={<FashionList />} />
        </Route>

        {/* Other pages outside of Fashion layout */}
        <Route path="/discounts" element={<Discounts  />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/newsletter" element={<Newsletter totalComments={totalComments} setTotalComments={setTotalComments} />} />
      </Routes>
    </>
  );
}

export default App;
