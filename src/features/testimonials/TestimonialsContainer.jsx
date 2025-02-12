import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Include Swiper styles
import { Autoplay } from "swiper/modules";
import TestmonialItem from "./TestmonialItem";
import { useTestimonials } from "./useTestimonials";
import Loader from "../../components/Loader";
function TestimonialsContainer() {
  const { data, isLoading } = useTestimonials();
  if (isLoading) return;
  <div className="flex justify-center  ">
    <Loader />
  </div>;
  return (
    <div className="px-4">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          979: { slidesPerView: 3 },
        }}
        spaceBetween={10} // Space between slides
        slidesPerView={2} // Show 3 slides at a time
        loop={true} // Enable infinite loop
        autoplay={{
          delay: -1000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={4000} // Adjust speed for smooth scrolling (higher = slower)
        allowTouchMove={false} // Makes cursor a grabbing hand
        modules={[Autoplay]}
      >
        {data.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestmonialItem testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsContainer;
