import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import BarChart from '../components/Dashboard/BarChart';
import LineChart from '../components/Dashboard/LineChart';
import ProgressCircle from '../components/Dashboard/ProgressCircle';

/**
 * Dashboard Overview Page
 * 
 * This page serves as the main entry point of the application, displaying a comprehensive
 * overview of user analytics. It combines various data visualization components into a cohesive layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* Row 1: Key Performance Indicators */}
        <StatsCardGrid />

        {/* Row 2: Main Analytics Grid, combining Bar Chart and Progress Circle */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* BarChart component is internally configured to span 2 columns on large screens */}
          <BarChart />
          {/* ProgressCircle component is internally configured to span 1 column on large screens */}
          <ProgressCircle />
        </div>

        {/* Row 3: Trend Analysis Chart */}
        {/* LineChart will naturally take the full width as it's a direct child of the main content's vertical stack. */}
        <LineChart />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
