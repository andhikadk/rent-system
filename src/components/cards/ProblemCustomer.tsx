import classNames from 'classnames';

const problemOrders = [
  {
    payment: {
      type: '',
      amount: 0,
    },
    repayment: {
      type: '',
      amount: 0,
    },
    _id: '640c9df9604f97949dc619d3',
    id: 5941,
    served_by: 'Rohman',
    pickup_date: '2022-12-01T00:00:00.000Z',
    return_date: '2023-01-01T00:00:00.000Z',
    duration: 744,
    price: 7500000,
    discount: 0.2,
    total_cost: 6000000,
    remaining_cost: 6000000,
    received_by: '',
    note: 'PENCURIAN KAMERA / ASET OMAH VISUAL',
    status: 'problem',
    cust_id: {
      _id: '6429b01d1c5325e51ccaf995',
      name: 'Yayang Budi Armando',
    },
    __v: 0,
    createdAt: '2023-01-08',
    updatedAt: '2023-01-08',
    units: ['IPHONE 12 PROMAX 128GB'],
  },
  {
    payment: {
      type: 'Tunai',
      amount: 50000,
    },
    repayment: {
      type: 'BCA',
      amount: 600000,
    },
    _id: '640c9df9604f97949dc61a88',
    id: 6047,
    served_by: 'Rohman',
    pickup_date: '2022-12-12T13:00:00.000Z',
    return_date: '2022-12-17T13:00:00.000Z',
    duration: 120,
    price: 900000,
    discount: 0,
    total_cost: 900000,
    remaining_cost: 250000,
    received_time: '2023-01-30T14:02:24.000Z',
    received_by: 'Rohman',
    note: 'follow up wa  terakhir 23/01/2023',
    status: 'unpaid',
    cust_id: {
      _id: '6429b01d1c5325e51ccaf9d4',
      name: 'Charlene Felicia Lael',
    },
    __v: 0,
    createdAt: '2023-01-30',
    updatedAt: '2023-01-30',
    units: ['IPHONE 11 PRO 64GB OV 2'],
  },
  {
    payment: {
      type: '',
      amount: 0,
    },
    repayment: {
      type: '',
      amount: 0,
    },
    _id: '640c9df9604f97949dc6182a',
    id: 5867,
    served_by: 'Sahid',
    pickup_date: '2022-12-02T03:00:00.000Z',
    return_date: '2022-12-03T03:00:00.000Z',
    duration: 24,
    price: 60000,
    discount: 0.3,
    total_cost: 42000,
    remaining_cost: 42000,
    received_time: '2022-12-03T05:41:43.000Z',
    received_by: 'Burhan',
    note: '',
    status: 'unpaid',
    cust_id: {
      _id: '6429b01d1c5325e51ccaf9c7',
      name: 'Anton Wisnu Wijaya ',
    },
    __v: 0,
    createdAt: '2022-12-03',
    updatedAt: '2022-12-03',
    units: ['TRIPOD EXCEL', 'RODE MIC PRO'],
  },
  {
    payment: {
      type: '',
      amount: 0,
    },
    repayment: {
      type: '',
      amount: 0,
    },
    _id: '640c9df9604f97949dc61837',
    id: 5906,
    served_by: 'Dino',
    pickup_date: '2022-12-03T03:00:00.000Z',
    return_date: '2022-12-03T09:00:00.000Z',
    duration: 6,
    price: 235000,
    discount: 0.3,
    total_cost: 164500,
    remaining_cost: 164500,
    received_time: '2022-12-03T12:53:28.000Z',
    received_by: 'Burhan',
    note: '',
    status: 'unpaid',
    cust_id: {
      _id: '6429b01d1c5325e51ccaf925',
      name: 'Yusuf Nashirul Haq',
    },
    __v: 0,
    createdAt: '2022-12-03',
    updatedAt: '2022-12-03',
    units: [
      'SONY A6000 BO ( OV 6 )',
      'SIGMA 30mm F1.4 APSC (OV 1)',
      'CANON 70-200mm F2.8 IS',
    ],
  },
  {
    payment: {
      type: 'BCA',
      amount: 300000,
    },
    repayment: {
      type: '',
      amount: 0,
    },
    _id: '640c9df9604f97949dc61a89',
    id: 5960,
    served_by: 'Dino',
    pickup_date: '2022-12-07T05:00:00.000Z',
    return_date: '2022-12-09T05:00:00.000Z',
    duration: 48,
    price: 400000,
    discount: 0,
    total_cost: 400000,
    remaining_cost: 100000,
    received_time: '2023-01-30T14:03:26.000Z',
    received_by: 'Rohman',
    note: 'terakhir follow up di wa 23.01.2023',
    status: 'unpaid',
    cust_id: {
      _id: '6429b01d1c5325e51ccafa05',
      name: 'umbar prihanti',
    },
    __v: 0,
    createdAt: '2023-01-30',
    updatedAt: '2023-01-30',
    units: ['IPHONE 11 PROMAX 64GB'],
  },
];

const ProblemCustomer = () => {
  return (
    <div className='flex flex-col p-4 rounded-sm min-h-fit bg-neutral-700'>
      <div className='flex justify-between'>
        <strong className='mb-1 font-medium text-white'>Problem Orders</strong>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        {problemOrders
          .map((order) => (
            <div
              key={order._id}
              className={classNames(
                'flex flex-row items-center rounded-sm p-2',
                order.status === 'unpaid' && 'bg-[#ca8b04cb]',
                order.status === 'problem' && 'bg-[#ff555597]'
              )}>
              <div className='flex-1'>
                <p className='text-sm text-white'>{order.cust_id.name}</p>
                <span className='text-xs font-medium text-neutral-300'>
                  {order.units}
                </span>
              </div>
              <div className='text-sm text-end font-medium text-white pl-1.5'>
                <p>
                  {order.total_cost.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  })}
                </p>
                <span className='text-xs font-medium text-neutral-300'>
                  {order.createdAt}
                </span>
              </div>
            </div>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default ProblemCustomer;
