import supabase from "./supabase";

export async function getEducation() {
  let { data: education, error } = await supabase.from("education").select("*");
  if (error) throw new Error(error.message);

  return education;
}
