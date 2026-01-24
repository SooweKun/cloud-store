import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/src/components/ui/context-menu';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Props = {
  image: StaticImageData;
  name: string;
  expansion: string;
  created_at: string;
};

export const FileItem: FC<Props> = ({ image, name, expansion, created_at }) => {
  return (
    <Dialog>
      <ContextMenu>
        <ContextMenuTrigger className='flex flex-col justify-start cursor-pointer' asChild>
          <DialogTrigger>
            <Image src={image} alt='nf' className='w-[90px] h-[90px] rounded-[8px]' />
            <p className='pl-[5px] text-[10px]'>
              {name}.{expansion}
            </p>
          </DialogTrigger>
        </ContextMenuTrigger>
        <ContextMenuContent className='w-20'>
          <ContextMenuGroup>
            <ContextMenuItem>
              Download
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Share
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Star
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <p className='text-red-400'>Delete</p>
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <DialogContent className='p-0 flex gap-[10px] !max-w-none w-max'>
        <Image src={image} alt='nf' className='size-[400px] rounded-l-[10px]' />
        <div className='w-[230px] flex flex-col p-[10px] justify-between'>
          <div className='flex flex-col gap-[25px] '>
            <h1>Information</h1>
            <div>
              <p>
                Name: <span>{name}</span>
              </p>
              <p>
                Size: <span>{name}</span>
              </p>
              <p>
                Save as: <span>{created_at}</span>
              </p>
            </div>
          </div>
          <div className='w-full justify-between flex'></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
