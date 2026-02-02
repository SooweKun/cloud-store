'use client';

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/src/components/ui/chart';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

const chartData = [
  { item: 'html', value: 18 },
  { item: 'md', value: 17 },
  { item: 'mark', value: 25 },
  { item: 'json', value: 14 },
  { item: 'folder', value: 14 },
  { item: 'db', value: 17 },
  { item: 'hz', value: 21 },
  { item: 'video', value: 15 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#35EAA4',
  },
};

export const ActivityChart = () => {
  return (
    <div className='w-full h-[320px] 2xl:h-[440px] bg-[#272727] rounded-[10px] p-[15px] shadow-[#31B07F] shadow-[0_0_15px] border border-[#31B07F] flex flex-col justify-between'>
      <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
        Activity chart <span className='2xl:text-[10px] text-[10px] pl-2'>data on 09.01.26</span>
      </h1>
      <ChartContainer config={chartConfig} className='2xl:h-[240px] 2xl:w-[280px] flex-1 flex justify-center'>
        <RadarChart data={chartData} className='pr-[15px]'>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis dataKey='item' />
          <PolarGrid />
          <Radar
            dataKey='value'
            fill='var(--color-desktop)'
            fillOpacity={0.6}
            dot={{
              r: 4,
              fillOpacity: 1,
            }}
          />
        </RadarChart>
      </ChartContainer>
      <div className='w-full grid grid-cols-2 gap-[5px]'>
        {chartData.map(({ item, value }) => (
          <h1 key={item} className='text-[10px] 2xl:text-[14px] h-max'>
            Total: {item}: {value}
          </h1>
        ))}
      </div>
    </div>
  );
};
