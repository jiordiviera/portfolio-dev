'use client'

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updatePost, fetchPostBySlug } from '@/redux/slices/posts/postsSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function EditPostPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const currentPost = useAppSelector((state) => state.posts.currentPost);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostBySlug(slug as string));
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (currentPost) {
      setValue('title', currentPost.title);
      setValue('description', currentPost.description);
    }
  }, [currentPost, setValue]);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response= await dispatch(updatePost({ id: currentPost?._id as string, postData: data })).unwrap();
      console.log(response)
      toast.success('Post mis à jour avec succès');
      router.push(`/post/${response.slug}`);
    } catch (error) {
      toast.error('Erreur lors de la mise à jour du post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Modifier le post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="title">Titre</Label>
            <Input id="title" {...register('title', { required: true })} />
            {errors.title && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div
>
            <Label htmlFor="description">Contenu</Label>
            <Textarea id="description" {...register('description', { required: true })} rows={10} />
            {errors.description && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Mise à jour...' : 'Mettre à jour le post'}
          </Button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
