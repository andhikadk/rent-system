import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const NotFound = () => {
  return (
    <section className='flex items-center h-screen p-16 dark:bg-neutral-900 dark:text-neutral-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl dark:text-neutral-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 dark:text-neutral-400'>
            Please check the URL in the address bar and try again.
          </p>
          <Link to='/' className='flex justify-center'>
            <Button color='primary'>Back to homepage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
