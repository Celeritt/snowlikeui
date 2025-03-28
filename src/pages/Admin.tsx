
import { Card } from "@/components/ui/card";

const Admin = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Admin</h1>
        <p className="text-gray-500">Manage your application settings</p>
      </header>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Admin Page</h3>
        <p className="text-gray-500">This is a placeholder for the Admin page content.</p>
      </Card>
    </div>
  );
};

export default Admin;
