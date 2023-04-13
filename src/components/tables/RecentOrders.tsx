import DataTable from 'react-data-table-component';
import { useRecoilValue } from 'recoil';
import { ordersData } from '../../store';
import { Order } from '../../types';
import Badge from '../common/Badge';

const columns = [
  {
    name: 'ID',
    selector: (row: Order) => row.id,
    width: '70px',
    center: true,
  },
  {
    name: 'TGL',
    selector: (row: Order) => row.createdAt,
    width: '120px',
    center: true,
  },
  {
    name: 'NAMA',
    selector: (row: Order) => row.cust_id.name,
  },
  {
    name: 'HARGA',
    selector: (row: Order) =>
      row.total_cost.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }),
    width: '120px',
  },
  {
    name: 'PJ',
    selector: (row: Order) => row.served_by,
    width: '120px',
  },
  {
    name: 'STATUS',
    cell: (row: Order) => (
      <Badge
        color={
          row.status === 'paid'
            ? 'success'
            : row.status === 'unpaid'
            ? 'warning'
            : 'danger'
        }>
        {row.status}
      </Badge>
    ),
    width: '100px',
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
      backgroundColor: 'rgb(42 42 42)',
      color: '#fff',
      borderBottomWidth: '1px',
      minHeight: '36px',
      fontSize: '12px',
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

const RecentOrders = () => {
  const orders = useRecoilValue<Order[]>(ordersData);
  const data = [...orders].reverse().slice(0, 5);

  return (
    <div className='h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium'>Recent Orders</strong>
      </div>
      <div className='mt-4 flex flex-col'>
        <DataTable
          columns={columns}
          data={data}
          customStyles={tableStyle}
          theme='dark'
          responsive
          striped
        />
      </div>
    </div>
  );
};

export default RecentOrders;
