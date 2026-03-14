import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FloatingButtons from "./component/FloatingButtons";
import NotFoundPage from "./component/404";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Classroom from "./pages/Classroom";
import HomeLearning from "./pages/HomeLearning";
import StudentInformationSystem from "./pages/StudentInformationSystem";
import TransportManagement from "./pages/TransportManagement";
import FeesManagement from "./pages/FeesManagement";
import ReportCardManagement from "./pages/ReportCardManagement";
import ParentCommunicationPortal from "./pages/ParentCommunicationPortal";
import KinderSuite from "./pages/KinderSuite";
import K12Suite from "./pages/K12Suite";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-primary">
      <Navbar />
      <FloatingButtons />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/homeLearning" element={<HomeLearning />} />
          <Route path="/studentInformationSystem" element={<StudentInformationSystem />} />
          <Route path="/transport" element={<TransportManagement />} />
          <Route path="/feeManagement" element={<FeesManagement />} />
          <Route path="/reportCardManagement" element={<ReportCardManagement />} />
          <Route path="/parentCommunicationPortal" element={<ParentCommunicationPortal />} />
          <Route path="/kinderSuite" element={<KinderSuite />} />
          <Route path="/k12Suite" element={<K12Suite />} />
          <Route path="/notFound" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;