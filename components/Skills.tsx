import React from 'react'
import { Badge } from './ui/badge/badge'

export default function Skills() {
    const skills = [
        {id: "html", label: "HTML"},{id: "css", label: "CSS"}, {id: "javascript", label: "JavaScript"},
        {id: "typescript", label: "TypeScript"}, {id: "react", label: "React"}, {id: "nextjs", label: "Next.js"},
        {id: "tailwindcss", label: "Tailwind CSS"}, {id: "postgresql", label: "PostgreSQL"},{id: "supabase", label: "Supabase"},
        {id: "git", label: "Git"}, {id: "github", label: "Github"}
    ]
  return (
    <div className='flex md:justify-start justify-center flex-wrap gap-3'>
        {skills.map((skill)=>(
            <Badge key={skill.id} className='font-pixel text-md text-retro-secondary border-retro-secondary'>{skill.label}</Badge>
        ))}
    </div>
  )
}
