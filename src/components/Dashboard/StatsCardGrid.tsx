import React from 'react';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';
import StatCard, { StatCardProps } from './StatCard';

const StatsCardGrid: React.FC = () => {
  const statsData: StatCardProps[] = [
    {
      title: 'Earning',
      value: '$ 628',
      icon: DollarSign,
      variant: 'primary',
    },
    {
      title: 'Share',
      value: '2434',
      icon: Share2,
      variant: 'default',
    },
    {
      title: 'Likes',
      value: '1259',
      icon: ThumbsUp,
      variant: 'default',
    },
    {
      title: 'Rating',
      value: '8,5',
      icon: Star,
      variant: 'default',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          variant={stat.variant}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;
