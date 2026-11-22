import React from 'react'
import { Panel, PanelContent, PanelFooter, PanelHeader, PanelTitle } from './ui/panel/panel'
import Image from 'next/image'
import { Badge } from './ui/badge/badge'

export default function Projects() {
    const projects = [
        {
            id: "visual-canvas", 
            label: "Visual Canvas", 
            description: "This project is the first major feature I developed for WyzLab Solutions. Its main purpose is to provide users a way to visually organize their scenarios or the content of their quest/course." ,
            image: "/visual-canvas.png",
            stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Tailwind CSS", "shadcn/ui"]
        }, 
        {
            id: "the-hunt", 
            label: "The Hunt",
            description: "The Hunt is a job application tracker where you can manually input necessary job details, or provide the link of the job posting and let the system automatically fill it for you.", 
            image: "/the-hunt.png",
            stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Tailwind CSS", "shadcn/ui"]
        }, 
        {
            id: "quester", 
            label: "Quester", 
            description: "Quester is a gamified game tracker where users can track their backlogged, currently playing, and completed games.",
            image: "/quester.png",
            stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Tailwind CSS", "pxlkit"]
        },
        {
            id: "tic-tac-toe",  
            label: "Tic-Tac-Toe", 
            description: "Tic-Tac-Toe is a fun project that I developed to play a tic-tac-toe game whenever I'm bored with friends. It introduces a scoring system that accumulate points when either player wins a round.",
            image: "/tic-tac-toe.png",
            stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "pxlkit"]
        }
    ]
  return (
    <div className='flex flex-col gap-3 pb-10'>
       {projects.map((project)=>(
        <Panel key={project.id}>
            <PanelHeader>
                <PanelTitle>{project.id}</PanelTitle>
            </PanelHeader>
            <PanelContent className='flex md:flex-row flex-col gap-3'>
                <Image width={500} height={500} src={project.image} alt="Project Image"/>
                <div>
                    <p className='font-bold uppercase text-green'>{project.label}</p>
                    <p className='font-pixel'>{project.description}</p>
                </div>
            </PanelContent>
            <PanelFooter className='flex flex-wrap'>
                {project.stack?.map((stack)=>(
                    <Badge key={stack} className='font-pixel text-retro-gold border-retro-gold'>{stack}</Badge>
                ))}
            </PanelFooter>
        </Panel>
       ))}
    </div>
  )
}
