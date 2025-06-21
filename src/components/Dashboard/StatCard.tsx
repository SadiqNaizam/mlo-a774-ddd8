import React from 'react';
import { LucideProps } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType<LucideProps>;
  variant?: 'default' | 'primary';
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  variant = 'default',
  className,
}) => {
  const cardClasses = cn(
    'shadow-sm',
    {
      'bg-primary text-primary-foreground': variant === 'primary',
      'bg-card text-card-foreground': variant === 'default',
    },
    className
  );

  const iconColorClass = variant === 'primary' ? 'text-primary-foreground/70' : 'text-muted-foreground';

  return (
    <Card className={cardClasses}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={cn('h-5 w-5', iconColorClass)} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
