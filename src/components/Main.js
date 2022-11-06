import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import DeactivateModal from "./DeactivateModal";
import LoginSuccessModal from "./LoginSuccessModal";
import ApplyService from "./ApplyService";
import Header from "./Header";
import Register from "./Register";
import RegisterSuccessModal from "./RegisterSuccessModal";
import MarketPlace from "./MarketPlace";
import Company from "./Company";
import Features from "./Features";
import Services from "./Services";
import CropPreview from "./CropPreview";
import CropModal from "./CropModal";
import PersonalInfoSavedModal from "./PersonalInfoSavedModal";
import DetailsSavedModal from "./DetailsSavedModal";
import DocumentsUploadedModal from "./DocumentsUploadedModal";
import NotificationPreferencesSavedModal from "./NotificationPreferencesSavedModal";

const Main = () => {
  return (
    <Routes>
      {" "}
      {/* The Routes decides which component to show based on the current URL.*/}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/deactivate-modal' element={<DeactivateModal />} />
      <Route path='/login-success' element={<LoginSuccessModal />} />
      <Route path='/apply-service' element={<ApplyService />} />
      <Route path='/header' element={<Header />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register-success' element={<RegisterSuccessModal />} />
      <Route path='/company' element={<Company />} />
      <Route path='/marketplace' element={<MarketPlace />} />
      <Route path='/features' element={<Features />} />
      <Route path='/services' element={<Services />} />
      <Route path='/marketplace/crop-preview' element={<CropPreview />} />
      <Route path='/marketplace/crop-modal' element={<CropModal />} />
      <Route
        path='/services/personal-info-saved'
        element={<PersonalInfoSavedModal />}
      />
      <Route
        path='/services/documents-uploaded'
        element={<DocumentsUploadedModal />}
      />
      <Route
        path='/services/notification-preferences-saved'
        element={<NotificationPreferencesSavedModal />}
      />
      <Route
        path='/marketplace/details-saved'
        element={<DetailsSavedModal />}
      />
    </Routes>
  );
};

export default Main;
