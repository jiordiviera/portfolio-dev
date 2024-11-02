"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Laravel Log Cleaner",
        description:
            "Un package Laravel qui automatise le nettoyage des fichiers de log pour maintenir un espace de stockage optimal. Compatible avec les versions de Laravel de 7 à 11, il permet de purger les logs en fonction d’une durée spécifiée.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/path/to/laravel-log-cleaner-image.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Aperçu du package Laravel Log Cleaner"
                />
            </div>
        ),
    },
    {
        title: "Portfolio JD Devs",
        description:
            "Un site personnel pour partager des projets, articles, et les dernières avancées professionnelles. Utilise Next.js, Tailwind CSS et Framer Motion pour une expérience utilisateur fluide et moderne.",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src="https://img.shields.io/packagist/dt/jiordiviera/laravel-log-cleaner?style=for-the-badge"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Aperçu du portfolio JD Devs"
                />
            </div>
        ),
    },
    {
        title: "Livewire Task Automator",
        description:
            "Un package Laravel conçu pour accélérer le développement en automatisant la création de modèles, composants Livewire, vues, et routes. Parfait pour les développeurs cherchant à optimiser leur workflow.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Livewire Task Automator
            </div>
        ),
    },
    {
        title: "API Portfolio",
        description:
            "Une API RESTful pour récupérer les derniers articles et mises à jour de mon portfolio, facilitant l’intégration de mes publications dans d’autres plateformes comme GitHub.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                API Portfolio
            </div>
        ),
    },
];
export const MyProjects = () => {
    return (
        <div>
            <StickyScroll content={content} />
        </div>
    );
};
