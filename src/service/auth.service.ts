import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  return { data, error };
}
async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) return false;
  else true;
}

const isAuthenticated = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) return true;
  else return false;
};

export default {
  signInWithGitHub,
  signOut,
  isAuthenticated,
};
