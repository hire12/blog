'use client';

import AdminArticle from '@/components/Admin/Read';
import React, { useEffect } from 'react';
import Header from '../pages/header/page';
import { useRouter } from 'next/navigation';

export default function AdminPage() { 
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <Header />
      <AdminArticle />
    </div>
  );
}
