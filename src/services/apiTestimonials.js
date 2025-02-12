import supabase from "./supabase";

export async function getTestimonials() {
  let { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*");
  if (error) {
    console.error("Error fetching testimonials", error.message);
    throw new Error(error.message);
  }
  return testimonials;
}
