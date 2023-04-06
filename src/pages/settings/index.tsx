import MainLayout from '../../components/layout/MainLayout';

const Settings = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Settings</h1>
      {/* buat tombol untuk upload gambar dan simpan gambar tersebut di folder public/assets/images */}
      <form action=''>
        <div className='flex flex-col gap-4 w-96'>
          <label
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            htmlFor='user_avatar'>
            Upload Logo
          </label>
          <input
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            aria-describedby='user_avatar_help'
            id='user_avatar'
            type='file'
          />
        </div>
        <div className='flex justify-start mt-4'>
          <button
            type='submit'
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'>
            Save
          </button>
        </div>
      </form>
    </MainLayout>
  );
};

export default Settings;
