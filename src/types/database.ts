
export interface Profile {
  id: string;
  name: string;
  email: string;
  balance: number;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Subscription {
  id: string;
  start_date: string;
  end_date: string;
  total_data: number;
  price: number;
  status: 'active' | 'completed';
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  subscription_id: string;
  amount: number;
  date: string;
  created_at: string;
}

export interface SubscriptionUser {
  subscription_id: string;
  user_id: string;
  created_at: string;
}
