import { selector, atom } from 'recoil';
import axios from 'axios';
import { PopularUnit, TopCustomer } from '../types';

export const authUser = selector({
  key: 'authUser',
  get: async () => {
    try {
      const response = await axios.get('/auth/token');
      return response.data.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const customerState = atom({
  key: 'customerState',
  default: [],
});

export const customersData = selector({
  key: 'customersData',
  get: async () => {
    try {
      const response = await axios.get('/customers');
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const unitsState = atom({
  key: 'unitsState',
  default: [],
});

export const unitsData = selector({
  key: 'unitsData',
  get: async () => {
    try {
      const response = await axios.get('/units');
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const ordersState = atom({
  key: 'ordersState',
  default: [],
});

export const ordersData = selector({
  key: 'ordersData',
  get: async () => {
    try {
      const response = await axios.get('/orders');
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const popularUnitsState = atom<PopularUnit[]>({
  key: 'popularUnitsState',
  default: [],
});

export const popularUnitsData = selector({
  key: 'popularUnitsData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/top-ordered-units');
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
});

export const topCustomersState = atom<TopCustomer>({
  key: 'topCustomersState',
  default: [],
});

export const topCustomersData = selector({
  key: 'topCustomersData',
  get: async () => {
    try {
      const response = await axios.get('/analytics/top-customers-orders');
      return response.data;
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
