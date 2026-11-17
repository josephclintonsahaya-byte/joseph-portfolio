export const portfolio = {
  name: 'Joseph Clinton S',

  professionalTitle: 'Full Stack Developer',

  heroSummary:
    'I build practical web applications across the frontend, backend, and data layers, with a focus on clear interfaces and reliable workflows.',

  aboutSummary:
    'I am a full stack developer interested in building reliable web applications and solving practical problems. I enjoy working across React interfaces, APIs, and data-backed workflows, and I am looking to grow through meaningful software development work.',

  primaryStack: 'MERN / Full Stack',

  contact: {
    email: 'josephclintonsahaya@gmail.com',
    phone: '7010189558',
  },

  socialLinks: {
    github: 'https://github.com/josephclintonsahaya-byte',
    linkedin: 'https://www.linkedin.com/in/joseph-clinton-35b502260',
  },

  resumeUrl: '/resume.pdf',

  project: {
    name: 'Audit Trail Management System',
    repository: 'https://github.com/josephclintonsahaya-byte/audit_trail',
    description:
      'TrackFlow manages warehouses, products, inventory, and shipments. Its shipment workflow records domain events in an append-only Event Store, then reconstructs shipment state for history and queries.',
    features: [
      'Role-protected shipment and inventory workflows',
      'Shipment history with event replay and version-based reconstruction',
      'CQRS command and query routes with optimistic concurrency checks',
      'Transactional inventory transfer on shipment delivery',
    ],
    technologies: [
      'React',
      'Express 5',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Docker Compose',
    ],
  },

  skills: [
    {
      title: 'Programming Languages',
      items: [
        'JavaScript',
      ],
    },
    {
      title: 'Frontend',
      items: [
        'HTML5',
        'CSS3',
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

  education: {
    degree: 'B.E. Computer Science & Engineering',
    college: 'Kings College of Engineering, Pudukkottai',
    duration: '2022–2026',
    percentage: '75%',
  },

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
