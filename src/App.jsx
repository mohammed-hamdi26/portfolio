import Footer from "./components/Footer";
import AboutMeSection from "./features/about me/AboutMeSection";
import EducationSectoin from "./features/education/EducationSectoin";
import MyProjectsSection from "./features/MyProjects/MyProjectsSection";
import TestimonialsSection from "./features/testimonials/TestimonialsSection";
import WelcomSection from "./features/welcome section/WelcomSection";

function App() {
  return (
    <div className=" ">
      <WelcomSection />
      <AboutMeSection />
      <EducationSectoin />
      <MyProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
