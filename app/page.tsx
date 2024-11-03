import {About} from "@/app/_components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
    return (
        <main className="flex h-full flex-col items-center justify-between lg:px-24 px-12">
            <About/>
        </main>
    );
}
