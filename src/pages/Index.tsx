
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockSubscriptions, mockUsers, mockPayments } from "@/store/mockData";
import { BarChart, Users, Wifi } from "lucide-react";

const Index = () => {
  const activeSubscription = mockSubscriptions.find(sub => sub.status === 'active');
  const totalUsers = mockUsers.length;
  const totalBalance = mockUsers.reduce((acc, user) => acc + user.balance, 0);

  return (
    <Layout>
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-100 rounded-full">
                <Wifi className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Active Plan</p>
                <p className="text-2xl font-bold text-gray-900">
                  {activeSubscription ? `${activeSubscription.totalData}GB` : 'No active plan'}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-100 rounded-full">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-100 rounded-full">
                <BarChart className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Balance</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${Math.abs(totalBalance)}
                  <span className="text-sm text-gray-500">
                    {totalBalance >= 0 ? ' credit' : ' due'}
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {mockPayments.map((payment) => {
                const user = mockUsers.find((u) => u.id === payment.userId);
                return (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                        <Users className="w-4 h-4 text-brand-600" />
                      </div>
                      <div>
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(payment.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-green-600">
                      +${payment.amount}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Current Users</h2>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                      <Users className="w-4 h-4 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${Math.abs(user.balance)}</p>
                    <p className="text-sm text-gray-500">
                      {user.balance >= 0 ? "Credit" : "Due"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
