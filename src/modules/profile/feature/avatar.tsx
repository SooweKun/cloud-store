import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/src/components/ui/context-menu';

export function Avatar() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className='group w-[125px] h-[125px] bg-[#272727] rounded-[5px] cursor-pointer relative flex justify-center items-center'>
        <p className='text-white text-center opacity-0 group-hover:opacity-100'>right click to change</p>
      </ContextMenuTrigger>
      <ContextMenuContent className='w-48'>
        <ContextMenuGroup>
          <ContextMenuItem>
            <p className='text-red-400'>Back</p>
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            New avatar
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
