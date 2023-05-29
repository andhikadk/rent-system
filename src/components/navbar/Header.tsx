import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiMenu, HiChevronDown } from 'react-icons/hi';
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
    <nav className='flex items-center justify-between p-4 text-white bg-neutral-800'>
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
              <p className='mr-2 font-semibold uppercase'>{user.name}</p>
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
            <Menu.Items className='absolute right-0 z-10 w-48 p-1 mt-6 origin-top-right rounded-sm shadow-md bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate('/profile')}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'w-full text-start active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-not-allowed focus:bg-neutral-800'
                    )}
                    disabled>
                    Your Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => navigate('/settings')}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'w-full text-start active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-neutral-800'
                    )}>
                    Settings
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => logout()}
                    className={classNames(
                      active && 'bg-neutral-600',
                      'w-full text-start active:bg-neutral-800 rounded-sm px-4 py-2 text-white cursor-pointer focus:bg-neutral-800'
                    )}>
                    Log out
                  </button>
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
