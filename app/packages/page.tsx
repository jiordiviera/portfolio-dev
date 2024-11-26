import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Package } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  const packages = [
    {
      name: "Laravel Log Cleaner",
      description: "An efficient Laravel package for automatically cleaning up old log files, helping to maintain a tidy and performant application.",
      github: "https://github.com/jiordiviera/laravel-log-cleaner",
      image: "https://opengraph.githubassets.com/1/jiordiviera/laravel-log-cleaner",
      tags: ["Laravel", "Logs", "Maintenance"]
    },
    {
      name: "Laravel Task Automator",
      description: "Streamline your Laravel tasks with this powerful automation package. Simplify complex processes and boost productivity.",
      github: "https://github.com/jiordiviera/laravel-task-automator",
      image: "https://opengraph.githubassets.com/1/jiordiviera/laravel-task-automator",
      tags: ["Laravel", "Automation", "Tasks"]
    }
  ]

  return (
    <main className="container mx-auto px-4">
      <header className="mb-12 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">Laravel Packages</h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 tracking-tight">
          Discover the tools I&apos;ve crafted to enhance Laravel development
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative">
              <Image width={200} height={200} src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <Package className="w-16 h-16 text-white" />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <CardDescription className="text-sm">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-muted/50 p-4">
              <Button variant="outline" size="sm" asChild>
                <a href={pkg.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={pkg.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to collaborate?</h2>
        <p className="text-muted-foreground mb-6">
          I&apos;m always open to new ideas and collaborations. Let&apos;s create something amazing together!
        </p>
        <Button size="lg" asChild>
          <a href="/contact" className="flex items-center">
            Get in touch
          </a>
        </Button>
      </div>
            </main>
  )
}
