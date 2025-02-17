
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { mockSubscriptions } from "@/store/mockData";
import { History as HistoryIcon, Wifi } from "lucide-react";

const History = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Subscription History</h1>
        
        <Card className="p-6 glass-card">
          <div className="space-y-6">
            {mockSubscriptions.map((subscription) => (
              <div
                key={subscription.id}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{subscription.totalData}GB Plan</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        subscription.status === 'active' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {subscription.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(subscription.startDate).toLocaleDateString()} - {new Date(subscription.endDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">${subscription.price}</p>
                  <p className="text-sm text-gray-500">
                    {subscription.users.length} users
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

export default History;
