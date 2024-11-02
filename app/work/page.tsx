import Image from "next/image";
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Suspense } from "react";
import Link from "next/link";
import { ProjectInterface } from "@/utils/types/projects";

export const metadata: Metadata = {
    title: 'Mes Réalisations',
}




const technologyColors: { [key: string]: string } = {
    'laravel': 'fill-red-600',
    'livewire': 'fill-purple-600',
    'tailwindcss': 'fill-cyan-400',
    'alpinejs': 'fill-blue-600',
    'bootstrap': 'fill-indigo-600',
    'gitlab': 'fill-orange-500',
    'react': 'fill-sky-500',
    'nextjs': 'fill-zinc-800',
    'typescript': 'fill-blue-700',
    'nodejs': 'fill-green-600',
    'default': 'fill-gray-500'
};

// Skeleton Loading Component
const ProjectSkeleton = () => (
    <Card className="animate-pulse">
        <Skeleton className="h-48 w-full" />
        <CardContent className="space-y-3 p-6">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex flex-wrap gap-2 mt-4">
                {[1, 2, 3].map((item) => (
                    <Skeleton key={item} className="h-6 w-20 rounded-full" />
                ))}
            </div>
        </CardContent>
    </Card>
);

// Technology Color Utility
const getTechnologyColor = (tech: string) => {
    const normalizedTech = tech.toLowerCase().trim();
    return technologyColors[normalizedTech] || technologyColors['default'];
};

// Fetch Projects with Error Handling
async function fetchProjects() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+'/projects', {
            next: { revalidate: 3600 }, // Cache for 1 hour
            cache: 'force-cache'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Projects Component
const ProjectsList = async () => {
    const projects = await fetchProjects();

    return (
        <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: ProjectInterface) => (
                <li key={project.id} className="group">
                    <div className="relative isolate transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden">
                        <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2] relative">
                            <Image
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                                src={'https://my.jd-devs.com'+project.media[0].original_url}
                                alt={project.name}
                                className="duration-500 w-full h-full object-cover
                                transition-all ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <Link
                            href={project.url}
                            target="_blank"
                            className="absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                            </svg>
                        </Link>
                        <div className="p-6">
                            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                <svg className="size-1.5 fill-primary" viewBox="0 0 6 6" aria-hidden="true">
                                    <circle cx="3" cy="3" r="3"></circle>
                                </svg>
                                {project.type}
                            </span>
                            <h3 className="mt-3 text-xl font-semibold leading-6 text-text group-hover:text-primary transition-colors duration-300">
                                <Link href={project.url} target="_blank" className="focus:outline-none">
                                    <span className="absolute inset-0" aria-hidden="true"></span>
                                    {project.name}
                                </Link>
                            </h3>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20"
                                    >
                                        <svg
                                            className={`size-1.5 ${getTechnologyColor(tech)}`}
                                            viewBox="0 0 6 6"
                                            aria-hidden="true"
                                        >
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default async function Page() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="max-w-2xl mx-auto text-center">
                    <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                        Projects
                    </h1>
                    <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 tracking-tight">
                        Over the years, I&#39;ve had the opportunity to work on a wide variety of projects, both personal and professional, which I&#39;ve either successfully completed or contributed my expertise to.
                    </p>
                </header>
                <div className="mt-16 sm:mt-20">
                    <Suspense fallback={
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <ProjectSkeleton key={item} />
                            ))}
                        </div>
                    }>
                        <ProjectsList />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
