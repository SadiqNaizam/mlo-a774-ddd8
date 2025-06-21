import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-background">
      {/* Sidebar: Spans both rows in the first column */}
      <div className="row-span-2 border-r">
        <Sidebar />
      </div>

      {/* Header: First row, second column */}
      <TopHeader />

      {/* Main Content: Second row, second column */}
      <main className="overflow-y-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;
