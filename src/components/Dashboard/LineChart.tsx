import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const lineChartData = [
  { name: '1', data1: 20, data2: 30 },
  { name: '2', data1: 45, data2: 25 },
  { name: '3', data1: 30, data2: 50 },
  { name: '4', data1: 60, data2: 40 },
  { name: '5', data1: 50, data2: 75 },
  { name: '6', data1: 80, data2: 60 },
  { name: '7', data1: 65, data2: 90 },
  { name: '8', data1: 95, data2: 70 },
  { name: '9', data1: 75, data2: 100 },
  { name: '10', data1: 110, data2: 85 },
  { name: '11', data1: 90, data2: 120 },
  { name: '12', data1: 130, data2: 100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <p className="font-bold text-primary">{`Day: ${label}`}</p>
        <p style={{ color: 'hsl(var(--accent))' }}>{`Lorem: ${payload[0].value}`}</p>
        <p style={{ color: 'hsl(var(--primary))' }}>{`Ipsum: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LineChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Lorem Ipsum</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-accent mr-2"></div>
                <span>Lorem</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
                <span>Ipsum</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground p-2 border rounded-md">
            {/* Mock Calendar - static for visual purposes */}
            <div className="grid grid-cols-7 gap-1">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              {[...Array(24)].map((_, i) => <div key={i} className="opacity-20">{i+1}</div>)}
              <div className="bg-primary text-primary-foreground rounded-sm text-center">25</div>
              <div className="bg-accent text-accent-foreground rounded-sm text-center">26</div>
              <div>27</div><div>28</div><div>29</div><div>30</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={lineChartData} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
            <defs>
                <linearGradient id="colorData1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorData2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip />} />
            <XAxis dataKey="name" hide={true} />
            <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']}/>
            <Area type="monotone" dataKey="data1" stroke="hsl(var(--accent))" strokeWidth={2} fillOpacity={1} fill="url(#colorData1)" />
            <Area type="monotone" dataKey="data2" stroke="hsl(var(--primary))" strokeWidth={2} fillOpacity={1} fill="url(#colorData2)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChart;
