import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(pathnames);

  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            to='/customers'
            className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
            {pathnames[0].charAt(0).toUpperCase() + pathnames[0].slice(1)}
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              className='w-6 h-6 text-gray-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'></path>
            </svg>
            <a
              href='#'
              className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>
              {pathnames[1].charAt(0).toUpperCase() + pathnames[1].slice(1)}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
