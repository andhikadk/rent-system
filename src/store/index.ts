import { selector } from 'recoil';
import axios from 'axios';

export const authToken = async () => {
  try {
    const response = await axios.get('/auth/token');
    return response.data.data.accessToken;
  } catch (error: any) {
    return error.message;
  }
};

export const authUser = selector({
  key: 'authUser',
  get: async () => {
    try {
      const token = await authToken();
      const { data } = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const customersData = selector({
  key: 'customersData',
  get: async () => {
    try {
      const response = await axios.get('/customers');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const unitsData = selector({
  key: 'unitsData',
  get: async () => {
    try {
      const response = await axios.get('/units');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const ordersData = selector({
  key: 'ordersData',
  get: async () => {
    try {
      const response = await axios.get('/orders');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const popularUnitsData = selector({
  key: 'popularUnitsData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/top-ordered-units');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const popularUnitByDayData = selector({
  key: 'popularUnitByDayData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/popular-units/day');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const popularUnitByMonthData = selector({
  key: 'popularUnitByMonthData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/popular-units/month');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const topCustomersData = selector({
  key: 'topCustomersData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/top-customers-orders');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const totalSalesPerDayData = selector({
  key: 'totalSalesPerDayData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/total-sales-per-day');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const totalOrdersPerDayData = selector({
  key: 'totalOrdersPerDayData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/total-orders-per-day');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const totalSalesPerMonthData = selector({
  key: 'totalSalesPerMonthData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/total-sales-per-month');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const averageDurationData = selector({
  key: 'averageDuration',
  get: async () => {
    try {
      const response = await axios.get('/analytics/average-duration');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const averageDurationByUnit = selector({
  key: 'averageDurationByUnit',
  get: async () => {
    try {
      const response = await axios.get('/analytics/average-duration-per-order');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const paymentTypeData = selector({
  key: 'paymentTypeData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/payment-type');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const priceRangeData = selector({
  key: 'priceRangeData',
  get: async () => {
    try {
      const categories = await axios.get('/units/categories');

      const responses = await Promise.all(
        categories.data.data.map(async (c: string) => {
          const res = await axios.get(`analytics/price-range/${c}`);
          return res.data;
        })
      );

      return responses;
    } catch (error: any) {
      return error.message;
    }
  },
});
