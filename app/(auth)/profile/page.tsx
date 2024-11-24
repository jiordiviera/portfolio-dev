import { ProfileForm } from '@/components/profile/ProfileForm';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function ProfilePage() {
    return (
      <ProtectedRoute>
    <div className="container mx-auto ">
      <h1 className="text-2xl font-bold mb-4">Profil</h1>
      <ProfileForm />
            </div>
            </ProtectedRoute>
  );
}
