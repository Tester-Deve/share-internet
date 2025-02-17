
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Settings</h1>
        
        <Card className="p-6 glass-card">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-100 rounded-full">
              <SettingsIcon className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Application Settings</h2>
              <p className="text-sm text-gray-500">Manage your application preferences</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Notification Settings</h3>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Account Settings</h3>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Display Settings</h3>
              <p className="text-sm text-gray-500">Coming soon...</p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
