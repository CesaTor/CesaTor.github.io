export interface Project {
    name: string
    desc: string
    lang: string
    stars: number
    forks: number
    url: string
    icon: string
    color: string
}

export interface Particle {
    style: {
        width: string
        height: string
        left: string
        top: string
        animation: string
        opacity: number
    }
}
