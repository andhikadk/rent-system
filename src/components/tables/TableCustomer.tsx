import { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { HiOutlineSearch, HiPlus, HiPencilAlt, HiX } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { Customer } from '../../types';
import { customersData } from '../../store';
import Button from '../common/Button';

const columns = [
  {
    name: 'ID',
    selector: (row: Customer) => row.id,
    sortable: true,
    width: '70px',
    center: true,
  },
  {
    name: 'NAMA',
    selector: (row: Customer) => row.name,
    sortable: true,
    grow: 2,
  },
  {
    name: 'INSTAGRAM',
    selector: (row: Customer) => row.instagram,
    sortable: true,
  },
  {
    name: 'NO HP',
    selector: (row: Customer) => row.phone,
    sortable: true,
    hide: 'md',
  },
  {
    name: 'ALAMAT',
    selector: (row: Customer) => row.address,
    sortable: true,
    width: '360px',
    hide: 'lg',
  },
  {
    name: 'TIPE',
    selector: (row: Customer) => row.type,
    sortable: true,
    width: '100px',
    center: true,
  },
  {
    name: 'AKSI',
    cell: () => (
      <Button color='secondary'>
        <HiPencilAlt fontSize={20} className='mr-2' /> Edit
      </Button>
    ),
    sortable: true,
    width: '120px',
    center: true,
  },
];

const tableStyle: {} = {
  table: {
    style: {
      zIndex: 0,
    },
  },
  headRow: {
    style: {
      backgroundColor: 'rgb(38 38 38)',
      color: '#fff',
      borderBottomWidth: '1px',
    },
  },
  cells: {
    style: {
      borderRight: '1px solid rgb(84 84 84)',
    },
  },
  rows: {
    style: {
      backgroundColor: 'rgb(56 56 56)',
    },
    highlightOnHoverStyle: {
      backgroundColor: 'rgb(84 84 84)',
    },
    stripedStyle: {
      backgroundColor: 'rgb(64 64 64)',
    },
  },
  pagination: {
    style: {
      minHeight: '45px',
      backgroundColor: 'rgb(56 56 56)',
    },
  },
};

const TableCustomer = () => {
  const customers = useRecoilValue(customersData);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [customerDetail, setCustomerDetail] = useState<Customer>();

  const filteredItems = customers.filter((item: Customer) =>
    Object.keys(item)
      .filter((key) => key !== 'user')
      .map((key) => String(item[key]))
      .join(' ')
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const onRowClicked = (row: Customer) => {
    setModal(true);
    setCustomerDetail(row);
  };

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div className='relative mb-4'>
          <HiOutlineSearch
            fontSize={20}
            className='text-neutral-300 absolute top-1/2 left-3 -translate-y-1/2'
          />
          <input
            type='text'
            placeholder='Search...'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='bg-neutral-700 text-sm text-white focus:outline-none active:outline-none border border-neutral-700 w-[24rem] h-10 pl-10 pr-4 rounded-sm'
          />
        </div>
        <div className=''>
          <Link to='/customers/add'>
            <Button color='primary'>
              <HiPlus fontSize={20} className='mr-2' />
              Add Customer
            </Button>
          </Link>
        </div>
      </div>
      <DataTable
        // @ts-expect-error
        columns={columns}
        data={filteredItems}
        pagination
        paginationPerPage={10}
        highlightOnHover
        pointerOnHover
        fixedHeader
        fixedHeaderScrollHeight='600px'
        theme='dark'
        customStyles={tableStyle}
        persistTableHead
        responsive
        striped
        onRowClicked={(row) => onRowClicked(row)}
      />
      {modal && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center'>
          <div className='bg-neutral-50 dark:bg-neutral-700 max-w-[40rem] rounded-sm p-6 shadow-lg z-50'>
            <div className='flex justify-between items-center'>
              <h1 className='text-xl text-white font-bold'>Customer Details</h1>
              <div className='flex'>
                <button
                  onClick={() => setModal(false)}
                  className='text-neutral-900 dark:text-neutral-200 ml-4'>
                  <HiX fontSize={24} />
                </button>
              </div>
            </div>
            <div className='mt-4 text-neutral-900 dark:text-neutral-100'>
              <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left text-white'>
                  <tbody>
                    {customerDetail &&
                      Object.keys(customerDetail).map((key) => {
                        if (key === '_id') return null;
                        return (
                          <tr
                            key={key}
                            className='bg-white border-b dark:bg-neutral-700 dark:border-neutral-700'>
                            <th
                              scope='row'
                              className='px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white'
                              style={{ backgroundColor: 'rgb(38 38 38)' }}>
                              {key.toUpperCase()}
                            </th>
                            <td className='px-6 py-4'>{customerDetail[key]}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            onClick={() => setModal(false)}
            className='fixed top-0 left-0 w-screen h-screen bg-neutral-900 bg-opacity-70 z-40'></div>
        </div>
      )}
    </div>
  );
};

export default TableCustomer;
