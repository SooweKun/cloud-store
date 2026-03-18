'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputWithLabel } from '@src/components/feature/input-label';
import { Button } from '@src/components/ui/button';
import { Skeleton } from '@src/components/ui/skeleton';
import { useForm } from 'react-hook-form';
import * as z from 'zod/v4';
import { useRegister } from '../hooks/use-reg';
import { useRegFlowId } from '../hooks/use-reg-flow';

type InputArr = {
  label: string;
  placeholder: string;
  id: number;
  name: keyof RegisterFormType;
  type: string;
};

const Inputs: InputArr[] = [
  {
    label: 'Name',
    placeholder: 'Name',
    id: 1,
    name: 'username',
    type: 'name',
  },
  {
    label: 'Email',
    placeholder: 'Email',
    id: 2,
    name: 'email',
    type: 'email',
  },
  {
    label: 'Password',
    placeholder: 'Password',
    id: 3,
    name: 'password',
    type: 'password',
  },
];

const RegisterFormShema = z.object({
  username: z.string().min(4, { message: 'Имя должно содержать минимум 4 символа' }),
  email: z.email({ message: 'Некорректный email', pattern: z.regexes.html5Email }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать минимум 8 символов' })
    .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру' }),
});

export type RegisterFormType = z.infer<typeof RegisterFormShema>; // пока тут оставлю ( тороплюсь )

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormShema),
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { mutate } = useRegister();
  const { data: flowId, isLoading } = useRegFlowId();
  console.log(flowId, 'flowId in Reg component');

  const onSubmit = (data: RegisterFormType) => {
    const test = {
      ...data,
      flow_id: flowId?.flow_id,
    };
    console.log(test, 'data for back ');

    mutate(test);
  };

  // зарефакторить скелетоны потом

  return (
    <form className='w-full flex flex-col gap-7 pt-10' onSubmit={handleSubmit(onSubmit)} noValidate>
      {Inputs.map(({ label, placeholder, id, name, type }) => (
        <div key={id}>
          {isLoading ? (
            <div className='space-y-2'>
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-8 w-full' />
            </div>
          ) : (
            <InputWithLabel type={type} label={label} placeholder={placeholder} {...register(name)} errorMessage={errors[name]?.message} />
          )}
        </div>
      ))}
      {isLoading ? (
        <div className='space-y-2'>
          <Skeleton className='h-8 w-full' />
        </div>
      ) : (
        <Button variant='secondary' className='bg-[#00C950] hover:bg-[#1A6E16] text-white font-rubik cursor-pointer' type='submit'>
          sing in
        </Button>
      )}
    </form>
  );
};
