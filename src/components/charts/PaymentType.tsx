import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { paymentTypeData } from '../../store';
import { useRecoilValue } from 'recoil';

const colors = ['#0284c7', '#ca8a04'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
      className='text-sm'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface Payment {
  total: number;
  payment_type: string;
}

interface Repayment {
  total: number;
  repayment_type: string;
}

interface PaymentData {
  payment: Payment[];
  repayment: Repayment[];
}

const PaymentType = () => {
  const data = useRecoilValue(paymentTypeData);
  let bca: number = 0;
  let tunai: number = 0;

  data.forEach((item: PaymentData) => {
    item.payment.forEach((payment: Payment) => {
      if (payment.payment_type === 'BCA') {
        bca += payment.total;
      } else if (payment.payment_type === 'Tunai') {
        tunai += payment.total;
      }
    });
    item.repayment.forEach((repayment: Repayment) => {
      if (repayment.repayment_type === 'BCA') {
        bca += repayment.total;
      } else if (repayment.repayment_type === 'Tunai') {
        tunai += repayment.total;
      }
    });
  });

  const datas = [
    {
      name: 'BCA',
      value: bca,
    },
    {
      name: 'Tunai',
      value: tunai,
    },
  ];
  return (
    <div className='h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <strong className='text-white font-medium'>Payment Type</strong>
      <div className='mt-3 w-full flex-1 text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={400} height={300}>
            <Pie
              data={datas}
              cx='50%'
              cy='45%'
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill='#8884d8'
              blendStroke
              isAnimationActive={false}
              onClick={() => {}}
              dataKey='value'>
              {datas.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PaymentType;
