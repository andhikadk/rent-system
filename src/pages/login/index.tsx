import React, { useState, useEffect } from 'react';
import Button from '../../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Alert = ({ message }: { message: string }) => {
  return (
    <div
      className='flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-sm bg-neutral-700 dark:text-red-400'
      role='alert'>
      <svg
        aria-hidden='true'
        className='flex-shrink-0 inline w-5 h-5 mr-3'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
          clipRule='evenodd'></path>
      </svg>
      <span className='sr-only'>Info</span>
      <div>
        <span className='font-medium'>{message}</span>
      </div>
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = async () => {
      try {
        const response = await axios.get('/auth/token');
        if (response.data.message === 'Token fetched successfully') {
          navigate('/');
        }
      } catch (error) {}
    };
    token();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', {
        username,
        password,
      });
      if (response.data.message === 'Login successful') {
        navigate('/');
      }
    } catch (error: any) {
      setError(true);
      setErrorMessage(error.response.data.message);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='w-80 md:w-96 bg-neutral-700 rounded-sm shadow-lg p-8'>
        <h3 className='mb-4 text-xl font-medium text-white text-center'>
          Login to your account
        </h3>
        {error && <Alert message={errorMessage} />}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='block mb-2 text-sm font-medium text-white'>
              Username or Email
            </label>
            <input
              type='text'
              name='username'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username or Email'
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-sm focus:outline-0 block w-full p-2.5 dark:border-neutral-500 dark:placeholder-neutral-400'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-white'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-sm focus:outline-0 block w-full p-2.5 dark:border-neutral-500 dark:placeholder-neutral-400'
              required
            />
          </div>
          <div className='flex justify-end'>
            <a
              href='#'
              className='text-sm text-blue-700 hover:underline dark:text-blue-500'>
              Lost Password?
            </a>
          </div>
          <Button color='primary' fullWidth isSubmit>
            Login
          </Button>
          <div className='text-sm font-medium text-white'>
            Not registered?{' '}
            <Link
              to='/register'
              className='text-blue-700 hover:underline dark:text-blue-500'>
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
