'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { updateProfile } from '@/redux/slices/auth/authSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ProfileForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await dispatch(updateProfile(data)).unwrap();
      toast.success('Profil mis à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour du profil');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" defaultValue={user?.name} {...register('name', { required: true })} />
        {errors.name && <span className="text-red-500">Ce champ est requis</span>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue={user?.email} {...register('email', { required: true })} />
        {errors.email && <span className="text-red-500">Ce champ est requis</span>}
      </div>
      <div>
        <Label htmlFor="twitter">Twitter</Label>
        <Input id="twitter" defaultValue={user?.twitter} {...register('twitter')} />
      </div>
      <div>
        <Label htmlFor="github">GitHub</Label>
        <Input id="github" defaultValue={user?.github} {...register('github')} />
      </div>
      <div>
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input id="linkedin" defaultValue={user?.linkedin} {...register('linkedin')} />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Mise à jour...' : 'Mettre à jour le profil'}
      </Button>
    </form>
  );
}
