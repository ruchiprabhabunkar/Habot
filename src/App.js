import React from "react";
import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/Signup/SignUpPage";
import BuyerSupplierPage from "./pages/BuyerSupplier/BuyerSupplierPage";
import GetVerifyPage from "./pages/Verify/GetVerifyPage";
import WorkPage from "./pages/work/WorkPage";
import Footer from "./pages/Footer/Footer";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <SignUpPage />
      <BuyerSupplierPage />
      <GetVerifyPage />
      <WorkPage />
      <Footer />
    </div>
  );
}

export default App;
