
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockUsers } from "@/store/mockData";
import { Users as UsersIcon } from "lucide-react";

const Users = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Users</h1>
        
        <Card className="p-6 glass-card">
          <div className="space-y-6">
            {mockUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <UsersIcon className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.role === 'admin' ? 'bg-brand-100 text-brand-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {user.role}
                    </span>
                  </div>
                  <p className="mt-1 font-medium">
                    Balance: ${Math.abs(user.balance)}
                    <span className="text-sm text-gray-500 ml-1">
                      {user.balance >= 0 ? "(Credit)" : "(Due)"}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Users;
