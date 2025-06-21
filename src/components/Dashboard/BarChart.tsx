import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const barChartData = [
  { name: 'JAN', 2019: 20, 2020: 38 },
  { name: 'FEB', 2019: 28, 2020: 44 },
  { name: 'MAR', 2019: 18, 2020: 32 },
  { name: 'APR', 2019: 22, 2020: 8 },
  { name: 'MAY', 2019: 34, 2020: 21 },
  { name: 'JUNE', 2019: 26, 2020: 48 },
  { name: 'JULY', 2019: 36, 2020: 15 },
  { name: 'AUG', 2019: 22, 2020: 28 },
  { name: 'SEP', 2019: 34, 2020: 18 },
  { name: 'OCT', 2019: 19, 2020: 39 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-bold text-primary">{`Month: ${label}`}</p>
        <p style={{ color: 'hsl(var(--accent))' }}>{`2019: ${payload[0].value}`}</p>
        <p style={{ color: 'hsl(var(--primary))' }}>{`2020: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const BarChart: React.FC = () => {
  const [focusedBar, setFocusedBar] = React.useState<number | null>(null);

  return (
    <Card className="col-span-1 lg:col-span-2 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className='flex flex-col gap-2'>
          <CardTitle>Result</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-accent mr-2"></div>
              <span>2019</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
              <span>2020</span>
            </div>
          </div>
        </div>
        <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 border-0">
          Check Now
        </Button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <RechartsBarChart 
            data={barChartData} 
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            onMouseMove={(state) => {
                if (state.isTooltipActive) {
                    setFocusedBar(state.activeTooltipIndex ?? null);
                } else {
                    setFocusedBar(null);
                }
            }}
          >
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--secondary))' }} />
            <Bar dataKey="2019" radius={[4, 4, 0, 0]} >
                {barChartData.map((_entry, index) => (
                    <Cell key={`cell-2019-${index}`} fill='hsl(var(--accent))' opacity={focusedBar === index ? 1 : 0.7} />
                ))}
            </Bar>
            <Bar dataKey="2020" radius={[4, 4, 0, 0]} >
                {barChartData.map((_entry, index) => (
                    <Cell key={`cell-2020-${index}`} fill='hsl(var(--primary))' opacity={focusedBar === index ? 1 : 0.7} />
                ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChart;
