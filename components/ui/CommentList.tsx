'use client'
import { Card } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CommentInterface } from '@/utils/types/posts';
import { motion } from 'framer-motion';

export function CommentList({ comments }: { comments: CommentInterface[] }) {
    if (comments.length === 0) return null;

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Commentaires ({comments.length})</h2>
            <div className="space-y-4">
                {comments.map((comment, index) => (
                    <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex justify-between items-start gap-4">
                                <div className="font-medium">{comment.pseudo}</div>
                                <time className="text-sm text-gray-500 whitespace-nowrap">
                                    {format(parseISO(comment.created_at), "d MMM yyyy", { locale: fr })}
                                </time>
                            </div>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{comment.message}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
