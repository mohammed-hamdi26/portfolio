function WelcomeHeader({ isVisable }) {
  return (
    <h1
      className={` text-4xl sm:text-5xl  md:text-7xl lg:text-8xl  text-black-primary font-semibold text-center ${
        !isVisable
          ? "-translate-y-40 sm:-translate-y-44 xl:-translate-y-56"
          : "translate-y-[600px]"
      } transition-transform duration-500 -z-20`}
    >
      I’m <span className="text-orange-primary">Mohammed,</span>
      <br />
      Front-End Developer
    </h1>
  );
}

export default WelcomeHeader;
