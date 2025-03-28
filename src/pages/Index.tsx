
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { 
  ArrowUpToLine, Cloud, Database, UserPlus 
} from "lucide-react";
import { useState } from "react";

const quickActionItems = [
  {
    title: "Upload local files",
    description: "Quickly convert data into tables",
    icon: ArrowUpToLine,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Load from cloud storage",
    description: "Use a SQL template to load data",
    icon: Cloud,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Query data",
    description: "Create a SQL Worksheet",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Invite users",
    description: "Collaborate with others on your team",
    icon: UserPlus,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  }
];

const projectData = [
  {
    title: "[Template] Load data from cloud storage",
    type: "SQL Worksheet",
    viewed: "15 hours ago",
    updated: "16 hours ago"
  },
  {
    title: "TOMTOM 2025-03-27 22:45:42",
    type: "Notebook",
    viewed: "23 hours ago",
    updated: "23 hours ago"
  },
  {
    title: "test",
    type: "Dashboard",
    viewed: "1 day ago",
    updated: "1 day ago"
  },
  {
    title: "TOMTOM 2025-03-27 4:15pm",
    type: "Streamlit",
    viewed: "1 day ago",
    updated: "1 day ago"
  },
  {
    title: "2025-03-27 11:24am",
    type: "Python Worksheet",
    viewed: "1 day ago",
    updated: "1 day ago"
  },
  {
    title: "python_stored_proc",
    type: "SQL Worksheet",
    viewed: "1 day ago",
    updated: "1 day ago"
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("All projects");
  
  const tabs = [
    "All projects", 
    "Worksheets", 
    "Notebooks", 
    "Streamlit", 
    "Dashboards", 
    "Folders"
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Feedback</span>
        </Button>
      </div>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-4">Quick actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActionItems.map((item, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer p-4"
            >
              <div className="flex flex-col h-full">
                <div className={`${item.bgColor} p-2 rounded-md w-fit mb-3`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-800 mb-4">All projects</h2>
        
        <div className="border-b border-gray-200 mb-4">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 text-sm font-medium ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-medium">TITLE</TableHead>
                <TableHead className="font-medium">TYPE</TableHead>
                <TableHead className="font-medium">
                  <div className="flex items-center">
                    VIEWED
                    <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </TableHead>
                <TableHead className="font-medium">UPDATED</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectData.map((project, i) => (
                <TableRow key={i} className="hover:bg-gray-50">
                  <TableCell className="font-medium text-blue-600">
                    {project.title}
                  </TableCell>
                  <TableCell>{project.type}</TableCell>
                  <TableCell>{project.viewed}</TableCell>
                  <TableCell>{project.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Index;
