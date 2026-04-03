type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Nelson Mandela University',
    title: 'Diploma in Information Technology - Software Development',
    start: 'Feb 2024',
    end: 'Present', // Update this to your expected graduation month, or use 'Present'
    link: 'https://www.mandela.ac.za/',
    id: 'edu1',
  },
  {
    company: 'Microsoft Certified',
    title: 'AZ-900: Azure Fundamentals',
    start: 'April 2026', 
    end: 'Apr 2026', 
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    id: 'cert-az900',
  },
  {
    company: 'Microsoft',
    title: 'Back-End Developer Professional Certificate',
    start: 'Jan 2026', // Update to the month you started
    end: 'Apr 2026',    // If finished, change to the month you got the certificate
    link: '#', 
    id: 'cert1',
  },
  {
    company: 'Amazon Web Services (AWS)',
    title: 'Architecting Solutions on AWS',
    start: 'Feb 2026', 
    end: 'Apr 2026',
    link: '#', 
    id: 'cert2',
  },
  {
    company: 'Microsoft Applied Skills',
    title: 'Azure Cloud-Native Apps & SQL Database',
    start: 'Mar 2026', // Update month
    end: 'Apr 2026',
    link: '#', 
    id: 'cert3',
  },
  {
    company: 'Microsoft Applied Skills',
    title: 'Deploy & Configure Azure Monitor',
    start: 'Mar 2026', // Update month
    end: 'Apr 2026',
    link: '#', 
    id: 'cert4',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '.NET & C# Development',
    description: 'Building reliable backend logic and scalable APIs using the latest .NET features.',
    link: '#', 
    uid: 'stack-1',
  },
  {
    title: 'Data Persistence & Caching',
    description: 'Managing data across SQL Server, PostgreSQL, and MongoDB using EF Core and Dapper, backed by Redis and SQL Server caching.',
    link: '#',
    uid: 'stack-2',
  },
  {
    title: 'Cloud (Azure & AWS)',
    description: 'Deploying cloud-native apps with Azure Container Apps and architecting resilient AWS solutions.',
    link: '#',
    uid: 'stack-3',
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Managing Linux environments and automating deployments using Docker, CI/CD pipelines, and Azure Bicep for IaC.',
    link: '#',
    uid: 'stack-4',
  },
  {
    title: 'Automated Testing (xUnit)',
    description: 'Ensuring system reliability through Unit and Integration testing to maintain high code quality.',
    link: '#',
    uid: 'stack-5',
  },
  {
    title: 'Python & Data Analysis',
    description: 'Leveraging Python and Pandas for data-driven projects, with an active focus on scalable data processing.',
    link: '#',
    uid: 'stack-6',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lusandadotnet',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/lusandan24',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lusandan',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/lusandan24',
  },
]

export const EMAIL = 'lusandandlovu0500@gmail.com'
