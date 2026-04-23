import { Project } from '../data/project';
import Image from 'next/image';

type Props = {
    project: Project;
    onClick: () => void;
};

export default function ProjectCard({ project, onClick}: Props) {
    return (
        <button
            onClick={onClick}
            className="card cursor-pointer bg-[var(--color-accent-cream)] hover:scale-105 hover:shadow-xl transition-transform duration-200 w-full text-left flex flex-col"
            style={{ minHeight: 260 }}
        >
            <div className="overflow-hidden rounded-t-xl shadow-sm border-b border-[var(--color-card-border)]">
                <Image
                    src={project.image || '/placeholder.png'}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="card-title mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </button>
    );
}
