import Loader from "../../components/Loader";
import ProjectItem from "../../components/ProjectItem";
import { useProjects } from "./useProjects";

function ProjectsContainer() {
  const { data: projects, isLoading } = useProjects();
  if (isLoading)
    return (
      <div className="h-96 flex justify-center items-center">
        <Loader size={30} />
      </div>
    );
  return (
    <div className="flex flex-col md:flex-row gap-14">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsContainer;
