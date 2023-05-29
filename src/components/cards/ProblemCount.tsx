const ProblemCustomer = () => {
  return (
    <div className='min-h-fit bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>
          Total Problem Customers
        </strong>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        <div className='flex flex-row items-center bg-[#ff555597] rounded-sm p-4'>
          <p className='text-white'>1 Customer</p>
        </div>
        <div className='flex flex-row items-center bg-[#ca8b04cb] rounded-sm p-4'>
          <p className='text-white'>4 Customers</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemCustomer;
