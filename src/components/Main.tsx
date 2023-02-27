import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectData } from './ProjectData'
import { motion } from 'framer-motion'
import Project from './Project'

export default function Main() {
    const iconButton = (icon: any, margin: string, link: string) => {
        return (
            <a target="_blank" href={link} className={`text-yellow-400 text-base sm:text-2xl hover:text-yellow-300 duration-150 ${margin}`}><FontAwesomeIcon icon={icon} /></a>
        )
    }

    const projectValues = Object.entries(projectData);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}>
            <section className="min-h-screen">
                <main className="sm:text-5xl text-3xl flex flex-col sm:flex-row h-screen sm:justify-between justify-center items-center max-w-6xl mx-auto px-4 lg:px-0 font-bold ">
                    <div className="flex flex-col">
                        <h1>Hi, I'm <span className="text-yellow-400">Daniel</span></h1>
                        <h1 className="sm:text-3xl text-xl mt-3">I'm a Full Stack Developer</h1>
                        <div className="">
                            {iconButton(faGithub, "mr-8 lg:mr-16", "https://github.com/jum-w")}
                            {iconButton(faLinkedin, "mr-8 lg:mr-16", "https://www.linkedin.com/in/daniel-gamboa-gray-087401225/")}
                            {iconButton(faFilePdf, "", "https://drive.google.com/file/d/12m7H46DnWsM7x9JUABvs0ht-9LViiw7y/view?usp=sharing")}
                        </div>
                    </div>
                    <div className="text-3xl w-64 lg:w-96">
                        <h1 className="my-4">projects</h1>
                        <div className="text-lg font-normal p-2 border-l border-yellow-400">
                            {projectValues.map(([key, projects]) =>
                                projects.map((project) =>
                                    <Project key={key} {...project} />
                                )
                            )}
                        </div>
                    </div>
                </main>
            </section>
        </motion.div>
    )
}