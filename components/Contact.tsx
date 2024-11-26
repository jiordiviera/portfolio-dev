'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      })
      reset()
    } catch (error) {
      toast.error("Error", {
        description: "There was a problem sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex flex-col items-center justify-center px-4 py-12 bg-background"
      >
        <header className="mb-12 text-center">
          <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-lg text-muted-foreground"
          >
            Have a question or want to work together? Let&#39;s connect!
          </motion.p>
        </header>
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 w-full max-w-md"
        >
          <div>
            <Input
                {...register("name")}
                placeholder="Your Name"
                className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <Input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea
                {...register("message")}
                placeholder="Your Message"
                className={errors.message ? "border-red-500" : ""}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
          >
            {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
            ) : (
                'Send Message'
            )}
          </Button>
        </motion.form>
      </motion.main>
  )
}

