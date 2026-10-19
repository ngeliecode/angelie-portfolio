export const projects = [
  {
    id: 1,
    title: 'CV',
    technologies: ['HTML', 'CSS'],
    description:
      'Ett digitalt CV som jag har kodat med HTML och CSS, med en design inspirerad av en annan förlaga.',
    image: '/images/resume-img.jpg',
    liveUrl: '/cv-angelie-angman.pdf',
  },
  {
    id: 2,
    title: 'Books API',
    technologies: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    description:
      'Detta var en gruppuppgift i kursen API-utveckling, där vi byggt ett Book API tillsammans med en klient som är lösenordsskyddat. Applikationen låter besökare bläddra bland böcker och skriva recensioner samt ger inloggade administratörer möjlighet att hantera användare och böcker.',
    image: '/images/books-api.jpg',
    liveUrl: 'https://api-assignment-2-eosin.vercel.app/',
    githubLink: 'https://github.com/ngeliecode/api-assignment-2',
  },
  {
    id: 3,
    title: 'Into Orbit',
    technologies: ['Sass'],
    description: 'Detta var en gruppuppgift i kursen Grafiska verktyg.',
    image: '/images/into-orbit.jpg',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-moodboard/',
    githubUrl: 'https://github.com/ngeliecode/into-orbit',
  },
  {
    id: 4,
    title: 'Mars Bound Marauders',
    technologies: ['TypeScript', 'Vite', 'HTML', 'CSS'],
    description:
      'Mars Bound Marauders är ett Escape Room-spel där användaren löser olika pussel. Det var vårt första grupparbete under utbildningen och genomfördes i kursen Agila metoder, där fokus låg på att arbeta agilt i team. Vi arbetade med Scrum och använde bland annat daily stand-ups, sprint planning, retrospectives och en backlog för att planera och följa upp arbetet.',
    image: '/images/marauders.jpg',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-mars-bound-marauders/',
    githubUrl: 'https://github.com/ngeliecode/marauders-escape-room',
  },
  {
    id: 5,
    title: 'Ett mini projekt',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'En litet projekt med en CSS animation.',
    image: '/images/animation.jpg',
    liveUrl: 'https://my-mini-project-snowy.vercel.app/',
  },
  {
    id: 6,
    title: 'Budgetkollen',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vite'],
    description:
      'En enkel budgetapplikation där användaren kan registrera inkomster och utgifter, kategorisera dem och få en automatiskt beräknad balans. Datan sparas i webbläsarens localStorage för att finnas kvar mellan sidladdningar. Projektet är utvecklat som en del av kursen JavaScript.',
    image: '/images/budgetkollen.jpg',
  },
]
