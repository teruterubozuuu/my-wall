import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card/card'
import { Separator } from './ui/separator/separator'
import TodaysPicks from './TodaysPicks'


export default function MarketPlace() {
    return (
        <div className='flex justify-center md:h-full md:min-h-0 md:overflow-hidden'>
            <div className='flex h-full min-h-0 w-full flex-col'>
                <Card className='mb-3 shrink-0'>
                    <CardContent>
                        <p className='text-xl text-green text-center'> ✩°｡ Marketplace ⋆⸜ ✮</p>
                    </CardContent>
                </Card>
                <div className='flex min-h-0 flex-1 flex-col md:gap-3 md:flex-row'>
                    <div className='flex-2 flex flex-col gap-3 md:min-h-0'>
                        <Card>
                            <CardContent>
                                <p>Categories</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex min-h-0 md:flex-5 flex-col gap-5 overflow-y-auto md:overscroll-contain pr-1 md:h-full md:gap-3">
                        <Separator />
                        <Separator label="Today's Picks" />

                        <section className="mb-5 shrink-0">
                           <TodaysPicks/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
