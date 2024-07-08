'use client';

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import analytics from '@/db/analytics';

export default function AnalyticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Views Per Month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='w-full h-[300px]'>
          <ResponsiveContainer>
            <LineChart width={1100} height={300} data={analytics}>
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' />
              <XAxis dataKey={'name'} />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
