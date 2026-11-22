import { Separator } from './ui/separator/separator'
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';

export default function Portfolio() {
    return (
        <div className=' flex flex-col gap-4 shrink-0'>
            <Separator />
            <Separator label="ABOUT ME" />
            <section>
                <AboutMe />
            </section>

            <Separator />
            <Separator label="skills" />
            <section>
                <Skills />
            </section>
            
            <Separator />
            <Separator label="Projects" />
            <section>
                <Projects/>
            </section>
        </div>
    )
}
