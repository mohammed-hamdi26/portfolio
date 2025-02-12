import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../../services/apiTestimonials";

export function useTestimonials() {
  const { data, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  return { data, isLoading };
}
