import {
  HiOutlineViewGrid,
  HiOutlineCamera,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineChartBar,
} from 'react-icons/hi';

export type SidebarLink = {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
};

export const TopSidebarLinks: SidebarLink[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: <HiOutlineChartBar />,
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'units',
    label: 'Units',
    path: '/units',
    icon: <HiOutlineCamera />,
  },
];

export const BottomSidebarLinks: SidebarLink[] = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const AnalyticsLinks: SidebarLink[] = [
  {
    key: 'summary',
    label: 'Summary',
    path: '/analytics',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/analytics/orders',
    icon: <HiOutlineShoppingCart />,
  },
  // {
  //   key: 'customers',
  //   label: 'Customers',
  //   path: '/analytics/customers',
  //   icon: <HiOutlineUsers />,
  // },
  {
    key: 'units',
    label: 'Units',
    path: '/analytics/units',
    icon: <HiOutlineCamera />,
  },
];

export const categories = [
  'action cam',
  'audio',
  'baterei',
  'drone',
  'gimbal equipment',
  'handphone',
  'kabel',
  'kamera',
  'kamera equipment',
  'lcd monitor',
  'lcd proyektor',
  'lensa',
  'lightstand',
  'lighting',
  'lighting equipment',
  'livecam equipment',
  'memory',
  'tripod',
  'tv',
];
