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

type Props = {
  data: { image: StaticImageData; name: string }[];
};

export const FileItem: FC<Props> = ({ data }) => {
  return (
    <div className='flex gap-[20px] flex-wrap'>
      {data.map(({ image, name }) => (
        <ContextMenu key={name}>
          <ContextMenuTrigger className='flex flex-col justify-start'>
            <Image src={image} alt='nf' className='w-[90px] h-[90px] rounded-[8px]' />
            <p className='pl-[5px] text-[10px]'>{name}</p>
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
      ))}
    </div>
  );
};
