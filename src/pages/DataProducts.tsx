
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Calendar, Clock, CreditCard, DollarSign, 
  Download, LineChart, Plus, Settings, Users 
} from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";

const DataProducts = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Sales",
      value: "$26,351",
      icon: DollarSign,
      change: "+12.5%",
      positive: true
    },
    {
      title: "Active Users",
      value: "5,391",
      icon: Users,
      change: "+18.2%",
      positive: true
    },
    {
      title: "Transactions",
      value: "2,487",
      icon: CreditCard,
      change: "-4.5%",
      positive: false
    },
    {
      title: "Processing Time",
      value: "56ms",
      icon: Clock,
      change: "-2.1%",
      positive: true
    }
  ];

  const recentTransactions = [
    {
      id: "#DS001",
      name: "Customer Segmentation",
      status: "Active",
      date: "01 May 2023",
      amount: "$125"
    },
    {
      id: "#DS002",
      name: "Sales Analytics",
      status: "Processing",
      date: "30 Apr 2023",
      amount: "$89"
    },
    {
      id: "#DS003",
      name: "Market Trends",
      status: "Completed",
      date: "27 Apr 2023",
      amount: "$178"
    },
    {
      id: "#DS004",
      name: "User Behavior",
      status: "Active",
      date: "25 Apr 2023",
      amount: "$95"
    },
    {
      id: "#DS005",
      name: "Inventory Analysis",
      status: "Failed",
      date: "22 Apr 2023",
      amount: "$135"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Data Products</h1>
          <p className="text-gray-500">Manage and analyze your data products</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Create Dataset
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <div className={`p-2 rounded-full ${stat.positive ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className={`mt-4 text-sm font-medium ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} from last month
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Data Usage Analytics</CardTitle>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="h-[240px] flex items-center justify-center border border-dashed rounded-md border-gray-200">
                  <div className="text-center">
                    <BarChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Usage statistics chart goes here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Processing Performance</CardTitle>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <div className="h-[240px] flex items-center justify-center border border-dashed rounded-md border-gray-200">
                  <div className="text-center">
                    <LineChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Performance metrics chart goes here</p>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </div>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Recent Datasets</CardTitle>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">ID</TableHead>
                    <TableHead className="font-medium">Name</TableHead>
                    <TableHead className="font-medium">Status</TableHead>
                    <TableHead className="font-medium">Date</TableHead>
                    <TableHead className="font-medium text-right">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.name}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'Active' ? 'bg-green-50 text-green-600' :
                          transaction.status === 'Processing' ? 'bg-blue-50 text-blue-600' :
                          transaction.status === 'Completed' ? 'bg-purple-50 text-purple-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {transaction.status}
                        </span>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell className="text-right">{transaction.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Analytics Content</h3>
              <p className="text-gray-500">Detailed analytics for your data products will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Reports Content</h3>
              <p className="text-gray-500">Generated reports for your data products will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataProducts;
