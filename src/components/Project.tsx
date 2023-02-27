import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faYoutube, } from "@fortawesome/free-brands-svg-icons"
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

    return (
        <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + id / 10 }}>
            <div className="flex items-center text-center mx-4 mb-1 cursor-pointer w-max" onClick={() => { setViewInfo(!viewInfo) }}>
                <h1 className="mr-4">{title}</h1>
                <FontAwesomeIcon icon={faCaretRight} className={`mr-4 ${viewInfo ? "rotate-180" : ""} duration-300`} />
                <AnimatePresence>
                    {viewInfo &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1 }}>
                            <a target="_blank" href={github}><FontAwesomeIcon icon={faGithub} className="mr-6 delay-150" /></a>
                            <a target="_blank" href={demo}><FontAwesomeIcon icon={faYoutube} className={`mr-6 ${demo === "" ? "hidden" : ""}`} /></a>
                            <a target="_blank" href={link}><FontAwesomeIcon icon={faLink} className={`${link === "" ? "hidden" : ""}`} /></a>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
}