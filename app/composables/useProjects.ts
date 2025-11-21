import type { Project } from '~/types'

export const useProjects = () => {
    const projects: Project[] = [
        {
            name: 'board-games-organizer',
            desc: 'Basic BoardGames collection organizer written in Flutter.',
            lang: 'Dart',
            stars: 0,
            forks: 0,
            url: 'https://github.com/CesaTor/board-games-organizer',
            icon: 'i-simple-icons-flutter',
            color: 'text-blue-400'
        },
        {
            name: 'trackus',
            desc: 'Todoist clone written in Flutter.',
            lang: 'Dart',
            stars: 0,
            forks: 1,
            url: 'https://github.com/CesaTor/trackus',
            icon: 'i-simple-icons-flutter',
            color: 'text-blue-400'
        },
        {
            name: 'login_template',
            desc: 'Flutter Login Template using Strapi as backend for managing users.',
            lang: 'Dart',
            stars: 4,
            forks: 0,
            url: 'https://github.com/CesaTor/login_template',
            icon: 'i-simple-icons-flutter',
            color: 'text-blue-400'
        },
        {
            name: 'JourneyDiary2MD',
            desc: "Convert journey.cloud diary's JSON to a Obsidian/Logseq friendly markdown.",
            lang: 'Go',
            stars: 1,
            forks: 0,
            url: 'https://github.com/CesaTor/JourneyDiary2MD',
            icon: 'i-simple-icons-go',
            color: 'text-cyan-400'
        },
        {
            name: 'ct_journal',
            desc: 'Simple and basic journaling app in flutter.',
            lang: 'Dart',
            stars: 0,
            forks: 0,
            url: 'https://github.com/CesaTor/ct_journal',
            icon: 'i-simple-icons-flutter',
            color: 'text-blue-400'
        }
    ]

    return {
        projects
    }
}
