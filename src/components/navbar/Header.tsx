import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineSearch, HiMenu, HiChevronDown } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { authUser } from '../../store';

const Header = ({ toggle }: any) => {
  const user = useRecoilValue(authUser);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.delete('/auth/logout');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className='bg-neutral-800 p-4 flex items-center text-white justify-between'>
      <div className='flex items-center gap-2'>
        <HiMenu
          fontSize={24}
          className='cursor-pointer'
          onClick={() => toggle()}
        />
      </div>
      <div className='flex items-center gap-2 mr-2'>
        <Menu as='div' className='relative'>
          <div>
            <Menu.Button className='flex flex-row'>
              <span className='sr-only'>Open user menu</span>
              <p className='uppercase font-semibold mr-2'>{user.name}</p>
              <HiChevronDown fontSize={20} />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-right z-10 absolute right-0 mt-6 w-48 rounded-sm shadow-md p-1 bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate('/profile')}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-neutral-800'
                    )}>
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate('/settings')}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-neutral-800'
                    )}>
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => logout()}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-neutral-800'
                    )}>
                    Log out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Header;
