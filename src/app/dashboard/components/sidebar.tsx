import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  CreditCard,
  Home,
  Inbox,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden w-64 flex-col bg-[#1a1a1a] border-r border-[#2a2a2a] lg:flex">
      <div className="flex h-16 items-center border-b border-[#2a2a2a] px-6">
        <div className="flex items-center gap-2 font-semibold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Package2 className="h-5 w-5" />
          </div>
          <span className="text-lg">Dashboard</span>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-4 text-sm font-medium">
          <div className="mb-2">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Main
            </div>
            <div className="mt-2 space-y-1">
              <a href="#" className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
            </div>
          </div>
          <div className="mb-2">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Menu
            </div>
            <div className="mt-2 space-y-1">
              {[ 
                { icon: Users, label: "Users" },
                { icon: Package, label: "Products" },
                { icon: ShoppingCart, label: "Orders" },
                { icon: CreditCard, label: "Payments" },
                { icon: Inbox, label: "Receivables" },
                { icon: TrendingUp, label: "Sales" },
                { icon: BarChart, label: "Reports" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              For Admins
            </div>
            <div className="mt-2 space-y-1">
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <User className="h-4 w-4" />
                <span>Add a user</span>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Package className="h-4 w-4" />
                <span>Add a product</span>
              </a>
            </div>
          </div>
          <div className="mb-2">
            <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Color Theme
            </div>
            <div className="mt-2 flex gap-2 px-2">
              <button className="h-6 w-6 rounded-md border border-[#2a2a2a] bg-[#f8fafc]"></button>
              <button className="h-6 w-6 rounded-md border border-[#2a2a2a] bg-[#1e293b]"></button>
              <button className="h-6 w-6 rounded-md border-2 border-primary bg-[#0ea5e9]"></button>
            </div>
          </div>
        </nav>
      </div>
      <div className="border-t border-[#2a2a2a] p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Vinay Anand" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">Vinay Anand</div>
            <div className="text-xs text-muted-foreground">Hero Admin</div>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;