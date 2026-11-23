import { PixelTimeline, PixelTimelineItem } from '@pxlkit/ui-kit';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './ui/panel/panel';

export default function Experiences() {
    return (
        <Panel notch='md'>
            <PanelHeader>
                <PanelTitle className='text-bone/80!'>Software Developer Intern</PanelTitle>
            </PanelHeader>
            <PanelContent>
                <PixelTimeline active={0}>
                    <PixelTimelineItem
                        label="WyzLab Solutions"
                        time=" Jan 2026 - Jun 2026 "
                        className="        [&>div>div>span:first-child]:text-[15px]! [&>div>div>span:first-child]:text-bone!
        [&>div>div>span:nth-child(2)]:text-md! [&>div>div>span:nth-child(2)]:text-bone/80! **:data-pxl-bullet:bg-green! **:data-pxl-bullet:border-green!"
                    >
                        <p className='font-pixel text-bone/70'>
                            Completed 945 hours of hands-on development
                            in a collaborative team environment, where I developed and
                            implemented end-to-end features for a production-level web
                            application using Next.js and Supabase. I built responsive,
                            user-friendly interfaces with Tailwind CSS and shadcn/ui,
                            integrated backend functionalities such as authentication,
                            data validation, and REST API communication using Clerk and
                            Zod, and collaborated with team members to troubleshoot
                            issues, optimize performance, and deliver features on
                            schedule.
                        </p>
                    </PixelTimelineItem>
                </PixelTimeline>
            </PanelContent>
        </Panel >
    )
}
