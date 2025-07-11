import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../ThemeToggle';

const TopHeader: React.FC = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-background border-b">
      <h1 className="text-xl font-semibold text-foreground">Dashboard User</h1>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-muted-foreground" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;