import Avatar from '@/src/assets/test-avatar.jpg';
import Image from 'next/image';

export const HeaderAvatar = () => {
  return (
    <>
      <Image
        src={Avatar}
        alt='nf'
        className='rounded-full size-[35px] hover:shadow-[#31B07F] shadow-[0_0_15px] hover:border border-[#31B07F] cursor-pointer'
      />
      <div className='h-[35px] flex flex-col justify-between items-start '>
        <h1 className='text-[14px] cursor-pointer'>Nickname</h1>
        <p className='text-[12px] text-[#31B07F] hover:underline underline-offset-4 cursor-pointer'>test@mail.ru</p>
      </div>
    </>
  );
};
