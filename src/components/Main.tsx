import Background from './blurbg.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconButton = (icon: any, margin: string) => {
    return (
        <button className={`text-yellow-400 text-base sm:text-2xl ${margin}`}><FontAwesomeIcon icon={icon} /></button>
    )
}

export default function Main() {
    return (
        <section className="bg-no-repeat min-h-screen bg-cover bg-purple-900 text-gray-100" style={{ backgroundImage: `url(${Background})` }}>
            <main className="sm:text-5xl text-3xl flex flex-col h-screen justify-center max-w-5xl mx-auto px-4 lg:px-0 font-bold">
                <h1>Hi, I'm <span className="text-yellow-400">Daniel</span></h1>
                <h1 className="sm:text-3xl text-xl mt-3">I'm a Full Stack Developer</h1>
                <div className="">
                    {iconButton(faGithub, "mr-8 lg:mr-16")}
                    {iconButton(faLinkedin, "mr-8 lg:mr-16")}
                    {iconButton(faFilePdf, "")}
                </div>
            </main>
        </section>
    )
}