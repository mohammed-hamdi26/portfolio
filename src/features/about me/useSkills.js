import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../services/apiSkills";

export function useSkills() {
  const { data, isLoading } = useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });

  return { data, isLoading };
}
