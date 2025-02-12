import { useState } from "react";
import PortfolioImage from "./PortfolioImage";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeExperience from "./WelcomeExperience";
import { FaLinkedinIn } from "react-icons/fa";
import DownLoadCv from "../../components/DownLoadCv";

function WelcomSection() {
  const [isVisable, setIsVisable] = useState(false);
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center px-4 md:px-16">
      <WelcomeHeader isVisable={isVisable} />
      <div className=" w-full flex justify-between items-center">
        <WelcomeExperience isVisable={isVisable} />
      </div>
      <PortfolioImage isVisable={isVisable} setIsVisable={setIsVisable} />
      <div className=" bottom-10 absolute ">
        <DownLoadCv />
      </div>
    </div>
  );
}

export default WelcomSection;
