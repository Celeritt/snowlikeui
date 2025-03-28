
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import SettingsMenu from "./SettingsMenu";

const Header = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white fixed top-0 right-0 left-56 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search..." 
            className="pl-10 h-9" 
          />
        </div>
        
        <SettingsMenu />
      </div>
    </header>
  );
};

export default Header;
