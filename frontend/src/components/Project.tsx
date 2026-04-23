"use client"
import { useState } from 'react';
import { projects, Project } from '../data/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section className="dot-grid py-16 px-2 sm:px-4 md:px-16 flex flex-col items-center">
            <h2
                className="section-fade text-5xl md:text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-[var(--color-accent-coral)] via-[var(--color-primary)] to-[var(--color-text-light)] bg-clip-text text-transparent"
            >
                Projects
            </h2>
            <div className="section-fade grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-0 sm:px-2">
                { projects.map((project) => (
                    <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
                ))}
            </div>
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
