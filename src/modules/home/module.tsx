import Test2 from '@/src/assets/file-item-test2.jpg';
import Test from '@/src/assets/file-items-test.png';
import homeBanner from '@/src/assets/home-banner.png';
import mdIco from '@/src/assets/ico/md-ico.svg';
import markIco from '@/src/assets/mark.svg';
import { FileItem } from '@/src/components/flows/file-item';
import Image from 'next/image';
import { MonthActivity } from './feature/month-activity';

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
          <div className='w-[245px] 2xl:w-[350px] 2xl:h-[170px] bg-[#272727] rounded-[10px]' />
          <div className='w-[245px] 2xl:w-[350px] 2xl:h-[170px] rounded-[10px] flex items-end relative overflow-hidden cursor-pointer'>
            <Image src={markIco} alt='nf' className='absolute top-[11px] right-[11px] cursor-pointer' />

            <Image src={homeBanner} alt='nf' className='w-full h-full' />
            <div className='clip w-[250px] h-[75px] 2xl:h-[115px] bg-a pl-[10px] p-[5px] pl-[10px] pr-[15px] absolute bottom-[-1px] left-[-2px] flex flex-col gap-[5px] font-light'>
              <h1 className='text-[12px] flex w-max'>New Features</h1>
              <p className='text-[10px]'>This year we are offering even more functionality and activities for our users.</p>
            </div>
          </div>
        </div>
        <div className='w-full h-[390px] 2xl:h-[480px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col gap-[25px]'>
          <div className='w-full h-[30px] flex justify-between'>
            <div className='flex flex-col gap-0'>
              <h1 className='text-[20px]'>Recents Files</h1>
              <p className='text-[12px] pl-[12px]'>last 2 days</p>
            </div>
          </div>
          <div className='flex gap-[20px] pl-[15px] overflow-y-auto'>
            {Arr.map(({ created_at, data }) => (
              <div className='flex flex-col gap-[5px]' key={created_at}>
                <p className='text-[14px]'>{created_at}</p>
                <div className='flex gap-[20px] flex-wrap'>
                  {data.map(({ image, name, expansion }) => (
                    <FileItem image={image} name={name} expansion={expansion} key={name} created_at={created_at} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[20px] 2xl:gap-[30px]'>
        <div className='w-[290px] 2xl:w-[350px] h-[320px] 2xl:h-[440px] bg-[#272727] rounded-[10px]' />
        <div className='w-[290px] 2xl:w-[350px] h-[200px] bg-[#272727] rounded-[10px]' />
      </div>
    </div>
  );
};
