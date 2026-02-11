'use client';
import type { FileGroup, FileItem as FileItemType } from '@/src/modules/files/modules';
import { FC, useState } from 'react';
import { FileContext } from '../../modules/files/feature/file-context';
import { FileItem } from './file-item';

type Props = {
  Arr: FileGroup[];
};

export const FileContainer: FC<Props> = ({ Arr }) => {
  const [files, setFiles] = useState<FileGroup[]>(Arr);

  return (
    <FileContext>
      <div className='w-full h-[390px] 2xl:h-[480px] bg-[#272727] rounded-[10px] p-[15px] pb-0 flex flex-col'>
        {files.map(({ created_at, data }) => {
          const sortData = data.sort((a, b) => {
            if (a.expansion === 'folder' && b.expansion !== 'folder') return -1;
            if (a.expansion !== 'folder' && b.expansion === 'folder') return 1;
            return 0;
          });

          const openFolder = (name: string, content?: FileItemType[]) => {
            if (content) {
              setFiles([
                {
                  created_at: name,
                  data: content,
                },
              ]);
            }
          };

          const closeFolder = () => setFiles(Arr);

          //тыак надо переделать полностью рендер и рендерить все файлы обычно без дат а при выборе других фильтров получать новый массив с бекенда

          return (
            <div className='flex flex-col gap-[5px]' key={created_at}>
              <div>{files !== Arr ? <p onClick={closeFolder}>close</p> : <p className='text-[14px]'>{created_at}</p>}</div>
              <div className='flex gap-[20px] flex-wrap'>
                {sortData.map((item) => (
                  <div key={item.name} onClick={() => item.expansion === 'folder' && openFolder(item.name, item.files)}>
                    <FileItem image={item.image} name={item.name} expansion={item.expansion} created_at={created_at} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </FileContext>
  );
};
