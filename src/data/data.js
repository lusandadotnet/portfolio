/** Simple Icons (brand SVGs) — https://simpleicons.org/ */
const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

export const about = {
    name: "Lusanda Ndlovu",
    role: "Software Developer",
    tagline: "",
    about: "Cloud-native software developer specializing in .NET, Python and Azure. ALWAYS LEARNING.",
    email: "lusandandlovu0500@gmail.com",
    phone: "+27 76 262 2198",
    location: "Gqeberha, South Africa",
    linkedin: "https://www.linkedin.com/in/lusandan",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description:
        "Software developer specializing in .NET Core, Azure, REST APIs, Entity Framework, Python/MCP integrations, and SQL/Postgres—with automated testing and CI/CD on GitHub Actions.",
    keywords:
        "Lusanda Ndlovu, software developer, .NET developer, ASP.NET Core, Azure, C#, Python, MCP, Entity Framework, SQL Server, PostgreSQL, Redis, REST API, GitHub Actions, South Africa, Gqeberha",
};

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
};

export const skills = [
    { name: "C#", alt: "C# logo", icon: `${SI}/csharp.svg` },
    { name: ".NET", alt: ".NET logo", icon: `${SI}/dotnet.svg` },
    { name: "Python", alt: "Python logo", icon: `${SI}/python.svg` },
    { name: "TypeScript", alt: "TypeScript logo", icon: `${SI}/typescript.svg` },
    { name: "Azure", alt: "Microsoft Azure logo", icon: `${SI}/microsoftazure.svg` },
    { name: "Azure Functions", alt: "Azure Functions logo", icon: `${SI}/azurefunctions.svg` },
    { name: "ASP.NET Core", alt: "ASP.NET Core", icon: `${SI}/dotnet.svg` },
    { name: "SQL Server", alt: "Microsoft SQL Server logo", icon: `${SI}/microsoftsqlserver.svg` },
    { name: "PostgreSQL", alt: "PostgreSQL logo", icon: `${SI}/postgresql.svg` },
    { name: "Redis", alt: "Redis logo", icon: `${SI}/redis.svg` },
    { name: "FastAPI", alt: "FastAPI logo", icon: `${SI}/fastapi.svg` },
    { name: "Docker", alt: "Docker logo", icon: `${SI}/docker.svg` },
    { name: "Git", alt: "Git logo", icon: `${SI}/git.svg` },
    { name: "GitHub", alt: "GitHub logo", icon: `${SI}/github.svg` },
    { name: "GitHub Actions", alt: "GitHub Actions logo", icon: `${SI}/githubactions.svg` },
    { name: "VS Code", alt: "Visual Studio Code logo", icon: `${SI}/visualstudiocode.svg` },
    { name: "Visual Studio", alt: "Visual Studio logo", icon: `${SI}/visualstudio.svg` },
    { name: "Postman", alt: "Postman logo", icon: `${SI}/postman.svg` },
    { name: "OpenAPI", alt: "OpenAPI Initiative (Swagger) logo", icon: `${SI}/swagger.svg` },
    { name: "Next.js", alt: "Next.js logo", icon: `${SI}/nextdotjs.svg` },
    { name: "React", alt: "React logo", icon: `${SI}/react.svg` },
    { name: "Tailwind CSS", alt: "Tailwind CSS logo", icon: `${SI}/tailwindcss.svg` },
    { name: "pytest", alt: "pytest logo", icon: `${SI}/pytest.svg` },
];

export const certifications = [
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Microsoft Certified Backend Developer Professional",
];

export const socials = {
    github: "https://github.com/lusandadotnet",
    twitter: "https://twitter.com/sadahybrid",
    instagram: "https://www.instagram.com/sadahybrid",
    facebook: "https://www.facebook.com/sadahybrid",
    linkedin: "https://www.linkedin.com/in/lusandan",
};

export const projects = {
    pinProjects: [
        {
            title: "Serverless MCP Data Orchestrator",
            description:
                "Cross-platform pipeline: ASP.NET Core 10 Web API plus a Python FastMCP server so LLMs can query macroeconomic-style data over REST and MCP. Deployed on Azure App Service and Azure Functions with xUnit and pytest coverage across the stack.",
            tags: ["C#", "Python", "Azure", "SQL","MCP", "FastMCP", "ASP.NET Web API", "REST"],
            link: "https://github.com/lusandadotnet/serverless-mcp-orchestrator",
        },
        {
            title: "Learning Management System with AI Chatbot",
            description:
                ".NET 8 Web API with ASP.NET Identity, JWT, and Entity Framework Core against MS SQL Server—plus an AI chatbot deployed to Azure App Service for student support and course navigation.",
            tags: [".NET 8", "EF Core", "SQL Server", "Azure", "JWT"],
            link: "https://github.com/lusandadotnet/smart-learning-management-system",
        },
        
    ],
    otherProjects: [
        {
            title: "REST API design & OpenAPI",
            description:
                "Habitual OpenAPI-first workflows with Postman and Swagger for contract clarity across teams and automated consumers.",
            tags: ["OpenAPI", "Postman", "REST"],
            link: "",
        },
        {
            title: "Data layer patterns",
            description:
                "Relational modeling with EF Core and Dapper, Redis where caching wins, and Postgres or SQL Server depending on workload.",
            tags: ["EF Core", "Dapper", "Redis", "Postgres"],
            link: "",
        },
        {
            title: "CI/CD on GitHub",
            description:
                "Build and test pipelines with GitHub Actions for repeatable releases alongside Git-based collaboration.",
            tags: ["GitHub Actions", "Git", "GitHub"],
            link: "https://github.com/lusandadotnet",
        },
    ],
};

export const experience = [
    
];

export const education = [
    {
        school: "Nelson Mandela University",
        location: "Gqeberha, Eastern Cape",
        credential: "Diploma in Information Technology",
        focus: "Software Development",
        note: "Expected, Nov 2026",
    },
];

export const blogs = [
];
