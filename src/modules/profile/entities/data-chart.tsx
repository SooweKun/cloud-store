'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { ChartContainer, type ChartConfig } from '@/src/components/ui/chart';
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

const chartData = [{ browser: 'safari', visitors: 1260, fill: '#00C950' }];
const userSize = 24.4;
const totalSize = 50;
const startAngle = 90;
const endAngle = startAngle - (userSize / totalSize) * 360;

const chartConfig = {
  visitors: {
    label: 'Data',
  },
  safari: {
    label: 'Safari',
    color: '#00C950',
  },
} satisfies ChartConfig;

export function DataChart() {
  return (
    <Card className='flex flex-col w-[280px] h-[280px] gap-0 pb-0 border-0'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Data chart</CardTitle>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square'>
          <RadialBarChart data={chartData} endAngle={endAngle} innerRadius={80} outerRadius={120} startAngle={startAngle}>
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-background'
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey='visitors' background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-lg font-bold'>
                          {userSize} gb / {totalSize} gb
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          size on your disk
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
