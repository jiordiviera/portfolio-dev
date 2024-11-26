import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Globe, Layout, Server, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'My Skills | Jiordi Viera',
  description: 'Discover my web development skills, including React, Laravel, and more.',
  openGraph: {
    title: 'Jiordi Viera\'s Skills',
    description: 'Explore my frontend and backend development skills.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4',
        width: 400,
        height: 400,
        alt: 'Jiordi Viera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiordi Viera\'s Skills',
    description: 'Discover my web development skills and recent projects.',
    images: ['https://avatars.githubusercontent.com/u/56254853'],
    creator: '@jiordi_kengne',
  },
}

interface SkillCategory {
  name: string
  icon: React.ReactNode
  description: string
  skills: Skill[]
}
interface Skill {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    description: "Building robust server-side applications",
    skills: [
      { name: "Laravel", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "RESTful APIs", level: "Intermediate" },
    ],
  },
  {
    name: "Frontend Development",
    icon: <Layout className="w-8 h-8" />,
    description: "Creating responsive and interactive user interfaces",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "TailwindCSS", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8" />,
    description: "Designing and optimizing database structures",
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Beginner" },
      { name: "Database Design", level: "Beginner" },
      { name: "Query Optimization", level: "Beginner" },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: <Code2 className="w-8 h-8" />,
    description: "Streamlining development and deployment processes",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "cPanel", level: "Advanced" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Docker", level: "Beginner" },
    ],
  },
]

const SkillLevel: React.FC<{ level: "Beginner" | "Intermediate" | "Advanced" }> = ({ level }) => {
  const colors = {
    Beginner: "bg-yellow-500",
    Intermediate: "bg-green-500",
    Advanced: "bg-blue-500",
  }
  return (
      <Badge variant="secondary" className={`${colors[level as keyof typeof colors]} text-white`}>
        {level}
      </Badge>
  )
}

export default function SkillsPage() {
  return (
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            My Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground">
            Specializing in backend development with a full-stack perspective
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
              <Card key={category.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-muted">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    {category.icon}
                    {category.name}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {category.skills.map((skill) => (
                        <li key={skill.name} className="flex justify-between items-center p-4 hover:bg-muted/50 transition-colors">
                          <span className="font-medium">{skill.name}</span>
                          <SkillLevel level={skill.level} />
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
          ))}
        </div>

        <Card className="mt-12 overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Globe className="w-8 h-8" />
              Languages
            </CardTitle>
            <CardDescription>Languages I speak</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3 flex-wrap">
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-primary text-primary-foreground">French (Native)</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">German (Beginner+)</Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">English (Beginner)</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <Zap className="w-6 h-6" />
            Always Learning
          </h2>
          <p className="text-muted-foreground">
            Continuously expanding my skills and staying up-to-date with the latest technologies.
          </p>
        </div>
      </main>
  )
}
