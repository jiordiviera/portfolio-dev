'use client'

import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardIcon, CheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { JetBrains_Mono } from 'next/font/google'
import useSound from 'use-sound'
import { toast } from 'sonner'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface MarkdownRendererProps {
  content: string
  copySoundPath?: string
}

export default function MarkdownRenderer({ content, copySoundPath = '/copy-sound.mp3' }: MarkdownRendererProps) {
  const [playCopySound] = useSound(copySoundPath)
  const [copyToClipboard, setCopyToClipboard] = useState<(code: string) => void>(() => () => {})
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    setCopyToClipboard(() => (code: string) => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code)
          .then(() => {
            setCopiedCode(code)
            playCopySound()
            toast.success("Code copié !", {
              description: "Le code a été copié dans votre presse-papiers.",
              duration: 2000,
            })
            setTimeout(() => setCopiedCode(null), 2000)
          })
          .catch(err => console.error('Échec de la copie du texte : ', err))
      } else {
        console.warn('API Clipboard non disponible')
        toast.error("Code non-copié !", {
              description: "Le code n'a pas été copié dans votre presse-papiers.",
              duration: 2000,
            })
      }
    })
  }, [playCopySound])
const { oneDark } = require('react-syntax-highlighter/dist/esm/styles/prism');

  const theme = oneDark;

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-6">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6" {...props} />,
            h2: ({ node, ...props }) => <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mt-8 mb-4" {...props} />,
            h3: ({ node, ...props }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-3" {...props} />,
            p: ({ node, ...props }) => <p className="leading-7 [&:not(:first-child)]:mt-6 mb-4" {...props} />,
            ul: ({ node, ...props }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 space-y-2" {...props} />,
            ol: ({ node, ...props }) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 space-y-2" {...props} />,
            li: ({ node, ...props }) => <li className="mt-2" {...props} />,
            a: ({ node, ...props }) => (
              <a className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground" {...props} />
            ),
            code({ children,className,node,ref,...props }) {
              const match = /language-(\w+)/.exec(className || '')

              return match ? (
                <div className="relative my-6">
                  <div className={`${jetBrainsMono.className} text-sm`}>
                    <SyntaxHighlighter
                      style={theme}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md"
                    customStyle={{  }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 right-2 bg-secondary/50 hover:bg-secondary"
                    onClick={() => copyToClipboard(String(children))}
                  >
                    {copiedCode === String(children) ? (
                      <CheckIcon className="h-4 w-4 text-green-500" />
                    ) : (
                      <ClipboardIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ) : (
                <code className={`${jetBrainsMono.className} relative roundedpx-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </CardContent>
    </Card>
  )
}
