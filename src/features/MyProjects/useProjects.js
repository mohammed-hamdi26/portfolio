import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../services/apiProjects";

export function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { data, isLoading };
}
