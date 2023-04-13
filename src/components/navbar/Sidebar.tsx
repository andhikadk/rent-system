import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import {
  SidebarLink,
  TopSidebarLinks,
  BottomSidebarLinks,
} from '../../constants/index';

const SidebarLinks = ({ link }: { link: SidebarLink }) => {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname.startsWith(link.path) && link.path !== '/'
          ? 'bg-neutral-700 text-white'
          : 'text-neutral-400',
        pathname === link.path && link.path === '/'
          ? 'bg-neutral-700 text-white'
          : 'text-neutral-400',
        'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-sm text-base'
      )}>
      <span className='text-xl'>{link.icon}</span>
      {link.label}
    </Link>
  );
};

const Sidebar = ({ isOpen }: any) => {
  return (
    <aside
      className={classNames(
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'flex flex-col bg-neutral-800 w-60 p-3 text-white transition-all duration-300 ease-in-out'
      )}>
      <div className='flex items-center justify-center gap-2 px-1 py-3'>
        <h1 className='text-neutral-100 font-bold text-xl'>
          Omah Visual Camera
        </h1>
      </div>
      <div className='py-4 flex flex-1 flex-col gap-0.5'>
        {TopSidebarLinks.map((link) => (
          <SidebarLinks key={link.key} link={link} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {BottomSidebarLinks.map((link) => (
          <SidebarLinks key={link.key} link={link} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
