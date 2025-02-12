import ProjectsContainer from "./ProjectsContainer";

function MyProjectsSection() {
  return (
    <div className="px-4 sm:px-16 py-20 space-y-7 bg-[#F2F4F7]">
      <div>
        <h2 className="text-6xl font-bold text-paragraph-primary ">
          My <span className="text-orange-primary">Projects</span>
        </h2>
      </div>
      <ProjectsContainer />
    </div>
  );
}

export default MyProjectsSection;
