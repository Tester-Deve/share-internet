
export interface Profile {
  id: string;
  name: string;
  email: string;
  balance: number;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: Record<string, any>;
  max_users: number;
  created_at: string;
}

export interface Subscription {
  id: string;
  plan_id: string;
  owner_id: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'cancelled' | 'expired';
  created_at: string;
}

export interface SubscriptionUser {
  subscription_id: string;
  user_id: string;
  role: 'owner' | 'member';
  created_at: string;
}

export interface Payment {
  id: string;
  subscription_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}
