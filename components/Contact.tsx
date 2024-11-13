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
      // Here you would typically send the data to your backend
      // For this example, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success("Message sent!",{
        description: "Thank you for your message. I'll get back to you soon.",
      })
      reset()
    } catch (error) {
      toast.error("Error",{
        description: "There was a problem sending your message. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">Get in Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
