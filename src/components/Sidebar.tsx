
import { 
  Home, Search, Folder, Database, PackageOpen, 
  BrainCircuit, LineChart, Shield, Plus, HelpCircle, 
  MoreVertical 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: Folder, label: "Projects", path: "/projects" },
  { icon: Database, label: "Data", path: "/data" },
  { icon: PackageOpen, label: "Data Products", path: "/data-products" },
  { icon: BrainCircuit, label: "AI & ML", path: "/ai-ml" },
  { icon: LineChart, label: "Monitoring", path: "/monitoring" },
  { icon: Shield, label: "Admin", path: "/admin" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-56 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center mb-6">
          <img src="/lovable-uploads/62f4a565-750d-4b74-8d82-459b12c7ad60.png" alt="Snowflake Logo" className="h-8" />
        </div>
        
        <button className="flex items-center gap-2 text-sm w-full mb-6 px-3 py-2 rounded border border-gray-300 hover:bg-gray-50">
          <Plus className="h-4 w-4" />
          <span>Create</span>
        </button>
      </div>
      
      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
                    "hover:bg-blue-50 hover:text-blue-600",
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 mt-auto border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>$394 credits left</span>
          <HelpCircle className="h-4 w-4" />
          <MoreVertical className="h-4 w-4" />
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
          <div className="bg-blue-500 h-1.5 rounded-full w-1/3"></div>
        </div>
        <div className="text-xs text-gray-500 mb-2">Trial ends in 29 days</div>
        <button className="w-full bg-blue-500 text-white rounded py-1.5 text-sm hover:bg-blue-600 transition-colors">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
