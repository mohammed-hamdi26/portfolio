import TestimonialsContainer from "./TestimonialsContainer";

function TestimonialsSection() {
  return (
    <div className="bg-my-services   py-20 space-y-24">
      <h2 className="text-6xl font-bold text-white  text-center  tracking-wide   ">
        Testimonials That
        <br />
        Speak to <span className="text-orange-primary">My Results</span>
      </h2>
      <TestimonialsContainer />
    </div>
  );
}

export default TestimonialsSection;
