import homeBanner from '@/src/assets/home-banner.png';
import markIco from '@/src/assets/mark.svg';
import Image from 'next/image';

export const InfoTile = () => {
  return (
    <div className='w-[245px] 2xl:w-[350px] 2xl:h-[170px] rounded-[10px] flex items-end relative overflow-hidden cursor-pointer'>
      <Image src={markIco} alt='nf' className='absolute top-[11px] right-[11px] cursor-pointer' />
      <Image src={homeBanner} alt='nf' className='w-full h-full' />
      <div className='clip w-[250px] h-[75px] 2xl:w-[355px] 2xl:h-[115px] bg-a pl-[10px] p-[5px] pl-[10px] pr-[15px] absolute bottom-[-1px] left-[-2px] flex flex-col gap-[5px] font-light'>
        {/* <h1 className='text-[12px] flex w-max'>New Features</h1> */}
        {/* <p className='text-[10px]'>This year we are offering even more functionality and activities for our users.</p> */}
      </div>
    </div>
  );
};
