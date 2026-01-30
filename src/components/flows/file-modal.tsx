import deleteIco from '@/src/assets/ico/delete-ico.svg';
import downloadIco from '@/src/assets/ico/download-ico.svg';
import shareIco from '@/src/assets/ico/share-ico.svg';
import { Button } from '@/src/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  image: StaticImageData;
  expansion: string;
  created_at: string;
  name: string;
};

export const FileModal: FC<Props> = ({ children, image, expansion, created_at, name }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
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
