import { FaArrowRight } from "react-icons/fa";

function ProjectItem({ project }) {
  return (
    <div
      className={` flex items-end flex-1 p-3 min-h-96  rounded-lg  text-white z-10  bg-cover bg-top bg-no-repeat  group overflow-hidden relative `}
    >
      <img
        src={project.project_image}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black-primary  from-5% to-transparent bg-opacity-50 -z-10"></div>
      <div className=" space-y-4 group-hover:bg-black group-hover:bg-opacity-20 group-hover:backdrop-blur-lg p-2 sm:p-6 rounded-lg transition-all duration-300">
        <h3 className=" text-5xl sm:text-7xl text-[#FFF9F4] font-bold">
          {project.project_name}
        </h3>
        <p className="hidden text-xl text-[#FFEAD5] group-hover:block ">
          {project.info}
        </p>
      </div>
      <a
        href={project.project_link}
        target="_blank"
        className="absolute  top-3 right-3  border-2 border-orange-primary text-orange-primary cursor-pointer   rounded-full p-4 text-2xl group-hover:text-white group-hover:bg-orange-primary transition-all duration-300"
      >
        <FaArrowRight />
      </a>
    </div>
  );
}

export default ProjectItem;
