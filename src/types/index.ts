export type Customer = {
  id: number;
  name: string;
  phone: string;
  type: string;
  instagram: string;
  address: string;
  district?: string;
  user?: string;
  [key: string]: any;
};

export type Unit = {
  id: number;
  category: string;
  type: string;
  owner: string;
  code: string;
  name: string;
  location: string;
  includes: string;
  note: string;
  status: string;
  rates: {
    '24h': number;
    '12h': number;
    '6h': number;
  };
  [key: string]: any;
};

export type Order = {
  id: number;
  createdAt: string;
  updatedAt: string;
  cust_id: {
    _id: string;
    name: string;
  };
  units: string[];
  served_by: string;
  pickup_date: string;
  return_date: string;
  duration: number;
  price: number;
  discount: number;
  total_cost: number;
  remaining_cost: number;
  received_time: string;
  received_by: string;
  note: string;
  status: string;
  payment: {
    type: string;
    amount: number;
  };
  repayment: {
    type: string;
    amount: number;
  };
};

export type PopularUnit = {
  _id: string;
  category: string;
  name: string;
  rates?: {
    '24h'?: number;
    '12h'?: number;
    '6h'?: number;
  };
  totalOrder: number;
};

export type TopCustomer = {
  _id: string;
  totalOrder: number;
  totalCost: number;
  status: [string];
}[];

export type TotalSalesPerDay = {
  _id: string;
  totalSales: number;
};
