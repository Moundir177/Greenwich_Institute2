'use client';

import { ReactNode } from 'react';
import DashboardSidebar from '@/components/ui/DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
} 