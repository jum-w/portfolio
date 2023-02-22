import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons"

interface SkillsProps {
    icon: IconDefinition,
    title: string,
    skills: string[]
}

export default function Skill({ icon, title, skills }: SkillsProps) {
    return (
        <div className="bg-slate-800 shadow-xl flex w-72 rounded-md flex-col h-96 mx-2 sm:mx-12">
            <div className="flex items-center justify-center flex-col my-8">
                <FontAwesomeIcon icon={icon} className="text-3xl" />
                <h1 className="mt-6 text-xl font-bold">{title}</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {skills.map((val, index) => (
                    <p className="px-3 py-1 m-1.5 min-w-max border-2 shadow-xl border-yellow-400 hover:bg-slate-700 hover:translate-x-1 duration-150" key={index}>
                        {val}
                    </p>
                ))}
            </div>
        </div>
    )
}