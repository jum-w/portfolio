import Skill from "./Skill"
import { frontEnd, backEnd, tools } from "./SkillInfo"

export default function Projects() {
    return (
        <section className="min-h-screen bg-cover bg-no-repeat bg-slate-900" id="skills">
            <main>
                <div className="flex justify-center items-center text-3xl font-bold border-b p-2 mb-12 border-gray-800">
                    <h1>My Skills</h1>
                </div>
                <div className="flex flex-col xl:flex-row px-4 items-center justify-center w-auto">
                    <Skill {...frontEnd} />
                    <Skill {...backEnd} />
                    <Skill {...tools} />
                </div>
            </main>
        </section>
    )
}