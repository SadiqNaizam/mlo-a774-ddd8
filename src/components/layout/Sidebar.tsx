import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  Home,
  FileText,
  MessageSquare,
  Bell,
  MapPin,
  PieChart,
  User,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const navItems: readonly NavItem[] = [
  { label: 'home', icon: Home, href: '#', active: true },
  { label: 'file', icon: FileText, href: '#' },
  { label: 'messages', icon: MessageSquare, href: '#' },
  { label: 'notification', icon: Bell, href: '#' },
  { label: 'location', icon: MapPin, href: '#' },
  { label: 'graph', icon: PieChart, href: '#' },
] as const;

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-full">
      <div className="flex flex-col items-center p-6 space-y-4 border-b border-sidebar-foreground/10">
        <div className="relative">
          <Avatar className="h-24 w-24 border-4 border-sidebar-foreground/20 shadow-lg">
            <AvatarFallback className="bg-sidebar-foreground/10 text-sidebar-foreground">
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wider">JOHN DON</h2>
          <p className="text-sm text-sidebar-foreground/70">johndon@company.com</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center space-x-4 p-3 rounded-lg capitalize text-sidebar-foreground/80 hover:bg-sidebar-foreground/10 transition-colors',
                  item.active && 'bg-sidebar-foreground/10 text-sidebar-foreground font-semibold'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
