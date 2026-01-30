import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/src/components/ui/context-menu';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { FileModal } from './file-modal';

type Props = {
  image: StaticImageData;
  name: string;
  expansion: string;
  created_at: string;
};

export const FileItem: FC<Props> = ({ image, name, expansion, created_at }) => {
  return (
    <ContextMenu>
      <FileModal image={image} name={name} expansion={expansion} created_at={created_at}>
        <ContextMenuTrigger className='flex flex-col items-start cursor-pointer'>
          <div
            className={`w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] flex justify-center items-center bg-a rounded-[8px] ${expansion === 'png' ? 'p-0' : 'p-[20px]'}`}>
            <Image src={image} alt='nf' className='w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-[8px]' />
          </div>
          <p className='pl-[5px] text-[10px]'>
            {name}.{expansion}
          </p>
        </ContextMenuTrigger>
      </FileModal>
      <ContextMenuContent className='w-20'>
        <ContextMenuGroup>
          <ContextMenuItem>
            Download
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Share
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Star
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <p className='text-red-400'>Delete</p>
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};
