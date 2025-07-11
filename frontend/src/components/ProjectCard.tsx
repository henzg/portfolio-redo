import Image from 'next/image';
import { Project } from '../data/project';

type Props = {
    project: Project;
    onClick: () => void;
};

export default function ProjectCard({ project, onClick}: Props) {
    return (
        <div
            onClick={onClick}
            className="card cursor-pointer bg-[var(--color-accent-cream)] hover:scale-105 hover:shadow-xl transition-transform duration-200"
            style={{ minHeight: 260 }}
        >
            <div className="overflow-hidden rounded-t-xl shadow-sm border-b border-[var(--color-card-border)]">
                <img src={project.image} className="w-full h-48 object-cover" alt={project.title} />
            </div>
            <div className='p-4'>
                <h3 className='card-title'>{project.title}</h3>
            </div>
        </div>
    );
}