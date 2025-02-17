
export interface User {
  id: string;
  name: string;
  email: string;
  balance: number;
  role: 'admin' | 'user';
}

export interface Subscription {
  id: string;
  startDate: Date;
  endDate: Date;
  totalData: number;
  price: number;
  status: 'active' | 'completed';
  users: string[];
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  date: Date;
  subscriptionId: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    balance: 0,
    role: 'admin',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    balance: 25,
    role: 'user',
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    balance: -10,
    role: 'user',
  },
];

export const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    startDate: new Date(2024, 2, 1),
    endDate: new Date(2024, 2, 31),
    totalData: 500,
    price: 50,
    status: 'active',
    users: ['1', '2', '3'],
  },
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    userId: '2',
    amount: 25,
    date: new Date(2024, 2, 5),
    subscriptionId: '1',
  },
];
