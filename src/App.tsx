import { Routes, Route } from "react-router-dom";
import { Layout } from "../src/components/Layout/Layout";
import FashionList from "../src/components/FashionList/FashionList";
import { AboutUs } from "./components/Page sections/AboutUs";
import { CustomerReviews } from "./components/Page sections/CustomerReviews";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FashionList />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="reviews" element={<CustomerReviews />} />
      </Route>
    </Routes>
  );
}

export default App;
