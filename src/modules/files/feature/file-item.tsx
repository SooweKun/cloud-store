import deleteIco from '@/src/assets/ico/delete-ico.svg';
import downloadIco from '@/src/assets/ico/download-ico.svg';
import shareIco from '@/src/assets/ico/share-ico.svg';
import { Button } from '@/src/components/ui/button';
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
        <ContextMenuTrigger className='flex flex-col items-start cursor-pointer' asChild>
          <DialogTrigger>
            <div
              className={`w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] flex justify-center items-center bg-a rounded-[8px] ${expansion === 'png' ? 'p-0' : 'p-[20px]'}`}>
              <Image src={image} alt='nf' className='w-[90px] h-[90px] lg:w-[70px] lg:h-[70px] rounded-[8px]' />
            </div>
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
        <Image src={image} alt='nf' className={`size-[400px] rounded-l-[10px] ${expansion === 'png' ? 'p-0' : 'p-10'}`} />
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
          <div className='w-full justify-between flex'>
            <Button className='p-[14px] ' variant='ghost'>
              <Image src={deleteIco} alt='nf' />
            </Button>
            <div className='flex gap-[10px]'>
              <Button className='p-[14px] ' variant='ghost'>
                <Image src={shareIco} alt='nf' />
              </Button>
              <Button className='p-[14px] ' variant='ghost'>
                <Image src={downloadIco} alt='nf' />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
