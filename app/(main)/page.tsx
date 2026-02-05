'use client';
import { HomeModule } from '@/src/modules/home/module';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export default function Home() {
  const { data, error } = useVisitorData({ extendedResult: true }, { immediate: true });

  console.log(data, 'data');

  if (error) {
    console.log(error.message, 'err mes');
  }

  return (
    <div className='w-full flex justify-center items-center flex-1'>
      <HomeModule />
    </div>
  );
}
