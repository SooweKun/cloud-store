import { FileItem } from '@/src/components/flows/file-item';
import { FC } from 'react';
import { FileGroup } from '../modules';
import { FileContext } from './file-context';

type Props = {
  Arr: FileGroup[];
};

export const FileContainer: FC<Props> = ({ Arr }) => {
  return (
    <FileContext>
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
    </FileContext>
  );
};
