import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Globe, Layout, Server } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Skills | Dev Jiordi',
  description: 'Discover my web development skills, including React, Laravel, and more.',
  openGraph: {
    title: 'Dev Jiordi\'s Skills',
    description: 'Explore my frontend and backend development skills.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4',
        width: 400,
        height: 400,
        alt: 'Dev Jiordi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Jiordi\'s Skills',
    description: 'Discover my web development skills and recent projects.',
    images: ['https://avatars.githubusercontent.com/u/56254853'],
    creator: '@jiordi_kengne',
  },
}

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
      { name: "TailwindCSS", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    name: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Laravel", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
      { name: "Express", level: "Beginner" },
      { name: "PHP", level: "Intermediate" },
    ],
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Beginner" },
    ],
  },
  {
    name: "Tools & Deployment",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "cPanel", level: "Intermediate" },
      { name: "CI/CD", level: "Beginner" },
    ],
  },
]

const SkillLevel = ({ level }: { level: string }) => {
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
    <div className="container mx-auto px-4 py-24 lg:pt-40 lg:pb-10">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <CardHeader className="bg-muted">
              <CardTitle className="flex items-center gap-2">
                {category.icon}
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex justify-between items-center p-4">
                    <span className="font-medium">{skill.name}</span>
                    <SkillLevel level={skill.level} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Languages
          </CardTitle>
          <CardDescription>Languages I speak</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="text-lg py-1 px-3">French (Native)</Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3">German</Badge>
            <Badge variant="secondary" className="text-lg py-1 px-3">English (Basic)</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
