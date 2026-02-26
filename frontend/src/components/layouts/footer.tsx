import Link from 'next/link';

const Links = [
  {
    header: 'Follow us',
    subs: ['Discord', 'Github', 'Youtube', 'Telegram'],
    cols: 2,
  },
  {
    header: 'Learn',
    subs: ['Help', 'Developers', 'Blog', 'About'],
    cols: 2,
  },
  {
    header: 'Resources',
    subs: ['System status', 'Privacy policy', 'License overview', 'Terms of sirvice', 'Security'],
    cols: 3,
  },
  {
    header: 'Overview',
    subs: ['Sync', 'Publish', 'Canvas', 'Mobile', 'Web Clipper', 'Plugins'],
    cols: 3,
  },
];

export const Footer = () => {
  return (
    <div className='w-full h-[120px] bg-background flex gap-[50px] items-start py-[10px] px-[70px]'>
      {Links.map(({ header, subs, cols }) => (
        <div className='flex flex-col gap-[5px]' key={header}>
          <h1 className='text-d text-[16px]'>{header}</h1>
          <div
            className='text-white text-[14px] font-bold grid gap-[15px] gap-y-[5px] w-fit'
            style={{
              gridTemplateColumns: `repeat(${cols}, max-content)`,
            }}>
            {subs.map((value) => (
              <Link href='' key={value}>
                {value}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
