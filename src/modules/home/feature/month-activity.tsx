const Arr = [
  {
    id: 1,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 2,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 3,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 4,
    bg: '#35AA75',
    activity: 3,
  },
  {
    id: 5,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 6,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 7,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 8,
    bg: '#35AA75',
    activity: 3,
  },
  {
    id: 9,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 10,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 11,
    bg: '#35AA75',
    activity: 3,
  },
  {
    id: 12,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 13,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 14,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 15,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 16,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 17,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 18,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 19,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 20,
    bg: '#006239',
    activity: 3,
  },
  {
    id: 21,
    bg: '#35AA75',
    activity: 5,
  },
  {
    id: 22,
    bg: '#1F1F1F',
    activity: 0,
  },
  {
    id: 22,
    bg: '#006239',
    activity: 3,
  },
];

export const MonthActivity = () => {
  const firstline = Arr.slice(0, 3);
  const afterline = Arr.slice(3);

  return (
    <div className='lg:w-[245px] w-full max-w-[350px] lg:h-[125px] h-full max-h-[170px] bg-[#272727] rounded-[10px] p-[15px] flex flex-col gap-[5px]'>
      <div className='flex justify-between items-end'>
        <h1 className='flex flex-col text-[14px] w-max'>
          Month activity <span className='text-[10px] pl-2'>data on 09.01.26</span>
        </h1>
        <div className='flex gap-[10px]'>
          {firstline.map(({ id, bg }) => (
            <div className='w-[15px] h-[15px] rounded-[5px]' key={id} style={{ backgroundColor: bg }} />
          ))}
        </div>
      </div>
      <div className='w-fit h-full flex flex-wrap gap-x-[10px] lg:gap-y-[5px]'>
        {afterline.map(({ id, bg }) => (
          <div className='w-[15px] h-[15px] rounded-[5px]' key={id} style={{ backgroundColor: bg }} />
        ))}
      </div>
    </div>
  );
};
