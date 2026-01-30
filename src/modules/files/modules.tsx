import Test2 from '@/src/assets/file-item-test2.jpg';
import Test from '@/src/assets/file-items-test.png';
import mdIco from '@/src/assets/ico/md-ico.svg';
import { FileItem } from '@/src/components/flows/file-item';
import { DatePicker } from '@/src/components/ui/date-picker';
import { Input } from '@/src/components/ui/input';
import { Progress } from '@/src/components/ui/progress';
import { SelectType } from './feature/select-type';

const Arr = [
  {
    created_at: '22.01.2026',
    data: [
      {
        image: Test2,
        name: 'file name',
        expansion: 'png',
      },
      {
        image: Test,
        name: 'file name',
        expansion: 'png',
      },
      {
        image: mdIco,
        name: 'file name',
        expansion: 'md',
      },
    ],
  },
];

export const FilesModule = () => {
  return (
    <div className='w-[1200px] h-[550px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col'>
      <div className='w-full h-[30px] flex justify-between'>
        <h1>Files()</h1>
        <div className='flex gap-[30px]'>
          <DatePicker />
          <SelectType />
          <Input className='w-[330px] h-[25px]' placeholder='enter file name' />
        </div>
      </div>
      <div className='w-[1150px] flex flex-col flex-1 gap-[20px] pl-[30px] overflow-y-auto mt-[40px]'>
        {Arr.map(({ created_at, data }) => (
          <div className='flex flex-col gap-[5px]' key={created_at}>
            <p className='text-[14px]'>{created_at}</p>
            <div className='flex gap-[20px] flex-wrap'>
              {data.map(({ image, name, expansion }) => (
                <FileItem image={image} name={name} expansion={expansion} key={name} created_at={created_at} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='w-full h-[45px] flex px-[5px] items-center'>
        <div className='flex flex-col items-center gap-[5px]'>
          <Progress className='w-[100px] h-[6px] bg-[#6D6D6D]' value={47} indicatorClassName='bg-[#35AA75]' />
          <p className='text-xs'>storage 47%</p>
        </div>
      </div>
    </div>
  );
};
