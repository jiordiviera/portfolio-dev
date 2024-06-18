import Image from "next/image";
import {About} from "@/app/_components/About";
import {MyProjects} from "@/app/_components/MyProjects";

export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-between lg:px-24 px-12">
            <About/>
            <MyProjects/>
        </main>
    );
}
