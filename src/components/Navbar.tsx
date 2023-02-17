import { Link } from 'react-scroll';

const navButtons = (name: string, scrollName: string) => {
    return (
        <Link to={scrollName} smooth duration={1000} className="text-lg text-yellow-400 text-xl hover:-translate-y-1 hover:text-yellow-300 duration-150 ">{name}</Link>
    )
}

export default function Navbar() {
    return (
        <section className="absolute flex justify-end w-full p-6">
            <main className="mx-auto flex justify-between w-96">
                {navButtons("Skills", "skills")}
                {navButtons("Projects", "projects")}
                {navButtons("Contact", "contact")}
            </main>
        </section>
    )
}