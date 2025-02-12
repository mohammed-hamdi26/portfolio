import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function WelcomeExperience({ isVisable }) {
  return (
    <div
      className={`flex   justify-between w-full ${
        !isVisable ? "translate-y-0" : "-translate-y-48"
      }  transition-transform duration-500`}
    >
      <ul className="text-2xl sm:text-4xl space-y-3">
        <li>
          <a href="https://www.linkedin.com/in/mohamed-hamdi-868a9b275/">
            <FaLinkedinIn className="cursor-pointer hover:text-[#0a66c2] transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://github.com/mohammed-hamdi26">
            <FaGithub className=" cursor-pointer hover:text-[#333] transition duration-300" />
          </a>
        </li>
      </ul>
      <div>
        <p className="text-3xl sm:text-5xl font-bold">1 Year</p>
        <p className="text-xl sm:text-2xl  font-semibold text-paragraph-primary">
          experience
        </p>
      </div>
    </div>
  );
}

export default WelcomeExperience;
