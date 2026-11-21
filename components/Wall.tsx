"use client";
import { Card, CardContent, CardFooter } from './ui/card/card'
import Image from 'next/image'
import { Textarea } from './ui/textarea/textarea'
import { Button } from './ui/button/button'
import Messages from './Messages'
import MessageInput from './MessageInput';
import { Typography } from './ui/typography/typography';
import SpotifyEmbed from './SpotifyEmbed';
import { PostsProps } from '@/utils/types/posts';
import { Separator } from './ui/separator/separator';

export default function Wall({ posts }: PostsProps) {
    return (
        <>
            <div className='flex justify-center md:h-dvh md:overflow-hidden'>
                <div className='flex min-h-0 flex-col p-5'>
                    <Card className='mb-3 shrink-0'>
                        <CardContent>
                            <p className='text-xl text-green text-center'> ✩°｡ Joy's Wall ⋆⸜ 🎧✮</p>
                        </CardContent>
                    </Card>
                    <div className='flex min-h-0 flex-1 flex-col md:gap-3 md:flex-row'>
                        <div className='max-w-180 flex-2 flex flex-col gap-3'>
                            <Card>
                                <CardContent>
                                    <Image loading="eager" width={500} height={500} src="/pfp2.jpg" alt='My Photo' className='w-full' />
                                </CardContent>
                                <CardFooter className='flex flex-col items-center'>
                                    <span className='uppercase text-xl'>Joylynne Esportuno</span>
                                    <span className='text-green'>Full-Stack Web Developer</span>
                                    <p className='text-center text-sm opacity-40'>"Always learning."</p>
                                </CardFooter>
                            </Card>
                            <SpotifyEmbed />
                        </div>
                        <div className='flex gap-5 min-h-0 md:flex-5 flex-col md:overflow-hidden md:h-full md:gap-3'>
                            <Separator/>
                            <Separator label="TELL ME SOMETHING" />
                            <section className='mb-5 flex shrink-0 flex-col md:mt-0'>
                                <MessageInput />
                            </section>

                                <Separator />
                                <Separator label="MESSAGES" />
                            <section className='md:overflow-hidden'>
                                <Messages posts={posts} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
