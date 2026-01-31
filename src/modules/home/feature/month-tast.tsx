import monthBg from '@/src/assets/month-task-bg.png';
import Image from 'next/image';

export const MonthTask = () => {
  return (
    <div className='w-full h-[200px] rounded-[10px] p-[15px] relative'>
      <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
        Monthly Tasks <span className='2xl:text-[14px] text-[12px] pl-2'>43</span>
      </h1>
      <Image alt='' src={monthBg} className='w-full h-full absolute top-0 left-0 z-[-1]' />
    </div>
  );
};
