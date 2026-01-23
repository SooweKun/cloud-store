import Test from '@/src/assets/file-items-test.png';
import { FileItem } from './feature/file-item';

const Arr = [
  {
    created_at: '22.01.2026',
    data: [
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
    ],
  },
  {
    created_at: '22.01.2026',
    data: [
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'txt',
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
      <div className='w-[1150px] flex flex-col gap-[20px] pl-[30px] overflow-y-auto'>
        {Arr.map(
          // так же добавить в массив расширение файла и по нему выдавать картинки.
          (
            { created_at, data }, // замапить дату тут нахуя я вообще тогда в комп пихал все ?
          ) => (
            <div className='flex flex-col gap-[5px]' key={created_at}>
              <p className='text-[14px]'>{created_at}</p>
              <div className='flex gap-[20px] flex-wrap'>
                {data.map(({ image, name, expansion }) => (
                  <FileItem image={image} name={name} expansion={expansion} key={name} />
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};
