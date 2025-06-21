import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const progressData = [{ name: 'Progress', value: 45 }];

const ProgressCircle: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-1 shadow-sm">
      <CardContent className="flex flex-col items-center justify-between p-6 h-full">
        <div className="relative w-[150px] h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              data={progressData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={10}
                className="fill-accent"
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">
              {progressData[0].value}%
            </span>
          </div>
        </div>
        <div className="w-full space-y-2 text-center mt-4">
          <p className="text-sm text-muted-foreground border-b pb-2">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground border-b pb-2">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground border-b pb-2">Lorem ipsum</p>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
        </div>
        <Button variant="outline" className="mt-auto w-full bg-accent text-accent-foreground hover:bg-accent/90 border-0">
          Check Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgressCircle;
