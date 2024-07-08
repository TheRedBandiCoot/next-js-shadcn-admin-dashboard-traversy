import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

type DashboardCardType = {
  count: number;
  title: string;
  icon: React.ReactElement<LucideIcon>;
};

export default function DashboardCard({
  count,
  title,
  icon
}: DashboardCardType) {
  return (
    <Card className='bg-slate-100 dark:bg-slate-800 p-4 pb-0 border-4 border-slate-500 '>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-5xl font-bold text-slate-500 dark:text-slate-200'>
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
