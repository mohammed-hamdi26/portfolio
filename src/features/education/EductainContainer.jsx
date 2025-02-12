import EducationItem from "./EducationItem";
import { useEducation } from "./useEducation";

function EductainContainer() {
  const { data: educations, isLoading } = useEducation();
  if (isLoading) return null;

  return (
    <div>
      {educations.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </div>
  );
}

export default EductainContainer;
