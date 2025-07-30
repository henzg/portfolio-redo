import { Project } from '../data/project';
import Image from 'next/image';

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
                <Image 
                    src={project.image || '/placeholder.png'} 
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className='p-4'>
                <h3 className='card-title'>{project.title}</h3>
            </div>
        </div>
    );
}