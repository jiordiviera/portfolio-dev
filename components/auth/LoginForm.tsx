'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/redux/hooks';
import { login } from '@/redux/slices/auth/authSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await dispatch(login(data)).unwrap();
      toast.success('Connexion réussie');
      router.push('/profile')
    } catch (error) {
      toast.error('Erreur de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email', { required: true })} />
        {errors.email && <span className="text-red-500">Ce champ est requis</span>}
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span className="text-red-500">Ce champ est requis</span>}
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Connexion...' : 'Se connecter'}
      </Button>
    </form>
  );
}
