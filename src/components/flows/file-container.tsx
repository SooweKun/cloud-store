import { FileItem } from '@/src/components/flows/file-item';
import { FC } from 'react';
import { FileContext } from '../../modules/files/feature/file-context';
import { FileGroup } from '../../modules/files/modules';

type Props = {
  Arr: FileGroup[];
};

export const FileContainer: FC<Props> = ({ Arr }) => {
  return (
    <FileContext>
      <div className='w-full h-[390px] 2xl:h-[480px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col gap-[25px]'>
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
