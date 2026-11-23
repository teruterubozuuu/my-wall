import React from 'react'
import { Separator } from './ui/separator/separator'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { PostsProps } from '@/utils/types/posts'

export default function Wall({ posts }: PostsProps) {
    return (
         <div className='pb-10'>
            <Separator />
            <Separator label="TELL ME SOMETHING" />

            <section className="my-5 shrink-0">
                <MessageInput />
            </section>

            <Separator />
            <Separator label="MESSAGES" />

            <section className="my-5 pb-3">
                <Messages posts={posts} />
            </section>
        </div>
    )
}
