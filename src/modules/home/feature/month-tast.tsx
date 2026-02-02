import panding from '@/src/assets/ico/pending.svg';
import ready from '@/src/assets/ico/ready.svg';
import monthBg from '@/src/assets/month-task-bg.png';
import Image from 'next/image';

const data = [
  {
    task: 'Save first file in month',
    status: 'ready',
  },
  {
    task: 'Save first txt file in month',
    status: 'panding',
  },
  {
    task: 'Save 10 bd file in month',
    status: 'ready',
  },
  {
    task: 'Save image in  month',
    status: 'ready',
  },
];

export const MonthTask = () => {
  return (
    <div className='w-full h-[200px] rounded-[10px] p-[15px] relative'>
      <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
        Monthly Tasks <span className='2xl:text-[14px] text-[12px] pl-2'>43</span>
      </h1>
      <Image alt='' src={monthBg} className='w-full h-full absolute top-0 left-0 z-[-1]' />
      <div className='flex flex-col gap-[10px]'>
        {data.map(({ task, status }) => (
          <div
            className='w-full h-[25px] bg-[#1F1F1F]/70 hover:bg-[#1f1f1f] rounded-[5px] px-[10px] flex items-center justify-between cursor-pointer'
            key={task}>
            <p className='text-[12px]'>{task}</p>
            <Image src={status === 'ready' ? ready : panding} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};
