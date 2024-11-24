'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { createPost, IPostData } from '@/redux/slices/posts/postsSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/card';
import { X, Upload } from 'lucide-react';
import Image from 'next/image';

interface FormInputs {
  title: string;
  description: string;
  excerpt: string;
  file: FileList;
}

export default function NewPostPage() {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormInputs>();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const selectedImage = watch('file')?.[0];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('L\'image ne doit pas dépasser 5MB');
        e.target.value = '';
        return;
      }

      if (!file.type.startsWith('image/')) {
        toast.error('Le fichier doit être une image');
        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    setValue('file', undefined);
    setImagePreview(null);
  };

  const onSubmit = async (data: FormInputs) => {
    setIsLoading(true);
    try {
      if (data.file && data.file.length > 0) {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('file', data.file[0]);

        await dispatch(createPost({ postData: formData })).unwrap();
        toast.success('Post créé avec succès');
        router.push('/blog');
      } else {
        toast.error("Image requise", {
          description: "L'image est requise."
        });
      }
    } catch (error) {
      toast.error('Erreur lors de la création du post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Créer un nouveau post</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="title">Titre</Label>
            <Input
              id="title"
              {...register('title', {
                required: 'Le titre est requis',
                minLength: { value: 3, message: 'Le titre doit faire au moins 3 caractères' }
              })}
            />
            {errors.title && (
              <span className="text-sm text-red-500">{errors.title.message}</span>
            )}
          </div>

          
          <div>
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              {...register('description', {
                required: 'Le contenu est requis',
                minLength: { value: 10, message: 'Le contenu doit faire au moins 10 caractères' }
              })}
              rows={10}
            />
            {errors.description && (
              <span className="text-sm text-red-500">{errors.description.message}</span>
            )}
          </div>

          <div className="space-y-4">
            <Label htmlFor="image">Image du post</Label>
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('image')?.click()}
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choisir une image
              </Button>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                {...register('file', {
                  required: 'Une image est requise',
                  validate: {
                    fileSize: (files) => !files[0] || files[0].size <= 5 * 1024 * 1024 || 'L\'image ne doit pas dépasser 5MB',
                    fileType: (files) => !files[0] || files[0].type.startsWith('image/') || 'Le fichier doit être une image'
                  }
                })}
                onChange={(e) => {
                  register('file').onChange(e);
                  handleImageChange(e);
                }}
              />
            </div>
            {errors.file && (
              <span className="text-sm text-red-500">{errors.file.message}</span>
            )}

            {imagePreview && (
              <Card className="relative p-2">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 w-6 h-6"
                  onClick={removeImage}
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    width={200}
                    height={200}
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
                {selectedImage && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {selectedImage.name} - {(selectedImage.size / 1024 / 1024).toFixed(2)}MB
                  </p>
                )}
              </Card>
            )}

            <p className="text-sm text-muted-foreground">
              Formats acceptés: JPG, PNG, GIF (max 5MB)
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Création...' : 'Créer le post'}
          </Button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
