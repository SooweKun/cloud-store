import { DataChart } from './entities/data-chart';

export const ProfileModule = () => {
  return (
    <div className='w-full flex flex-col gap-[30px]'>
      <div className='w-full h-max flex gap-[20px] justify-center'>
        <div className='w-[700px] h-[280px] rounded-[10px] bg-a' />
        <DataChart />
      </div>
    </div>
  );
};
