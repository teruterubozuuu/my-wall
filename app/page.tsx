import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import MainPage from "@/components/MainPage";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const instant = false;

export default async function Main() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: posts, error: postsError } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (postsError) {
    console.error("Failed to fetch posts: ", postsError);
    return;
  }

  return(
     <MainPage posts={posts} />
  )
}
