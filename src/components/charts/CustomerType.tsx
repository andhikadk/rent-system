import React, { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useRecoilState, useRecoilValue } from 'recoil';
import { customerState, customersData } from '../../store';
import { Customer } from '../../types';

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

const CustomerType = () => {
  const datas = useRecoilValue(customersData);
  const [customers, setCustomers] = useRecoilState(customerState);

  const countByType = customers.reduce(
    (
      acc: {
        [key: string]: number;
      },
      curr: Customer
    ) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = Object.keys(countByType).map((key) => ({
    name: key,
    value: countByType[key],
  }));

  useEffect(() => {
    setCustomers(datas.data);
  }, [data]);

  return (
    <div className='h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <strong className='text-white font-medium'>Customer Type</strong>
      <div className='mt-3 w-full flex-1 text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
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
              {data.map((_, index) => (
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

export default CustomerType;
