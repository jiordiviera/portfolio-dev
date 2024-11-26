'use client'
import { Calendar, Eye, Clock } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';

interface PostMetadataProps {
    publishedAt: string;
    viewsCount: number;
    readTime: number;
}

export function PostMetadata({ publishedAt, viewsCount, readTime }: PostMetadataProps) {
    const formattedDate = format(parseISO(publishedAt), "d MMMM yyyy 'at' HH'h'mm", { locale: enGB });

    return (
        <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600 dark:text-gray-400">
            <time className="flex items-center" dateTime={publishedAt}>
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {formattedDate}
            </time>
            <div className="flex items-center">
                <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {viewsCount.toLocaleString()} vues
            </div>
            <div className="flex items-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {readTime} min de lecture
            </div>
        </div>
    );
}
