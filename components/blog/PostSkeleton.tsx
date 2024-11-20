import React from 'react'
import {Card, CardContent} from '@/components/ui/card'
import {Skeleton} from '@/components/ui/skeleton'

export default function PostSkeleton() {
    return (
        <Card className="animate-pulse">
            <Skeleton className="h-48 w-full"/>
            <CardContent className="space-y-3 p-6">
                <Skeleton className="h-4 w-3/4"/>
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-4 w-5/6"/>
                <div className="flex flex-wrap gap-2 mt-4">
                    {[1, 2, 3].map((item) => (
                        <Skeleton key={item} className="h-6 w-20 rounded-full"/>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}