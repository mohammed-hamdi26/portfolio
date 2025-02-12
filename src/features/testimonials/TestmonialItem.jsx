import { SwiperSlide } from "swiper/react";
import StarsContainer from "../../components/StarsContainer";

function TestmonialItem({ testimonial }) {
  return (
    <div className=" p-6 bg-white backdrop-blur-lg bg-opacity-15 text-white rounded-lg overflow-hidden space-y-6">
      <h3 className="text-2xl font-bold">{testimonial.customer_name}</h3>
      <StarsContainer length={5} rate={testimonial.rate} />
      <p className="text-xl">{testimonial.info}</p>
    </div>
  );
}

export default TestmonialItem;
