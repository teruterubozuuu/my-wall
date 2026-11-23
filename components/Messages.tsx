"use client";
import { supabase } from '@/utils/supabase/client';
import { Panel, PanelContent, PanelFooter, PanelHeader, PanelTitle } from './ui/panel/panel'
import { PostData, PostsProps } from '@/utils/types/posts'
import { useEffect, useState } from 'react';

function isPostData(value: unknown): value is PostData {
  if (!value || typeof value !== "object") return false;

  const post = value as Record<string, unknown>;

  return (
    typeof post.id === "string" &&
    typeof post.username === "string" &&
    typeof post.message === "string" &&
    typeof post.created_at === "string" &&
    (post.image_url === null || typeof post.image_url === "string")
  );
}

export default function Messages({ posts: initialPosts }: PostsProps) {
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

  useEffect(() => {
    const channel = supabase
      .channel("posts-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "posts",
        },
        (payload) => {
          const newPost = payload.new as unknown;

          if (!isPostData(newPost)) return;

          setPosts((currentPosts) => [
            newPost,
            ...currentPosts.filter((post) => post.id !== newPost.id),
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className='flex min-h-0 flex-col gap-3'>
      {posts.map((post) => {
        const date = new Date(post.created_at);
        const formatted = new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }).format(date);

        return (
          <Panel notch='md' key={post.id} className='shrink-0'>
            <PanelHeader>
              <PanelTitle className='text-bone/80!'>{post.username}</PanelTitle>
            </PanelHeader>
            <PanelContent>
              <p className='font-pixel'>{post.message}</p>
              {post.image_url && (
                <div className='flex justify-center my-3'>
                  <img loading="eager" width={500} height={500} src={post.image_url} alt="Image" className='w-150 h-auto' />

                </div>
              )}
            </PanelContent>
            <PanelFooter>
              <span className="text-xs opacity-50">{formatted}</span>
            </PanelFooter>
          </Panel>
        )
      })}
    </div>
  )
}
