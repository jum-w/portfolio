import Background from './blurbg2.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
    const iconButton = (icon: any, margin: string, link: string) => {
        return (
            <a href={link} className={`text-yellow-400 text-base sm:text-2xl hover:text-yellow-300 duration-150 ${margin}`}><FontAwesomeIcon icon={icon} /></a>
        )
    }

    return (
        <section className="bg-no-repeat min-h-screen bg-cover" style={{ backgroundImage: `url(${Background})` }}>
            <main className="sm:text-5xl text-3xl flex flex-col h-screen justify-center max-w-5xl mx-auto px-4 lg:px-0 font-bold">
                <h1>Hi, I'm <span className="text-yellow-400">Daniel</span></h1>
                <h1 className="sm:text-3xl text-xl mt-3">I'm a Full Stack Developer</h1>
                <div className="">
                    {iconButton(faGithub, "mr-8 lg:mr-16", "https://github.com/jum-w")}
                    {iconButton(faLinkedin, "mr-8 lg:mr-16", "https://www.linkedin.com/in/daniel-gamboa-gray-087401225/")}
                    {iconButton(faFilePdf, "", "")}
                </div>
            </main>
        </section>
    )
}