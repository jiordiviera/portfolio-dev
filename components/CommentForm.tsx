'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '@/redux/hooks'
import { addComment } from '@/redux/slices/posts/commentsSlice'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface CommentFormProps {
    postId: string
    onCommentAddedAction: () => void
}
interface FormData {
    pseudo: string;
    message: string;
}

export function CommentForm({ postId, onCommentAddedAction }: CommentFormProps) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
    const dispatch = useAppDispatch()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        try {
            await dispatch(addComment({ postId, comment: data })).unwrap()
            toast.success('Commentaire ajouté avec succès')
            reset()
            onCommentAddedAction()
        } catch (error) {
            toast.error('Erreur lors de l\'ajout du commentaire')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <Input
                    placeholder="Votre pseudo"
                    {...register('pseudo', { required: 'Le pseudo est requis' })}
                />
                {errors.pseudo && <p className="text-red-500 text-sm mt-1">{errors.pseudo.message as string}</p>}
            </div>
            <div>
                <Textarea
                    placeholder="Votre commentaire"
                    {...register('message', { required: 'Le message est requis' })}
                    rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi...' : 'Envoyer le commentaire'}
            </Button>
        </form>
    )
}

