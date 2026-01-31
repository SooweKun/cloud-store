import Test2 from '@/src/assets/file-item-test2.jpg';
import Test from '@/src/assets/file-items-test.png';
import mdIco from '@/src/assets/ico/md-ico.svg';
import newFileIco from '@/src/assets/ico/new-file-ico.svg';
import newFolderIco from '@/src/assets/ico/new-folder-ico.svg';
import { Button } from '@/src/components/ui/button';
import { DatePicker } from '@/src/components/ui/date-picker';
import { Input } from '@/src/components/ui/input';
import { Progress } from '@/src/components/ui/progress';
import Image, { StaticImageData } from 'next/image';
import { FileContainer } from '../../components/flows/file-container';
import { SelectType } from './feature/select-type';

type FileItem = {
  image: StaticImageData;
  name: string;
  expansion: string;
};

export type FileGroup = {
  created_at: string;
  data: FileItem[];
};

const Arr: FileGroup[] = [
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
    <div className='w-[1200px] h-[550px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col justify-between'>
      <div className='w-full h-[30px] flex justify-between'>
        <h1>Files()</h1>
        <div className='flex gap-[30px]'>
          <DatePicker />
          <SelectType />
          <Input className='w-[330px] h-[25px]' placeholder='enter file name' />
        </div>
      </div>
      <FileContainer Arr={Arr} />
      <div className='w-full h-[45px] flex px-[5px] items-center flex justify-between'>
        <div className='flex flex-col items-center gap-[5px]'>
          <Progress className='w-[100px] h-[6px] bg-[#6D6D6D]' value={47} indicatorClassName='bg-[#35AA75]' />
          <p className='text-xs'>storage 47%</p>
        </div>
        <div className='flex gap-[10px]'>
          <Button className='p-3 hover:bg-a bg-transparent size-[35px]' variant='default'>
            <Image src={newFolderIco} alt='nf' />
          </Button>
          <Button className='p-3 hover:bg-a bg-transparent size-[35px]' variant='default'>
            <Image src={newFileIco} alt='nf' />
          </Button>
        </div>
      </div>
    </div>
  );
};
