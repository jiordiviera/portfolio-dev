import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
});

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    createdAt: z.string(),
});

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const CreatePostSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
});

export type User = z.infer<typeof UserSchema>;
export type Post = z.infer<typeof PostSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type CreatePostInput = z.infer<typeof CreatePostSchema>;
