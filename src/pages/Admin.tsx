import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Avatar, 
  Bell, 
  Globe, 
  Key, 
  Lock, 
  Mail, 
  Plus,
  Search,
  Settings, 
  Shield, 
  User, 
  Users 
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <header>
          <h1 className="text-2xl font-semibold text-gray-900">Admin Settings</h1>
          <p className="text-gray-500">Manage your application preferences and security</p>
        </header>
        <Button variant="outline" className="flex items-center gap-1">
          <Settings className="h-4 w-4" />
          Advanced Settings
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/4">
          <CardContent className="p-4">
            <div className="flex flex-col items-center py-6 mb-4">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <User className="h-12 w-12 text-blue-500" />
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-200">
                  <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                    <Settings className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <h3 className="font-medium text-lg">Admin User</h3>
              <p className="text-gray-500 text-sm">System Administrator</p>
            </div>

            <nav>
              <ul className="space-y-1">
                {[
                  { icon: User, label: "Account" },
                  { icon: Bell, label: "Notifications" },
                  { icon: Lock, label: "Security" },
                  { icon: Key, label: "API Keys" },
                  { icon: Users, label: "Team" },
                  { icon: Globe, label: "Integrations" },
                  { icon: Shield, label: "Permissions" },
                ].map((item, i) => (
                  <li key={i}>
                    <button className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                      i === 0 ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                    }`}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </CardContent>
        </Card>

        <div className="md:w-3/4">
          <Tabs defaultValue="general" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="api-keys">API Keys</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Organization Settings</CardTitle>
                  <CardDescription>Manage your organization details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="org-name">Organization Name</Label>
                      <Input id="org-name" defaultValue="Snowflake Analytics" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="org-email">Organization Email</Label>
                      <Input id="org-email" type="email" defaultValue="info@snowflake-analytics.com" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="org-address">Address</Label>
                    <Input id="org-address" defaultValue="123 Data Street, Analytics City" className="mt-1" />
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <Label htmlFor="org-city">City</Label>
                      <Input id="org-city" defaultValue="San Francisco" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="org-state">State/Province</Label>
                      <Input id="org-state" defaultValue="California" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="org-zip">ZIP/Postal Code</Label>
                      <Input id="org-zip" defaultValue="94105" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="org-country">Country</Label>
                    <select 
                      id="org-country"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your application settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive email notifications for important updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Two-Factor Authentication</h4>
                      <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Analytics Tracking</h4>
                      <p className="text-sm text-gray-500">Allow anonymous usage data collection</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Public API Access</h4>
                      <p className="text-sm text-gray-500">Enable public API endpoints</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="mt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Password Settings</CardTitle>
                  <CardDescription>Update your password requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Minimum Password Length</h4>
                      <p className="text-sm text-gray-500">Set minimum characters required</p>
                    </div>
                    <select 
                      className="w-20 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="8"
                    >
                      {[6, 8, 10, 12, 14, 16].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Require Special Characters</h4>
                      <p className="text-sm text-gray-500">Passwords must contain special characters</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Password Expiration</h4>
                      <p className="text-sm text-gray-500">Force password reset after period</p>
                    </div>
                    <select 
                      className="w-40 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="90"
                    >
                      <option value="30">30 Days</option>
                      <option value="60">60 Days</option>
                      <option value="90">90 Days</option>
                      <option value="180">180 Days</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Session Settings</CardTitle>
                  <CardDescription>Manage user session behavior</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Session Timeout</h4>
                      <p className="text-sm text-gray-500">Automatically log out inactive users</p>
                    </div>
                    <select 
                      className="w-40 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      defaultValue="30"
                    >
                      <option value="15">15 Minutes</option>
                      <option value="30">30 Minutes</option>
                      <option value="60">1 Hour</option>
                      <option value="120">2 Hours</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Concurrent Sessions</h4>
                      <p className="text-sm text-gray-500">Allow multiple active sessions per user</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api-keys" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Keys</CardTitle>
                  <CardDescription>Manage your API access keys</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end mb-4">
                    <Button className="flex items-center gap-1">
                      <Plus className="h-4 w-4" />
                      Generate New Key
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-medium">Name</TableHead>
                        <TableHead className="font-medium">Created</TableHead>
                        <TableHead className="font-medium">Last Used</TableHead>
                        <TableHead className="font-medium">Status</TableHead>
                        <TableHead className="font-medium text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Production API Key</TableCell>
                        <TableCell>Jan 15, 2023</TableCell>
                        <TableCell>2 days ago</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                            Active
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Revoke</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Development Key</TableCell>
                        <TableCell>Mar 22, 2023</TableCell>
                        <TableCell>5 hours ago</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600">
                            Active
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Revoke</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Test Environment</TableCell>
                        <TableCell>Jun 10, 2023</TableCell>
                        <TableCell>Never</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600">
                            Inactive
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Delete</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage users and their permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search users" className="pl-10" />
                    </div>
                    <Button className="flex items-center gap-1">
                      <Plus className="h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-medium">User</TableHead>
                        <TableHead className="font-medium">Role</TableHead>
                        <TableHead className="font-medium">Email</TableHead>
                        <TableHead className="font-medium">Last Active</TableHead>
                        <TableHead className="font-medium text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { 
                          name: "John Doe", 
                          role: "Administrator", 
                          email: "john@example.com", 
                          active: "2 minutes ago" 
                        },
                        { 
                          name: "Jane Smith", 
                          role: "Editor", 
                          email: "jane@example.com", 
                          active: "3 hours ago" 
                        },
                        { 
                          name: "Robert Johnson", 
                          role: "Viewer", 
                          email: "robert@example.com", 
                          active: "1 day ago" 
                        },
                        { 
                          name: "Emily Davis", 
                          role: "Analyst", 
                          email: "emily@example.com", 
                          active: "5 days ago" 
                        }
                      ].map((user, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                              <User className="h-4 w-4 text-blue-500" />
                            </div>
                            {user.name}
                          </TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.active}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500">
                      Showing 4 of 4 users
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
