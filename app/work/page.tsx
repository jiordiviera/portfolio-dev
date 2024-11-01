import Image from "next/image";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'My work',
}
export default function Page() {
    return (<>
        <section
             id="services" className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="max-w-2xl mx-auto text-center">
                    <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
                        Nos réalisations
                    </h1>
                    <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 tracking-tight">
                        Au fil du temps, nous avons eu l&#39;opportunité de travailler sur une grande diversité de projets,
                        qu&#39;ils
                        soient personnels ou professionnels, que nous avons menés à bien ou sur lesquels nous avons
                        apporté
                        notre expertise.
                    </p>
                </header>
                <div className="mt-16 sm:mt-20">
                    
                    <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        
                        <li className="group">
                            <div
                                className="relative isolate transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden">
                                <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                                    <Image width={100} height={100} loading="lazy" src="https://my.jd-devs.com/storage/8/01J9ENSFKS1EXA3KV42XBWTG0Y.png" alt="ITEC"
                                         className="duration-500 w-full h-full object-cover
                                    transition-all ease-in-out group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span
                                    className="absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                </svg>
                            </span>
                                <div className="p-6">
                                <span
                                    className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                    <svg className="size-1.5 fill-primary" viewBox="0 0 6 6" aria-hidden="true">
                                        <circle cx="3" cy="3" r="3"></circle>
                                    </svg>
                                    service
                                </span>
                                    <h3 className="mt-3 text-xl font-semibold leading-6 text-text group-hover:text-primary
                                transition-colors duration-300">
                                        <a href="https://itec.jd-devs.com" target="_blank"
                                           className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            ITEC
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                        SITE WEB
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          <span
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-red-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        laravel
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-purple-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        livewire
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-cyan-400" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        tailwindcss
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-blue-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        alpinejs
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-indigo-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        bootstrap
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-500" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        gitlab
                                    </span>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <div
                                className="relative isolate transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden">
                                <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                                    <Image width={100} height={100} loading="lazy" src="https://my.jd-devs.com/storage/9/01J9EP1P9DTYRYNTPBPS9R9Z6S.png"
                                         alt="Gestion de requête"
                                         className="duration-500 w-full h-full object-cover
                                    transition-all ease-in-out group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span
                                    className="absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                </svg>
                            </span>
                                <div className="p-6">
                                <span
                                    className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                    <svg className="size-1.5 fill-primary" viewBox="0 0 6 6" aria-hidden="true">
                                        <circle cx="3" cy="3" r="3"></circle>
                                    </svg>
                                    service
                                </span>
                                    <h3 className="mt-3 text-xl font-semibold leading-6 text-text group-hover:text-primary
                                transition-colors duration-300">
                                        <a href="https://iut.jd-devs.com" target="_blank"
                                           className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            Gestion de requête
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                        Système de requête d&#39;une école
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          <span
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-red-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        laravel
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-purple-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        livewire
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-cyan-400" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        tailwindcss
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-blue-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        alpinejs
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-500" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        gitlab
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        git
                                    </span>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <div
                                className="relative isolate transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden">
                                <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                                    <Image width={100} height={100} loading="lazy" src="https://my.jd-devs.com/storage/10/01J9EZ1DVDZK6WW1FDS826F64H.png" alt="DEV-STORE"
                                         className="duration-500 w-full h-full object-cover
                                    transition-all ease-in-out group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span
                                    className="absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                </svg>
                            </span>
                                <div className="p-6">
                                <span
                                    className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                    <svg className="size-1.5 fill-primary" viewBox="0 0 6 6" aria-hidden="true">
                                        <circle cx="3" cy="3" r="3"></circle>
                                    </svg>
                                    hobby
                                </span>
                                    <h3 className="mt-3 text-xl font-semibold leading-6 text-text group-hover:text-primary
                                transition-colors duration-300">
                                        <a href="https://dev-store.jd-devs.com" target="_blank"
                                           className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            DEV-STORE
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                        Site d&#39;e-commerce dynamique.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          <span
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-red-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        laravel
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-purple-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        livewire
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-cyan-400" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        tailwindcss
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        git
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-500" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        gitlab
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-blue-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        alpinejs
                                    </span>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <div
                                className="relative isolate transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-800 overflow-hidden">
                                <div className="aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]">
                                    <Image width={100} height={100} loading="lazy" src="https://my.jd-devs.com/storage/11/01J9F09XY6TB3WNFCENS13NN47.png" alt="MT-KITS"
                                         className="duration-500 w-full h-full object-cover
                                    transition-all ease-in-out group-hover:scale-105"/>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span
                                    className="absolute bottom-4 right-4 rounded-full bg-zinc-900 p-2 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path>
                                </svg>
                            </span>
                                <div className="p-6">
                                <span
                                    className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                    <svg className="size-1.5 fill-primary" viewBox="0 0 6 6" aria-hidden="true">
                                        <circle cx="3" cy="3" r="3"></circle>
                                    </svg>
                                    other
                                </span>
                                    <h3 className="mt-3 text-xl font-semibold leading-6 text-text group-hover:text-primary
                                transition-colors duration-300">
                                        <a href="https://mt-kits.jd-devs.com" target="_blank"
                                           className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true"></span>
                                            MT-KITS
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                                        Application de gestion de kits starlink
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                          <span
                                        className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-red-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        laravel
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-cyan-400" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        tailwindcss
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-500" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        gitlab
                                    </span>
                                        <span
                                            className="inline-flex items-center gap-x-1.5 rounded-full bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 ring-1 ring-inset ring-zinc-400/20">
                                        <svg className="size-1.5 fill-orange-600" viewBox="0 0 6 6" aria-hidden="true">
                                            <circle cx="3" cy="3" r="3"></circle>
                                        </svg>
                                        git
                                    </span>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                        

                    </ul>
                    
                </div>
            </div>
        </section>
    </>)
}
