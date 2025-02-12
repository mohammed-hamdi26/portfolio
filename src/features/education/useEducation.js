import { useQuery } from "@tanstack/react-query";
import { getEducation } from "../../services/apiEducation";

export function useEducation() {
  const { data, isLoading } = useQuery({
    queryKey: ["education"],
    queryFn: getEducation,
  });
  return { data, isLoading };
}
