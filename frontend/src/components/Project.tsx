"use client"
import { useState } from 'react';
import { projects, Project } from '../data/project';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section className="py-12 px-2 sm:px-4 md:px-16 flex flex-col items-center">
            <h2
                className="text-5xl md:text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-[var(--color-accent-coral)] via-[#ffd8b0] to-[var(--color-primary-dark)] bg-clip-text text-transparent"
                style={{ textShadow: '0 2px 8px rgba(44,44,44,0.12)' }}
            >
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl px-0 sm:px-2">
                { projects.map((project, i ) => (
                    <ProjectCard key={i} project={project} onClick={() => setSelected(project)} />
                ))}
            </div>
            {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}