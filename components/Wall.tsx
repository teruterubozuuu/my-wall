import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card/card'
import Image from 'next/image'
import { Panel, PanelContent, PanelFooter, PanelHeader } from './ui/panel/panel'
import { Typography } from './ui/typography/typography'
import { Badge } from './ui/badge/badge'
import { Textarea } from './ui/textarea/textarea'
import { Button } from './ui/button/button'

export default function Wall() {
    return (
        <>
            <div className='flex justify-center '>
                <div className='p-5'>
                    <Card className='mb-3'>
                        <CardContent>
                            <p className='text-xl text-green'>Welcome to My Wall</p>
                        </CardContent>
                    </Card>
                    <div className='flex md:flex-row flex-col gap-3'>
                        <Card className='max-w-180 flex-2'>
                            <CardContent>
                                <Image width={500} height={500} src="/pfp2.jpg" alt='My Photo' className='w-full' />
                            </CardContent>
                            <CardFooter className='flex flex-col'>
                                <span className='uppercase text-xl'>Joylynne Esportuno</span>
                                <span className='text-green'>Full-Stack Web Developer</span>
                            </CardFooter>
                        </Card>
                        <section className='flex flex-4 flex-col gap-3'>
                            <div className='flex flex-col gap-3'>
                                <Textarea
                                    placeholder="What's on your mind?"
                                />
                                <div className='flex justify-end'>
                                    <Button variant="EXEC" className='w-fit'>Share</Button>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
