
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockPayments, mockUsers } from "@/store/mockData";
import { DollarSign } from "lucide-react";

const Payments = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Payments History</h1>
        
        <Card className="p-6 glass-card">
          <div className="space-y-6">
            {mockPayments.map((payment) => {
              const user = mockUsers.find(u => u.id === payment.userId);
              return (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(payment.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-600">
                      +${payment.amount}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Payments;
