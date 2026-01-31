'use client';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/src/components/ui/chart';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

const chartData = [
  { month: 'html', desktop: 18 },
  { month: 'md', desktop: 17 },
  { month: 'mark', desktop: 25 },
  { month: 'json', desktop: 14 },
  { month: 'folder', desktop: 14 },
  { month: 'db', desktop: 17 },
  { month: 'hz', desktop: 21 },
  { month: 'video', desktop: 15 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#35EAA4',
  },
};

export const ActivityChart = () => {
  return (
    <div className='w-full h-[320px] 2xl:h-[440px] bg-[#272727] rounded-[10px] p-[15px] shadow-[#31B07F] shadow-[0_0_15px] border border-[#31B07F] flex flex-col'>
      <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
        Activity chart <span className='2xl:text-[10px] text-[10px] pl-2'>data on 09.01.26</span>
      </h1>
      <ChartContainer config={chartConfig} className='aspect-square max-h-[240px] max-w-[280px] flex justify-center'>
        <RadarChart data={chartData} className='pr-[15px]'>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey='month' />
          <PolarGrid />
          <Radar
            dataKey='desktop'
            fill='var(--color-desktop)'
            fillOpacity={0.6}
            dot={{
              r: 4,
              fillOpacity: 1,
            }}
          />
        </RadarChart>
      </ChartContainer>
      <div className='w-[300px] h-[100px] grid grid-cols-2'></div>
    </div>
  );
};
