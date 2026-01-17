import { RegisterForm } from './flows/reg-form';

export const RegistrationModule = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[386px] w-full max-h-[450px] h-full min-w-[200px]'>
      <h1 className='text-white font-rubik text-[20px] z-10'>create an account</h1>
      <div className='w-1 h-1 animate-grow bg-[#31B07F] absolute blur-2xl' />
      <RegisterForm />
    </div>
  );
};
