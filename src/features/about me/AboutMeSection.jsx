import AboutBox from "./AboutBox";
import AboutMeTitle from "./AboutMeTitle";
import MySkills from "./MySkills";

function AboutMeSection() {
  return (
    <div
      className={`px-4 sm:px-16  py-20 bg-my-services bg-cover bg-center bg-opacity-20 relative -z-20 space-y-6 overflow-x-hidden rounded-t-3xl `}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black-primary bg-opacity-50 -z-10"></div>
      <AboutMeTitle />
      <AboutBox title={"Get to know me!"} transitionWay={"left"}>
        <p className="  sm:text-2xl px-8 py-4 leading-9 tracking-wider  ">
          I am a passionate front-end developer with a strong foundation in
          building user-friendly and interactive web applications. As a fresh
          developer, I specialize in modern technologies like React and Next.js
          to create seamless and responsive user experiences. I&apos;m always
          eager to learn and take on new challenges to enhance my skills and
          contribute to impactful projects.
        </p>
      </AboutBox>
      <AboutBox title={"Skills"} transitionWay={"right"}>
        <MySkills />
      </AboutBox>
    </div>
  );
}

export default AboutMeSection;
