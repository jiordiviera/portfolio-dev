'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { format, parseISO } from 'date-fns'
import { fr } from 'date-fns/locale'
import { CommentInterface } from '@/utils/types/posts'
import { motion, AnimatePresence } from 'framer-motion'
import { CommentForm } from '@/components/CommentForm'

interface CommentListProps {
    comments: CommentInterface[]
    postId: string
}

export function CommentList({ comments: initialComments, postId }: CommentListProps) {
    const [comments, setComments] = useState(initialComments)

    const handleCommentAdded = () => {

        setComments(prevComments => [{
            _id: Date.now().toString(),
            pseudo: 'Nouveau commentateur',
            message: 'Nouveau commentaire ajouté',
            createdAt: new Date().toISOString()
        }, ...prevComments])
    }

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Commentaires ({comments.length})</h2>

            <div className="mb-8">
                <CommentForm postId={postId} onCommentAddedAction={handleCommentAdded} />
            </div>

            <AnimatePresence>
                {comments.map((comment, index) => (
                    <motion.div
                        key={comment._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-6 hover:shadow-lg transition-shadow duration-200 mb-4">
                            <div className="flex justify-between items-start gap-4">
                                <div className="font-medium">{comment.pseudo}</div>
                                <time className="text-sm text-gray-500 whitespace-nowrap">
                                    {format(parseISO(comment.createdAt), "d MMM yyyy", { locale: fr })}
                                </time>
                            </div>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{comment.message}</p>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    )
}

