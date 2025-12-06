import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";

import { Layout } from "./components/Layout/Layout";
import { Body } from "./components/Layout/Body/Body"; 
import { AboutUs } from "./components/Page sections/AboutUs";
import { CustomerReviews } from "./components/Page sections/CustomerReviews";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import Discounts from "./components/DiscountOffers/DiscountOffers";
import Newsletter from "./components/NewsLetter/NewsLetter";
import Notifications from "./components/pages/Notifications";

function App() {
  const [totalComments, setTotalComments] = useState(0);

  return (
    <>
      {/* Show something while Clerk loads user session */}
      <ClerkLoading>
        <p style={{ textAlign: "center" }}>Loading...</p>
      </ClerkLoading>

      {/* Load entire website ONLY after Clerk is ready */}
      <ClerkLoaded>
        <Routes>
          {/* Clerk callback route  */}
          <Route 
            path="/sso-callback" 
            element={<div>Loading authentication...</div>} 
          />

          {/* Pages WITHOUT layout */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Pages WITH layout */}
          <Route element={<Layout />}>
            <Route path="/fashion" element={<Body />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/reviews" element={<CustomerReviews />} />
            <Route path="/notifications" element={<Notifications />} />

            <Route
              path="/newsletter"
              element={
                <Newsletter
                  totalComments={totalComments}
                  setTotalComments={setTotalComments}
                />
              }
            />
          </Route>
        </Routes>
      </ClerkLoaded>
    </>
  );
}

export default App;
