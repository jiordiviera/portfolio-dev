'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createPost, deletePost, getPosts, queryClient } from '@/lib/api'
import { logout } from '@/redux/slices/auth/authSlice'
import { RootState } from '@/redux/store'
import { CreatePostSchema, type Post } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Loader2, Trash2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

export default function DashboardView() {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)

  const { data: posts, isLoading: isLoadingPosts } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      toast.success( 'Success',{
        description: 'Post created successfully'
      })
      form.reset()
    }
  })

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      toast.success('Success',{
        description: 'Post deleted successfully'
      })
    }
  })

  const form = useForm({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: '',
      content: ''
    }
  })

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out',{
      description: 'You have been successfully logged out'
    })
  }

  if (isLoadingPosts) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Welcome, {user?.name}</h2>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create a new post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit((data) => createPostMutation.mutate(data))} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Post title"
                {...form.register('title')}
              />
              {form.formState.errors.title && (
                <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Post content"
                {...form.register('content')}
              />
              {form.formState.errors.content && (
                <p className="text-sm text-red-500">{form.formState.errors.content.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={createPostMutation.isPending}
              className="w-full"
            >
              {createPostMutation.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Post
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post: Post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deletePostMutation.mutate(post.id)}
                  disabled={deletePostMutation.isPending}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
