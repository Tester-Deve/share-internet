
import { supabase } from '@/lib/supabase';
import type { Profile, Plan, Subscription, SubscriptionUser, Payment } from '@/types/database';

export const api = {
  // Plans operations
  async getPlans() {
    const { data, error } = await supabase
      .from('plans')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Plan[];
  },

  async createPlan(plan: Omit<Plan, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('plans')
      .insert(plan)
      .select()
      .single();
    
    if (error) throw error;
    return data as Plan;
  },

  // Subscriptions operations
  async getSubscriptions() {
    const { data, error } = await supabase
      .from('subscriptions')
      .select(`
        *,
        plans:plan_id (*),
        profiles:owner_id (*)
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
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

  async updateSubscriptionStatus(id: string, status: Subscription['status']) {
    const { data, error } = await supabase
      .from('subscriptions')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Subscription;
  },

  // Subscription Users operations
  async addUserToSubscription(subscriptionUser: Omit<SubscriptionUser, 'created_at'>) {
    const { data, error } = await supabase
      .from('subscription_users')
      .insert(subscriptionUser)
      .select()
      .single();
    
    if (error) throw error;
    return data as SubscriptionUser;
  },

  async removeUserFromSubscription(subscriptionId: string, userId: string) {
    const { error } = await supabase
      .from('subscription_users')
      .delete()
      .match({ subscription_id: subscriptionId, user_id: userId });
    
    if (error) throw error;
  },

  // Payments operations
  async createPayment(payment: Omit<Payment, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('payments')
      .insert(payment)
      .select()
      .single();
    
    if (error) throw error;
    return data as Payment;
  },

  async getPaymentsBySubscription(subscriptionId: string) {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('subscription_id', subscriptionId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Payment[];
  },

  // Profile operations
  async updateUserRole(userId: string, role: Profile['role']) {
    const { data, error } = await supabase
      .from('profiles')
      .update({ role })
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data as Profile;
  }
};
