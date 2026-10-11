export const portfolio = {
  name: 'Joseph Clinton S',

  professionalTitle: 'Full Stack Developer',

  heroSummary:
    "I'm Joseph Clinton S, a Full Stack Developer focused on building modern, scalable and user-friendly web applications.",

  aboutSummary:
    "I'm Joseph Clinton S, a Full Stack Developer focused on building modern, scalable and user-friendly web applications. I enjoy turning ideas into reliable digital products using modern web technologies, with a strong focus on clean interfaces, robust backend systems and practical solutions.",

  primaryStack: 'MERN / Full Stack',

  contact: {
    email: 'josephclintonsahaya@gmail.com',
    phone: '7010189558',
  },

  socialLinks: {
    github: 'https://github.com/josephclintonsahaya-byte',
    linkedin: 'https://www.linkedin.com/in/joseph-clinton-35b50',
  },

  resumeUrl: '/resume.pdf',

  skills: [
    {
      title: 'Frontend',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'REST APIs',
      ],
    },
    {
      title: 'Database',
      items: [
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      title: 'Tools',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
      ],
    },
  ],

  experience: [
    {
      title: 'Full Stack Developer Intern',
      organization: 'VDart — Trichy',
      duration: '3 Months',
      description:
        'Worked on the Library Management System project as a Full Stack Developer and contributed to additional application development projects during the internship.',
    },
    {
      title: 'Full Stack Developer Intern',
      organization: 'Noviteck',
      duration: '3 Months',
      description:
        'Completed a 3-month internship focused on full-stack development and application development.',
    },
    {
      title: 'Full Stack Developer Intern',
      organization: 'Axlero Solutions',
      duration: 'Ongoing',
      type: 'Online Internship',
      stipend: '₹8,000',
      description:
        'Currently working as a Full Stack Developer Intern in an online internship, contributing to ongoing development work.',
    },
  ] as {
    title: string
    organization: string
    duration: string
    type?: string
    stipend?: string
    description: string
  }[],
}