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
            https: "//rl-picks-jum-w.vercel.app",
            demo: 'https://youtu.be/DXYstso5gY0',
            github: 'https://github.com/jum-w/RLPicks'
        }
    ],
    MentalHealthWebApp: [
        {
            id: 2,
            title: "Mental Health App",
            link: '',
            demo: 'https://youtu.be/KyHbuJxYY_Q',
            github: ''
        }
    ],
    CatShop: [
        {
            id: 3,
            title: "Cat Shop",
            link: 'https://cat-shop-iota.vercel.app',
            demo: '',
            github: 'https://github.com/jum-w/Cat-Shop'
        }
    ],
}
