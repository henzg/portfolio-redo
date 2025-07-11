import { Project } from '../data/project';

type Props = {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
    return (
        <div className='modal'>
            <div className='modal-content relative'>
                <button
                    onClick={onClose}
                    className = "modal-close absolute top-4 right-4 text-3xl font-bold focus:outline-none transition-transform duration-150 hover:scale-125 hover:text-[var(--color-accent-coral)]"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">{project.title}</h2>
                <p className="mb-2 text-[var(--color-accent-black)]">{project.description}</p>
                <p className="mb-4 text-[var(--color-text-secondary)]">
                    <strong>Tech Stack: </strong> {project.techStack.join(', ')}
                </p>
                <div className="flex gap-4 mt-2">
                    {project.repo && (
                        <a 
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition shadow"
                        >
                            View Code
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href = {project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='btn-secondary font-semibold shadow'
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}