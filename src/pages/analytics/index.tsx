import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import AnalyticStats from '../../components/cards/AnalyticStats';
import { AnalyticsLinks } from '../../constants';

type Props = {
  children: React.ReactNode;
};

const Analytics: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Analytics</h1>
      <div className='flex flex-col gap-4'>
        <AnalyticStats />
        <div className='mb-4 text-sm font-medium text-center text-neutral-500 border-b border-neutral-200 dark:text-neutral-400 dark:border-neutral-700'>
          <ul className='flex flex-wrap -mb-px'>
            {AnalyticsLinks.map((link) => (
              <li key={link.key} className='-mb-px mr-8 last:mr-0'>
                <Link
                  to={link.path}
                  className={classNames(
                    'inline-flex items-center justify-center py-4 border-b-2 border-transparent',
                    pathname === link.path
                      ? 'border-blue-500 text-blue-500'
                      : 'text-neutral-500 hover:text-neutral-400 hover:border-neutral-300'
                  )}>
                  {link.icon}
                  <span className='ml-1'>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </MainLayout>
  );
};

export default Analytics;
