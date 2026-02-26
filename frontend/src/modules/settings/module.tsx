import linuxIco from '@/src/assets/ico/linux-ico.svg';
import phoneIco from '@/src/assets/ico/phone-ico.svg';
import windowsIco from '@/src/assets/ico/windows-ico.svg';
import { DeviceTile } from './feature/device-tile';
import { SelectLanguage } from './feature/select-language';

const devices = [
  {
    ico: phoneIco,
    name: 'Yandex 25',
    ip: '38.0.101.76',
    map: 'Orenburg, Russia',
    status: 'online',
  },
  {
    ico: linuxIco,
    name: 'Yandex 25',
    ip: '38.0.101.75',
    map: 'Orenburg, Russia',
    status: 'online',
  },
  {
    ico: windowsIco,
    name: 'Yandex 25',
    ip: '38.0.101.77',
    map: 'Orenburg, Russia',
    status: 'online',
  },
];

export const SettingsModule = () => {
  return (
    <div className='w-full flex flex-col gap-[25px]'>
      <>
        <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
          Current version: v1.0.0 <span className='2xl:text-[14px] text-[12px] pl-2 text-[#6D6D6D]'>on 04.02.26</span>
        </h1>
      </>
      <div className='flex flex-col gap-[15px]'>
        <h1 className='flex flex-col text-[14px] 2xl:text-[16px] w-max'>
          Language <span className='2xl:text-[14px] text-[12px] pl-2 text-[#6D6D6D]'>change the interface language</span>
        </h1>
        <SelectLanguage />
      </div>
      <div className='flex flex-col gap-[15px]'>
        <h1>Devices</h1>
        <div className='w-full flex gap-[20px] flex-wrap'>
          {devices.map(({ ico, name, status, map }) => (
            <DeviceTile ico={ico} name={name} status={status} map={map} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};
