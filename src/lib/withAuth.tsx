'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Role = 'student' | 'staff' | 'admin' | null;

export function withAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Role[] | null = null // null means any logged-in user
) {
  return function AuthenticatedComponent(props: P) {
    const { session, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !session) {
        router.push('/login');
      }
      // Optional: role-based redirect (will enhance later)
    }, [session, isLoading, router]);

    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!session) {
      return null;
    }

    // TODO: Add role check once user roles are stored
    return <WrappedComponent {...props} />;
  };
}
