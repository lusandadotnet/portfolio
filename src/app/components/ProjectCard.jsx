export default function ProjectCard({ item, heading = "h3" }) {
    const TitleTag = heading === "h2" ? "h2" : "h3";
    const inner = (
        <div className="flex flex-col gap-2 justify-between">
            <div className="flex items-center justify-between">
                <TitleTag className="font-semibold text-lg">{item.title}</TitleTag>
                <svg
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                </svg>
            </div>
            <p className="text-base-content/80 text-sm sm:text-base">
                {item.description}
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-1">
                {item.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs border-base-content/25 font-medium text-base-content/70 border rounded-md px-4"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    const className =
        "group p-4 border-2 border-base-content/20 hover:border-primary/50 rounded-2xl hover:scale-102 transition-transform duration-200";

    if (!item.link) {
        return (
            <div className={`${className} cursor-default`} role="article">
                {inner}
            </div>
        );
    }

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} cursor-pointer`}
        >
            {inner}
        </a>
    );
}
