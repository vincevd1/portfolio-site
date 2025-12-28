import { ArrowUpRight } from 'lucide-react';

export default function ExperienceItem({
    startString,
    endString,
    title,
    description,
    image,
    skills,
    href,
}: {
    startString?: string;
    endString?: string;
    title: string;
    description?: string;
    image?: string;
    skills?: string[];
    href?: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="norefferer noopener"
            className="block relative group mb-10 lg:group-hover/list:opacity-65 hover:opacity-100!"
        >
            <div className="absolute rounded-md -inset-x-4 -inset-y-4 transition motion-reduce:transition-none lg:group-hover:bg-slate-900/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="relative z-10 gap-10 flex">
                <div className="w-[30%] shrink-0">
                    {startString && (
                        <div className="text-sm tracking-wider">
                            <span className="block xl:inline">{startString}</span> —{' '}
                            <span className="block xl:inline">{endString ?? 'PRESENT'}</span>
                        </div>
                    )}
                    {image && <img src={image} alt={title} className="w-full" />}
                </div>
                <div>
                    <div className="font-bold mb-1 group-hover:text-sky-500">
                        {title}
                        {href && (
                            <div className="inline-block w-2 ml-2">
                                <ArrowUpRight
                                    size={15}
                                    className="-translate-x-1 translate-y-1 transition-transform duration-300
                   group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </div>
                        )}
                    </div>
                    <div className="text-sm mb-4">{description}</div>
                    <div className="flex flex-wrap gap-2">
                        {skills &&
                            skills.map((skill) => (
                                <div className="bg-sky-500/25 text-sky-500 text-sm flex items-center py-1 px-3 rounded-full">
                                    {skill}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </a>
    );
}
