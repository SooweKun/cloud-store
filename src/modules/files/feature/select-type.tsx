'use client';

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/src/components/ui/combobox';

const filetype = ['png', 'svg', 'md', 'text', 'webp'] as const;

export function SelectType() {
  return (
    <Combobox items={filetype}>
      <ComboboxInput placeholder='Select a type' className='w-[120px] h-[25px] bg-[#343434] rounded-[10px] [&_input]:text-[12px]' />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList className='bg-[#343434]'>
          {(item) => (
            <ComboboxItem key={item} value={item} className='text-[12px]'>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
