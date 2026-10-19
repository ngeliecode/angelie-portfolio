export const projects = [
  {
    id: 1,
    title: 'CV',
    technologies: ['HTML', 'CSS'],
    description:
      'Ett digitalt CV som jag har kodat med HTML och CSS. Jag tog inspiration av designen från en befintlig CV-mall. Anpassades till A4-format och exporterades till PDF.',
    image: '/images/resume-img.jpg',
    liveUrl: '/cv-angelie-angman.pdf',
  },
  {
    id: 2,
    title: 'Books API',
    technologies: [
      'Express',
      'MongoDB',
      'Node.js',
      'TypeScript',
      'CSS',
      'HTML',
    ],
    description:
      'En fullstackapplikation utvecklad som en del av kursen API-utveckling. Användare kan utforska böcker, logga in, lägga till böcker och administrera sina konton. Backend byggdes med Node.js, Express och MongoDB, med fokus på API-utveckling, autentisering och datahantering.',
    image: '/images/books-api.jpg',
    liveUrl: 'https://api-assignment-2-eosin.vercel.app/',
    githubLink: 'https://github.com/ngeliecode/api-assignment-2',
  },
  {
    id: 3,
    title: 'Into Orbit',
    technologies: ['JavaScript', 'SCSS', 'HTML'],
    description:
      'En webbplats för rymdturism, utvecklad utifrån en Figma-design framtagen av en annan grupp. Fokus låg på att återskapa designen med HTML och CSS, samt skapa ett responsivt gränssnitt. Vi implementerade även enklare interaktivitet med JavaScript.',
    image: '/images/into-orbit.jpg',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-grafiska-verktyg-moodboard/',
    githubUrl: 'https://github.com/ngeliecode/into-orbit',
  },
  {
    id: 4,
    title: 'Mars Bound Marauders',
    technologies: ['Vite', 'TypeScript', 'CSS', 'HTML'],
    description:
      'Ett digitalt escape room-spel utvecklat i grupp under kursen Agila metoder. Spelaren löser sex digitala utmaningar för att knäcka lösenordet som låser upp portalen. Jag ansvarade för att utveckla en av utmaningarna samt bidrog till projektets gemensamma utveckling',
    image: '/images/marauders.jpg',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-mars-bound-marauders/',
    githubUrl: 'https://github.com/ngeliecode/marauders-escape-room',
  },
  {
    id: 5,
    title: 'Ett mini projekt',
    technologies: ['HTML', 'SCSS', 'TypeScript'],
    description:
      'Ett interaktivt mini-projekt där jag experimenterade med CSS-animationer. Med en knapptryckning startar användaren upplevelsen och får ta del av en animerad visuell miljö. Visionen var att skapa en interaktiv miljö där användaren styr vad som händer via knappval.',
    image: '/images/animation.jpg',
    liveUrl: 'https://my-mini-project-snowy.vercel.app/',
  },
  {
    id: 6,
    title: 'Budgetkollen',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Vite'],
    description:
      'En enkel budgetapplikation där användaren kan registrera inkomster och utgifter, kategorisera dem och få en automatiskt beräknad balans. Datan sparas i webbläsarens localStorage för att finnas kvar mellan sidladdningar.',
    image: '/images/budgetkollen.jpg',
    liveUrl:
      'https://medieinstitutet.github.io/fed25d-js-inl-2-budget-app-ngeliecode/',
  },
]
