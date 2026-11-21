
export type PostData = {
    id: string;
    username: string;
    message: string;
    created_at: string;
    image_url: string | null;
}

export type PostsProps = {
    posts: PostData[];
}
