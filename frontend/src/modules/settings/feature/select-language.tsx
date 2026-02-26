'use client';

import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/frontend/src/components/ui/combobox';

const filetype = ['English', 'Russian'] as const;

export function SelectLanguage() {
  return (
    <Combobox items={filetype}>
      <ComboboxInput placeholder='English' className='w-[125px] h-[30px] bg-[#6d6d6d] border-[#31B07F] rounded-[10px] [&_input]:text-[12px]' />
      <ComboboxContent>
        <ComboboxEmpty className='text-[12px]'>No languages found.</ComboboxEmpty>
        <ComboboxList className='bg-[#262626]'>
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
