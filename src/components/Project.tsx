import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faLink, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface ProjectDataProps {
    id: number,
    title: string,
    link: string,
    demo: string,
    github: string
}

export default function Project({ id, title, link, demo, github }: ProjectDataProps) {
    const [viewInfo, setViewInfo] = useState<boolean>(false);

    const projectLink = (link: string, icon: IconDefinition) => {
        return (
            <a target="_blank" href={link}><FontAwesomeIcon icon={icon} className={`mr-6 ${link === "" ? "hidden" : ""} hover:text-yellow-400`} /></a>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + id / 10 }}>
            <div className="flex items-center text-center mx-4 mb-1 cursor-pointer w-max" onClick={() => { setViewInfo(!viewInfo) }}>
                <h1 className="mr-4">{title}</h1>
                <FontAwesomeIcon icon={faCaretRight} className={`mr-4 ${viewInfo ? "rotate-180" : ""} duration-500`} />
                <AnimatePresence>
                    {viewInfo &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1 }}>
                            {projectLink(github, faGithub)}
                            {projectLink(demo, faYoutube)}
                            {projectLink(link, faLink)}
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
}