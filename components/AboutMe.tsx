import React from 'react'
import { Panel, PanelContent } from './ui/panel/panel'

export default function AboutMe() {
  return (
                  <Panel>
                    <PanelContent>
                        <p className='font-pixel'>
                            Hey there, <span className='text-green'>I'm Joy! </span><br/><br/>
                            An emerging web developer with hands-on experience building full-stack projects using React, Next.js, TypeScript, and Supabase. I focus on crafting polished interfaces using Tailwind CSS and shadcn/ui. I am passionate about clean code, continuous learning, and solving practical problems in a team environment.
                            <br/><br/>
                            If you wish to reach out, you can email me at <span className='text-green'> joylynnegrace@gmail.com</span>
                        </p>
                    </PanelContent>
                </Panel>
  )
}
