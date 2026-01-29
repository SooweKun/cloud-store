import { Tooltip, TooltipContent, TooltipTrigger } from '@/src/components/ui/tooltip';
import { FC } from 'react';

type Props = {
  bg: string;
  activity: number;
};

export const MonthActivityItem: FC<Props> = ({ bg, activity }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className='size-[15px] 2xl:size-[25px] rounded-[5px]' style={{ backgroundColor: bg }} />
      </TooltipTrigger>
      <TooltipContent side='top'>{activity > 0 ? <p>{activity} saves files</p> : '0 saves file'}</TooltipContent>
    </Tooltip>
  );
};
