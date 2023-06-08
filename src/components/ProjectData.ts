interface projectData {
    id: number,
    title: string
    link: string,
    demo: string,
    github: string
}

export const projectData: Record<string, projectData[]> = {
    RocketPicks: [
        {
            id: 1,
            title: "Rocket Picks",
            link: "https://www.rocketpicks.xyz",
            demo: 'https://youtu.be/DXYstso5gY0',
            github: 'https://github.com/jum-w/RLPicks'
        }
    ],
    HoursCalculator: [
        {
            id: 2,
            title: "Hours Calculator",
            link: "https://jum.lol",
            demo: '',
            github: 'https://github.com/jum-w/jum.lol'
        }
    ],
    MentalHealthWebApp: [
        {
            id: 3,
            title: "Mental Health App",
            link: '',
            demo: 'https://youtu.be/KyHbuJxYY_Q',
            github: ''
        }
    ],
}
