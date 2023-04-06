import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineSearch, HiPlus, HiPencilAlt, HiX } from 'react-icons/hi';
import DataTable from 'react-data-table-component';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Unit } from '../../types';
import { unitsState, unitsData } from '../../store';
import Button from '../common/Button';

const columns = [
  {
    name: 'ID',
    selector: (row: Unit) => row.id,
    sortable: true,
    width: '70px',
    center: true,
  },
  {
    name: 'NAMA',
    selector: (row: Unit) => row.name,
    sortable: true,
  },
  {
    name: 'KAETEGORI',
    selector: (row: Unit) => row.category,
    sortable: true,
    width: '200px',
  },
  {
    name: 'TIPE',
    selector: (row: Unit) => row.type,
    sortable: true,
    width: '150px',
  },
  {
    name: 'KODE',
    selector: (row: Unit) => row.code,
    sortable: true,
    width: '120px',
  },
  {
    name: 'OWNER',
    selector: (row: Unit) => row.owner,
    sortable: true,
    width: '120px',
  },
  {
    name: 'LOKASI',
    selector: (row: Unit) => row.location,
    sortable: true,
    width: '100px',
    center: true,
  },
  {
    name: 'STATUS',
    selector: (row: Unit) => row.status,
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

const TableUnit = () => {
  const data = useRecoilValue(unitsData);
  const [units, setUnits] = useRecoilState(unitsState);
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);
  const [unitDetail, setUnitDetail] = useState<Unit>();

  const filteredItems = units.filter((item: Unit) =>
    Object.keys(item)
      .map((key) => String(item[key]))
      .join(' ')
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  useEffect(() => {
    setUnits(data.data);
  }, [data]);

  const onRowClicked = (row: Unit) => {
    setModal(true);
    setUnitDetail(row);
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
          <Link to='/units/add'>
            <Button color='primary'>
              <HiPlus fontSize={20} className='mr-2' />
              Add Unit
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
                    {unitDetail &&
                      Object.keys(unitDetail).map((key) => {
                        if (key === '_id' || key === 'rates') return null;
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
                            <td className='px-6 py-4'>{unitDetail[key]}</td>
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

export default TableUnit;
