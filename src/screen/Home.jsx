import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";
import CategorySection from "../components/CategorySection";
import TreatmentSection from "../components/TreatmentSection";
import EligibilitySection from "../components/EligibilitySection";
import PreparationSection from "../components/PreparationSection";
import AboutSection from "../components/AboutSection";
import PostTreatmentSection from "../components/PostTreatmentSection";
import RecoverySection from "../components/RecoverySection";
import FAQSection from "../components/FAQSection";
import PatientStories from "../components/PatientStories";
import DoctorDetails from "../components/DoctorDetails";
import HospitalDetail from "../components/HospitalDetail";
import HelpLine from "../components/HelpLine";
import FooterSection from "../components/FooterSection";
import Form from "../components/Enq";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <TopSection />
        <div className="sticky top-0  z-20">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <div className="relative container mx-auto">
        <div className="sticky top-0 z-20  bg-white lg:col-span-3">
          <CategorySection />
        </div>
        <TreatmentSection />
        <div className="grid lg:grid-cols-3 ">
          <div className="lg:col-span-2">
            <EligibilitySection />
            <PreparationSection />
            <AboutSection />
            <PostTreatmentSection />
            <RecoverySection />
            <FAQSection />
            <PatientStories />
          </div>
          <div className="h-full">
          <div className="sticky top-20 z-10  ">
            <Form />
          </div>
          </div>
        </div>
      </div>

      <DoctorDetails />
      <HospitalDetail />
      <HelpLine />
      <FooterSection />
    </div>
  );
};

export default Home;
