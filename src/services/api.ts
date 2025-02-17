
import { supabase } from '@/lib/supabase';
import type { Profile, Subscription, Payment, SubscriptionUser } from '@/types/database';

export const api = {
  // User operations
  async getUsers() {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Profile[];
  },

  async updateUserBalance(userId: string, balance: number) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ balance })
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data as Profile;
  },

  // Subscription operations
  async getSubscriptions() {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Subscription[];
  },

  async createSubscription(subscription: Omit<Subscription, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('subscriptions')
      .insert(subscription)
      .select()
      .single();
    
    if (error) throw error;
    return data as Subscription;
  },

  async updateSubscription(id: string, subscription: Partial<Subscription>) {
    const { data, error } = await supabase
      .from('subscriptions')
      .update(subscription)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Subscription;
  },

  // Payment operations
  async getPayments() {
    const { data, error } = await supabase
      .from('payments')
      .select(`
        *,
        profiles:user_id (
          name,
          email
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as (Payment & { profiles: Profile })[];
  },

  async createPayment(payment: Omit<Payment, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('payments')
      .insert(payment)
      .select()
      .single();
    
    if (error) throw error;
    return data as Payment;
  },

  // Subscription Users operations
  async getSubscriptionUsers(subscriptionId: string) {
    const { data, error } = await supabase
      .from('subscription_users')
      .select(`
        *,
        profiles:user_id (*)
      `)
      .eq('subscription_id', subscriptionId);
    
    if (error) throw error;
    return data as (SubscriptionUser & { profiles: Profile })[];
  },

  async addUserToSubscription(subscriptionId: string, userId: string) {
    const { data, error } = await supabase
      .from('subscription_users')
      .insert({ subscription_id: subscriptionId, user_id: userId })
      .select()
      .single();
    
    if (error) throw error;
    return data as SubscriptionUser;
  },
};
