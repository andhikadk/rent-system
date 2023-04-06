import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../navbar/Sidebar';
import Header from '../navbar/Header';
import { ImSpinner } from 'react-icons/im';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = async () => {
      try {
        await axios.get('/auth/token');
      } catch (error) {
        navigate('/login');
      }
    };
    token();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
      {isOpen && <Sidebar isOpen={isOpen} />}
      {/* <Sidebar isOpen={isOpen} /> */}
      <div className='flex flex-col flex-1'>
        <Header toggle={toggle} />
        <Suspense
          fallback={
            <div className='bg-neutral-800 h-screen'>
              <div className='flex flex-col items-center justify-center h-full'>
                <ImSpinner className='animate-spin text-4xl text-white' />
                {/* <span className='text-white text-xl font-semibold mt-4'>
                  Loading...
                </span> */}
              </div>
            </div>
          }>
          <div className='p-4 w-full max-w-[100rem] overflow-auto self-center'>
            {children}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
