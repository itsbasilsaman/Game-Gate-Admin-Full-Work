import React, { Fragment, Suspense } from "react";
import { Routes, Route, useLocation,   } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loading } from "./components/pages/Loading";
import { AdminLogin } from "./components/forms/admin/login";
import { useSelector } from "react-redux";
import { RootState } from "./reduxKit/store";
import DefaultLayout from "./layout/DefaultLayout";
import SubServiceForm from "./components/pages/Form/SubServiceForm";
import BrandData from "./components/pages/Form/AddBrand"; 
import SubService from "./components/Table/SubService";
import SellerList from "./components/pages/seller/sellerList";
import BrandList from "./components/Table/BrandList";
import ServiceListSection from "./components/Table/ServiceListSection";
import AddService from "./components/pages/Form/AddService";
import SellerListSection from "./components/pages/seller/sellerList";
import SellerProfile from "./components/Table/SellerProfile";
import AddProduct from "./components/pages/product/AddProduct";
import UserList from "./components/pages/user-management/userDetails";
import GetUserById from "./components/pages/user-management/getUserById";
import AddRegion from "./components/pages/Form/AddRegion";
import RegionListSection from "./components/Table/RegionListSection";
import GetOffer from "./components/pages/offer-management/getOffer";
import ProductListSection from "./components/pages/product/productList";
import ProductItem from "./components/pages/product/productListItem";
import { LandingPage } from "./components/pages/LandingPage";
  // Import the LandingPage component

export const App: React.FC = React.memo(() => {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const isLoginRoute = location.pathname === "/admin/login";
  
  console.log('Check if the user is logged in: ', isLogged);
  
  // Redirect to login page if user is not logged in
  if (!isLogged && !isLoginRoute) {
    return <LandingPage />; // Show the LandingPage instead of redirecting immediately
  }

  return (
    <Fragment>
      <Toaster position="top-center" />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/" element={<LandingPage />} /> {/* Show LandingPage at root */}
        </Routes>
        {!isLoginRoute && isLogged && (
          <DefaultLayout>
            <Routes>
              {/* <Route path="/" element={<ECommerce />} /> */}
              <Route path="/seller/sellerList" element={<SellerList />} />
              <Route path="/brand" element={<BrandData />} />
              <Route path="/addservice" element={<AddService />} />
              <Route path="/brandAdd" element={<BrandData />} />
              <Route path="/sellerlist" element={<SellerListSection />} />
              <Route path="/sellerprofile" element={<SellerProfile />} />
              <Route path="/subserviceform" element={<SubServiceForm />} />
              <Route path="/brandlist" element={<BrandList />} />
              <Route path="/servicelistsection" element={<ServiceListSection />} />
              <Route path="/userlist" element={<UserList />} />
              <Route path="/getuser/:userId" element={<GetUserById />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/productList" element={<ProductListSection/>} />
              <Route path="/productList/:id" element={<ProductItem/>} />
              <Route path="/subservice" element={<SubService />} />
              <Route path="/addregion" element={<AddRegion />} />
              <Route path="/regionlist" element={<RegionListSection />} />
              <Route path="/getoffer" element={<GetOffer />} />
            </Routes>
          </DefaultLayout>
        )}
      </Suspense>
    </Fragment>
  );
});