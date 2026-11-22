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
import Wall from './Wall';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs/tabs';
import Portfolio from './Portfolio';

export default function MainPage({ posts }: PostsProps) {
    return (
        <div className='flex justify-center p-5 md:h-full md:min-h-0 md:overflow-hidden'>
            <div className='flex w-full max-w-360 min-h-0 flex-col md:h-full'>
                <div className='flex w-full min-h-0 flex-col md:flex-1 md:gap-3 md:flex-row'>
                    <div className='max-w-180 flex-2 flex flex-col gap-3 md:min-h-0 md:overflow-y-auto md:pr-1'>
                        <Card>
                            <CardContent>
                                <Image loading="eager" width={500} height={500} src="/pfp2.jpg" alt='My Photo' className='w-full object-cover' />
                            </CardContent>
                            <CardFooter className='flex flex-col items-center'>
                                <span className='uppercase text-xl'>Joylynne Esportuno</span>
                                <span className='text-green'>Full-Stack Web Developer</span>
                                <p className='text-center text-sm opacity-40'>"Always learning."</p>
                            </CardFooter>
                        </Card>
                        <SpotifyEmbed />
                    </div>

                    <Tabs defaultValue='portfolio' className='mx-auto w-full max-w-180 min-w-0 md:mx-0 md:w-auto md:max-w-none md:flex-5'>
                        <TabsList>
                            <TabsTrigger value="portfolio">
                                Portfolio
                            </TabsTrigger>
                            <TabsTrigger value="wall">
                                Joy's Wall
                            </TabsTrigger>
                        </TabsList>
                        <div className="flex w-full flex-col gap-5 pr-1 md:h-full md:min-h-0 md:gap-3 md:overflow-y-auto md:overscroll-contain">
                            <TabsContent value='portfolio' className='w-full'>
                                <Portfolio />
                            </TabsContent>
                            <TabsContent value='wall' className='w-full'>
                                <Wall posts={posts} />
                            </TabsContent>
                        </div>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}
