import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/language/i18n"

// ✅ Import pages
import Header from "./Components/header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Partners from "./pages/Department_lab/Department_lab";
import Research from "./pages/Department_res/Department_res";
import Planning from "./pages/Department_pla/Department_pla";
import ContactPage from "./pages/Contact/Contact";
import PhotoGallery from "./pages/Gallery/Gallery";
import News from "./pages/News/News";
import Events from "./pages/Events/Event";
import History from "./pages/History/History";
import DirectorMessage from "./pages/Message/Message";
import Mission from "./pages/Mission/Mission";
import Team from "./pages/OrganizationsStaff/Staff";
import Structure from "./pages/OrganizationStructure/Structure";
import Services from "./pages/Services/Services";
import Publication from "./pages/Publication/Publication";
import Centre from "./pages/Centers/Center";
import ResearchAreas from "./pages/Research-area/Research-area";
import Certificate from "./pages/Services/Certificate/Certificate";
import Laboratory from "./pages/Services/lab/lab";
import Consultancy from "./pages/Services/Consu/Consultancy"
import Outreach from "./pages/Services/out/Outreach";
import ResearchServices from "./pages/Services/Res/ResearchServices";
import FishStock from "./pages/Research-area/Fish/fish";
import CaptureFishery from "./pages/Research-area/capture/CaptureFishery";
import Aquaculture from "./pages/Research-area/Aquaculture/Aquaculture";
import FishBiology from "./pages/Research-area/FishBiology/FishBiology";
import FishDisease from "./pages/Research-area/FishDisease/FishDisease";
import Oceanography from "./pages/Research-area/Oceanography/Oceanography";
import ClimateChange from "./pages/Research-area/ClimateChange/ClimateChange";
import CoastalPollution from "./pages/Research-area/CoastalPollution/CoastalPollution";
import SocioEconomics from "./pages/Research-area/SocioEconomics/SocioEconomics";
import Bioinformatics from "./pages/Research-area/Bioinformatics/Bioinformatics";
import FishFarmingProcessing from "./pages/Research-area/FishFarmingProcessing/FishFarmingProcessing";
import AquaticEcosystems from "./pages/Research-area/AquaticEcosystems/AquaticEcosystems";
import FishBreedingFeeding from "./pages/Research-area/FishBreedingFeeding/FishBreedingFeeding";
import FishHandlingProcessing from "./pages/Research-area/FishHandlingProcessing/FishHandlingProcessing";
import TissueCulturing from "./pages/Research-area/TissueCulturing/TissueCulturing";
import OngoingProjects from "./pages/Project/On-going/ongoingProjects";



function App() {
  return (
    <I18nextProvider i18n={i18n}>

      <Router>
        {/* ✅ Reusable Header */}
        <Header />


        {/* ✅ Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department-lab" element={<Partners />} />
          <Route path="/department-res" element={<Research />} />
          <Route path="/department-pla" element={<Planning />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/history" element={<History />} />
          <Route path="/message" element={<DirectorMessage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/organizationStaff" element={<Team />} />
          <Route path="/organizationStructure" element={<Structure />} />
          <Route path="/services" element={<Services />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/center" element={<Centre />} />
          <Route path="/area" element={<ResearchAreas />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/Consultancy" element={<Consultancy />} />
          <Route path="/Outreach" element={<Outreach />} />
          <Route path="/ResearchServices" element={<ResearchServices />} />
          <Route path="/FishStock" element={<FishStock />} />
          <Route path="/CaptureFishery" element={<CaptureFishery />} />
          <Route path="/Aquaculture" element={<Aquaculture />} />
          <Route path="/FishBiology" element={<FishBiology />} />
          <Route path="/FishDisease" element={<FishDisease />} />
          <Route path="/Oceanography" element={<Oceanography />} />
          <Route path="/ClimateChange" element={<ClimateChange />} />
          <Route path="/CoastalPollution" element={<CoastalPollution />} />
          <Route path="/SocioEconomics" element={<SocioEconomics />} />
          <Route path="/Bioinformatics" element={<Bioinformatics  />} />
          <Route path="/FishFarmingProcessing" element={<FishFarmingProcessing  />} />
          <Route path="/AquaticEcosystems" element={<AquaticEcosystems  />} />
          <Route path="/FishBreedingFeeding" element={<FishBreedingFeeding  />} />
          <Route path="/FishHandlingProcessing" element={<FishHandlingProcessing  />} />
          <Route path="/TissueCulturing" element={<TissueCulturing  />} />
          <Route path="/ongoingProjects" element={<OngoingProjects  />} />

          



        </Routes>

        <Footer />

      </Router>
    </I18nextProvider>
  );
}

export default App;
