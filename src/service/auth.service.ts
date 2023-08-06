import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) return false;
  return data;
}
async function signout() {
  const { error } = await supabase.auth.signOut();
  if (error) return false;
  else true;
}

export default {
  signInWithGitHub,
  signout,
};
