import { useSkills } from "./useSkills";

function MySkills() {
  const { data: skills, isLoading } = useSkills();
  if (isLoading) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 px-8 py-4 gap-10">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-orange-primary text-xl font-bold rounded-lg px-3 py-4 text-center "
        >
          {skill.skill_name}
        </div>
      ))}
    </div>
  );
}

export default MySkills;
