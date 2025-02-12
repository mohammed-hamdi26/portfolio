import FooterList from "./FooterList";

function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row gap-5 py-14">
      <div className="space-y-5">
        <h3 className="text-2xl text-white">Mohammed hamdi</h3>
        <p className="text-xl">
          I am a passionate front-end developer with a strong foundation in
          building user-friendly and interactive web applications. As a fresh
          developer, I specialize in modern technologies like React and Next.js
          to create seamless and responsive user experiences. I'm always eager
          to learn and take on new challenges to enhance my skills and
          contribute to impactful projects.
        </p>
      </div>
      <FooterList
        title={"contact"}
        items={["+20 1095098769", "mohammedhamdi262003@gmail.com"]}
      />
    </div>
  );
}

export default ContactInfo;
