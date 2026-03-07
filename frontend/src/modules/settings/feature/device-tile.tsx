import logOut from '@/src/assets/ico/log-out-ico.svg';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Props = {
  ico: StaticImageData;
  name: string;
  status: string;
  map: string;
};

export const DeviceTile: FC<Props> = ({ ico, name, status, map }) => {
  return (
    <div className='group w-[300px] h-[90px] p-[10px] border-2 border-[#272727] rounded-[5px] flex items-start gap-[5px] hover:border-[#31B07F]'>
      <Image src={ico} alt='nf' />
      <div className='flex-col flex w-full h-full select-none'>
        <h1 className='text-[14px]'>{name}</h1>
        <div className='flex gap-[5px] items-center select-none'>
          <p className='text-[12px]'>{map}</p>
          <div className='size-[5px] rounded-full bg-white select-none' />
          <p className='text-[12px] group-hover:text-[#31B07F]'>{status}</p>
        </div>
        <div className='flex h-full items-end justify-end'>
          <Image src={logOut} alt='nf' className='size-[15px] cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
