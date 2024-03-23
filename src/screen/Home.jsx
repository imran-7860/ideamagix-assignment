import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import TopSection from '../components/TopSection';
import CategorySection from '../components/CategorySection';
import TreatmentSection from '../components/TreatmentSection';
import EligibilitySection from '../components/EligibilitySection';
import PreparationSection from '../components/PreparationSection';
import AboutSection from '../components/AboutSection';
import PostTreatmentSection from '../components/PostTreatmentSection';
import RecoverySection from '../components/RecoverySection';
import FAQSection from '../components/FAQSection';
import PatientStories from '../components/PatientStories';
import DoctorDetails from '../components/DoctorDetails';
import HospitalDetail from '../components/HospitalDetail';
import HelpLine from '../components/HelpLine';
import FooterSection from '../components/FooterSection';
const Home = () => {
  return (
    <div>
    <TopSection />
    <Navbar />
    <HeroSection />
    <CategorySection />
    <TreatmentSection />
    <EligibilitySection />
    <PreparationSection />
    <AboutSection />
    <PostTreatmentSection/>
    <RecoverySection />
    <FAQSection />
    <PatientStories />
    <DoctorDetails/>
    <HospitalDetail />
    <HelpLine />
    <FooterSection />
   </div>
   
  )
}

export default Home