import Test from '@/src/assets/file-items-test.png';
import { FileItem } from './feature/file-item';

const Arr = [
  {
    created_at: '22.01.2026',
    data: [
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
      {
        image: Test,
        name: 'file name',
      },
    ],
  },
];

export const FilesModule = () => {
  return (
    <div className='w-[1200px] h-[550px] bg-[#272727] rounded-[10px] p-[15px] pb-[30px] flex flex-col gap-[50px]'>
      <div className='w-full h-[30px] flex justify-between'>
        <h1>Files()</h1>
      </div>
      <div className='w-[880px] flex gap-[20px] pl-[30px]'>
        {Arr.map(({ created_at, data }) => (
          <div className='flex flex-col gap-[5px]' key={created_at}>
            <p className='text-[14px]'>{created_at}</p>
            <FileItem data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};
