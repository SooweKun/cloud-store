import logoIco from '@/src/assets/ico/logo-ico.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='w-full h-[65px] bg-background overflow-hidden flex px-[70px] justify-between items-center'>
      <Link href='/' className='flex text-white items-end text-lg'>
        <Image src={logoIco} alt='not found' className='' />
        <h1>CloudStore</h1>
      </Link>
      <div className='flex gap-[15px] text-white text-[16px]'>
        <Link href='/'>Home</Link>
        <Link href=''>About</Link>
        <Link href='/files'>Files</Link>
        <Link href='/profile'>Profile</Link>
      </div>
      <div className='flex gap-[8px] text-white items-center'>
        <Link href='/authorization'>sing in</Link>
        <span className='w-[0.5px] h-[31px] bg-white rounded-2xl' />
        <Link href='/registration'>sing up</Link>
      </div>
    </div>
  );
};
