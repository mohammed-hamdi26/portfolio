import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://utmvduatheyqgxzrjapf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0bXZkdWF0aGV5cWd4enJqYXBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NTUyOTUsImV4cCI6MjA0NzAzMTI5NX0.hFx7itst6iiD-N4TTl_GDc6ZZ2MDTwL7qRt7zxn8Hx4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
