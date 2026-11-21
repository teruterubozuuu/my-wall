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
            <div className='flex justify-center'>
                <div className='p-5'>
                    <Card className='mb-3'>
                        <CardContent>
                            <p className='text-xl text-green text-center'> ✩°｡ Joy's Wall ⋆⸜ 🎧✮</p>
                        </CardContent>
                    </Card>
                    <div className='flex md:flex-row flex-col gap-3'>
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
                        <div className='flex flex-5 flex-col md:gap-3 gap-5'>
                            <Separator className='md:mt-0 mt-5'/>
                            <Separator label="TELL ME SOMETHING" />
                            <section className='flex flex-col mb-5 md:mt-0'>
                                <MessageInput />
                            </section>

                                <Separator />
                                <Separator label="MESSAGES" />
                            <section>
                                <Messages posts={posts} />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
