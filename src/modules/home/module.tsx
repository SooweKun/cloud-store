import Test2 from '@/src/assets/file-item-test2.jpg';
import Test from '@/src/assets/file-items-test.png';
import mdIco from '@/src/assets/ico/md-ico.svg';
import markIco from '@/src/assets/mark.svg';
import { FileContainer } from '@/src/components/flows/file-container';
import Image from 'next/image';
import { ActivityChart } from './feature/acivity-chart';
import { InfoTile } from './feature/info-tile';
import { MonthActivity } from './feature/month-activity';
import { MonthTask } from './feature/month-tast';

const Arr = [
  {
    created_at: '22.01.2026',
    data: [
      {
        image: Test2,
        name: 'file name',
        expansion: 'png',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'png',
      },
      {
        image: mdIco,
        name: 'file name',
        expansion: 'md',
      },
    ],
  },
];

export const HomeModule = () => {
  return (
    <div className='w-full flex gap-[30px] justify-center items-center'>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex gap-[30px]'>
          <MonthActivity />
          <div className='w-[245px] 2xl:w-[350px] 2xl:h-[170px] bg-[#272727] rounded-[10px] shadow-[inset_0_0_25px_rgba(0,255,47,0.25)] border border-green-500/20 relative'>
            <Image src={markIco} alt='nf' className='absolute top-[11px] right-[11px] cursor-pointer' />
          </div>
          <InfoTile />
        </div>
        <div className='w-full h-[390px] 2xl:h-[480px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col gap-[25px]'>
          <div className='w-full h-[30px] flex justify-between'>
            <h1 className='flex flex-col text-[16px] w-max'>
              Recents files <span className='text-[10px] pl-2'>last 2 days</span>
            </h1>
          </div>
          <FileContainer Arr={Arr} />
        </div>
      </div>
      <div className='flex flex-col gap-[20px] 2xl:gap-[30px] w-[300px]'>
        <ActivityChart />
        <MonthTask />
      </div>
    </div>
  );
};
