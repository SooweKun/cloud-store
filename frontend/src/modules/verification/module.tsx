import { VerificationForm } from './flows/verification-form';

export const VerificationModule = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center max-w-[386px] w-full max-h-[450px] h-full min-w-[200px]'>
      <h1 className='text-white font-rubik text-[20px] z-10'>verification account</h1>
      <div className='w-1 h-1 animate-grow bg-[#31B07F] absolute blur-2xl' />
      <VerificationForm />
    </div>
  );
};
