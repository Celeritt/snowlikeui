
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  Database, File, FileText, Filter, Plus, Search, Upload 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Data = () => {
  const [activeTab, setActiveTab] = useState("my-datasets");
  const [createDatasetView, setCreateDatasetView] = useState(false);
  const [datasetSource, setDatasetSource] = useState("upload");

  const recentDatasets = [
    { 
      name: "customer_data_2023", 
      type: "CSV", 
      size: "2.4 MB", 
      records: "15,432", 
      updated: "2 days ago" 
    },
    { 
      name: "sales_transactions", 
      type: "JSON", 
      size: "5.1 MB", 
      records: "32,154", 
      updated: "5 days ago" 
    },
    { 
      name: "product_inventory", 
      type: "Parquet", 
      size: "8.7 MB", 
      records: "4,521", 
      updated: "1 week ago" 
    },
    { 
      name: "user_interactions", 
      type: "CSV", 
      size: "1.2 MB", 
      records: "8,765", 
      updated: "2 weeks ago" 
    },
    { 
      name: "marketing_campaigns", 
      type: "JSON", 
      size: "3.5 MB", 
      records: "942", 
      updated: "3 weeks ago" 
    }
  ];

  const renderDatasetList = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Data</h1>
          <p className="text-gray-500">Manage your data sources and datasets</p>
        </div>
        <Button 
          className="flex items-center gap-1" 
          onClick={() => setCreateDatasetView(true)}
        >
          <Plus className="h-4 w-4" />
          Create Dataset
        </Button>
      </div>

      <div className="flex items-center mb-6 gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search datasets" 
            className="pl-10" 
          />
        </div>
        <Button variant="outline" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="my-datasets" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="my-datasets">My Datasets</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="public">Public</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-datasets" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Name</TableHead>
                    <TableHead className="font-medium">Type</TableHead>
                    <TableHead className="font-medium">Size</TableHead>
                    <TableHead className="font-medium">Records</TableHead>
                    <TableHead className="font-medium">Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDatasets.map((dataset, i) => (
                    <TableRow key={i} className="hover:bg-gray-50 cursor-pointer">
                      <TableCell className="font-medium text-blue-600 flex items-center gap-2">
                        <Database className="h-4 w-4 text-gray-500" />
                        {dataset.name}
                      </TableCell>
                      <TableCell>{dataset.type}</TableCell>
                      <TableCell>{dataset.size}</TableCell>
                      <TableCell>{dataset.records}</TableCell>
                      <TableCell>{dataset.updated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shared" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-10">
                <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No shared datasets</h3>
                <p className="text-gray-500 mb-4">Datasets shared with you will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="public" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-10">
                <Database className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">Explore public datasets</h3>
                <p className="text-gray-500 mb-4">Discover and use publicly available datasets</p>
                <Button>Browse Catalog</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );

  const renderCreateDatasetView = () => (
    <>
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => setCreateDatasetView(false)}
        >
          ← Back to datasets
        </Button>
        <h1 className="text-2xl font-semibold text-gray-900">Create a new dataset</h1>
        <p className="text-gray-500">Add data to your workspace</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Choose a data source</CardTitle>
          <CardDescription>Select where your data is coming from</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            defaultValue="upload" 
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            value={datasetSource}
            onValueChange={setDatasetSource}
          >
            <div className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${datasetSource === "upload" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="upload" id="upload" className="sr-only" />
              <Upload className="h-8 w-8 text-blue-500 mb-2" />
              <Label htmlFor="upload" className="font-medium cursor-pointer">Upload Files</Label>
              <p className="text-xs text-center text-gray-500 mt-1">Upload CSV, JSON or Parquet files</p>
            </div>
            
            <div className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${datasetSource === "connect" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="connect" id="connect" className="sr-only" />
              <Database className="h-8 w-8 text-blue-500 mb-2" />
              <Label htmlFor="connect" className="font-medium cursor-pointer">Connect Database</Label>
              <p className="text-xs text-center text-gray-500 mt-1">Connect to external data sources</p>
            </div>
            
            <div className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${datasetSource === "query" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
              <RadioGroupItem value="query" id="query" className="sr-only" />
              <File className="h-8 w-8 text-blue-500 mb-2" />
              <Label htmlFor="query" className="font-medium cursor-pointer">SQL Query</Label>
              <p className="text-xs text-center text-gray-500 mt-1">Create dataset using SQL</p>
            </div>
          </RadioGroup>

          {datasetSource === "upload" && (
            <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="text-center">
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-2">Drag and drop files here</h3>
                <p className="text-gray-500 mb-4">or</p>
                <Button>Browse Files</Button>
                <p className="text-xs text-gray-500 mt-4">Supported formats: CSV, JSON, Parquet, Excel</p>
              </div>
            </div>
          )}

          {datasetSource === "connect" && (
            <div className="mt-6">
              <div className="grid gap-4 mb-4">
                <div>
                  <Label htmlFor="connection-type">Connection Type</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1">
                    <option>MySQL</option>
                    <option>PostgreSQL</option>
                    <option>BigQuery</option>
                    <option>Snowflake</option>
                    <option>Redshift</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="connection-string">Connection String</Label>
                  <Input id="connection-string" placeholder="Enter connection string" className="mt-1" />
                </div>
              </div>
            </div>
          )}

          {datasetSource === "query" && (
            <div className="mt-6">
              <Label htmlFor="sql-query">SQL Query</Label>
              <textarea 
                id="sql-query"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                placeholder="SELECT * FROM ..."
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setCreateDatasetView(false)}>Cancel</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </>
  );

  return (
    <div className="space-y-6">
      {createDatasetView ? renderCreateDatasetView() : renderDatasetList()}
    </div>
  );
};

export default Data;
