import supabase from "./supabase";

export async function getProjects() {
  let { data: projects, error } = await supabase.from("projects").select("*");

  if (error) throw new Error("can't get Projects");

  return projects;
}
