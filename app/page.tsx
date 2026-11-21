import Wall from "@/components/Wall";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const instant = false;

export default async function Main() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {data: posts, error: postsError} = await supabase
  .from("posts")
  .select("*")
  .order("created_at", {ascending: false});

  if (postsError) {
    console.error("Failed to fetch posts: ", postsError);
    return;
  }

  return <Wall posts={posts}/>
}
