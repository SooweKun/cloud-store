import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

type Props = {
  data: { image: StaticImageData; name: string }[];
};

export const FileItem: FC<Props> = ({ data }) => {
  return (
    <div className='flex gap-[20px] flex-wrap'>
      {data.map(({ image, name }) => (
        <div className='flex flex-col justify-start' key={name}>
          <Image src={image} alt='nf' className='w-[90px] h-[90px] rounded-[8px]' />
          <p className='pl-[5px] text-[10px]'>{name}</p>
        </div>
      ))}
    </div>
  );
};
