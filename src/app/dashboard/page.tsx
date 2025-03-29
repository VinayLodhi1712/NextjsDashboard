"use client";

import { useState } from "react";
import {
  BarChart,
  ArrowDown,
  ArrowUp,
  MoreVertical,
  Download,
  Users,
  DollarSign,
  ShoppingCart,
  Search,
  Bell,
  MessageSquare,
  CreditCard,
  Package,
  Package2,
  Home,
  Settings,
  User,
  Inbox,
  TrendingUp,
  FileText,
  Server,
  LogOut,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import {
  generateSalesData,
  generateTransactionData,
  generateRevenueData,
} from "./data";
import {
  ChartContainer,
  LineChartComponent,
  BarChartComponent,
  AreaChartComponent,
} from "./charts";

export default function DashboardPage() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Generate dummy data
  const salesData = generateSalesData();
  const transactions = generateTransactionData();
  const revenueData = generateRevenueData();

  const pendingTasks = [
    { name: "Upgrade NextJS", progress: 0 },
    { name: "Train Pokemons", progress: 25 },
    { name: "Complete Pokedex", progress: 50 },
    { name: "Catch all shiny", progress: 75 },
    { name: "Beat all gyms", progress: 100 },
  ];

  const messages = [
    {
      sender: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Pet Pikachu",
      content: "Lorem ipsum dolor sit amet,",
      time: "Just now",
      status: "online",
    },
    {
      sender: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Dress Eevee",
      content: "Lorem ipsum dolor sit amet,",
      time: "5 mins ago",
      status: "away",
    },
    {
      sender: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Team up training",
      content: "Lorem ipsum dolor sit amet,",
      time: "1:52 PM",
      status: "busy",
    },
    {
      sender: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Go to Safari Zone",
      content: "Lorem ipsum dolor sit amet.",
      time: "4:03 PM",
      status: "offline",
    },
  ];

  const notifications = [
    {
      icon: <User className="h-4 w-4" />,
      text: "New user registered",
      type: "info",
    },
    {
      icon: <User className="h-4 w-4" />,
      text: "User deleted",
      type: "warning",
    },
    {
      icon: <FileText className="h-4 w-4" />,
      text: "Sales report is ready",
      type: "success",
    },
    {
      icon: <ShoppingCart className="h-4 w-4" />,
      text: "New client",
      type: "info",
    },
    {
      icon: <Server className="h-4 w-4" />,
      text: "Server overloaded",
      type: "error",
    },
  ];

  const serverStats = {
    cpu: { usage: 34, total: "1/4Cores", color: "bg-blue-500" },
    memory: { usage: 70, total: "11,444GB / 16,384MB", color: "bg-yellow-500" },
    ssd: { usage: 95, total: "243GB / 256GB", color: "bg-red-500" },
  };

  const userMenuItems = [
    {
      section: "Account",
      items: [
        { icon: <Bell className="h-4 w-4" />, text: "Updates", count: 42 },
        {
          icon: <MessageSquare className="h-4 w-4" />,
          text: "Messages",
          count: 42,
        },
        { icon: <BarChart className="h-4 w-4" />, text: "Tasks", count: 42 },
        {
          icon: <MessageSquare className="h-4 w-4" />,
          text: "Comments",
          count: 42,
        },
      ],
    },
    {
      section: "Settings",
      items: [
        { icon: <User className="h-4 w-4" />, text: "Profile" },
        { icon: <Settings className="h-4 w-4" />, text: "Settings" },
        { icon: <CreditCard className="h-4 w-4" />, text: "Payments" },
        { icon: <User className="h-4 w-4" />, text: "Profile" },
      ],
    },
    {
      section: "",
      items: [
        { icon: <Lock className="h-4 w-4" />, text: "Lock account" },
        { icon: <LogOut className="h-4 w-4" />, text: "Logout" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen w-full lg:grid-cols-[280px_1fr] dark">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-[#1a1a1a] border-r border-[#2a2a2a] lg:flex">
        <div className="flex h-16 items-center border-b border-[#2a2a2a] px-6">
          <div className="flex items-center gap-2 font-semibold text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Package2 className="h-5 w-5" />
            </div>
            <span className="text-lg">Buisness</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto py-4">
          <nav className="grid items-start px-4 text-sm font-medium">
            <div className="mb-2">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Main
              </div>
              <div className="mt-2 space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary"
                >
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
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Users className="h-4 w-4" />
                  <span>Users</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Payments</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Inbox className="h-4 w-4" />
                  <span>Receivables</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span>Sales</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BarChart className="h-4 w-4" />
                  <span>Reports</span>
                </a>
              </div>
            </div>

            <div className="mb-2">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                For Admins
              </div>
              <div className="mt-2 space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <User className="h-4 w-4" />
                  <span>Add a user</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
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
              <AvatarImage
                src="/placeholder.svg?height=36&width=36"
                alt="Vinay Anand"
              />
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

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-[#2a2a2a] bg-[#121212] px-6">
          <Button variant="outline" size="icon" className="md:hidden">
            <Package className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="font-medium">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Users
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Settings
            </Button>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] rounded-lg bg-[#1a1a1a] border-[#2a2a2a] pl-8 md:w-[240px] lg:w-[320px]"
              />
            </div>

            {/* Notifications Button */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowMessages(false);
                  setShowTasks(false);
                  setShowUserMenu(false);
                }}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-primary-foreground">
                  5
                </span>
              </Button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg z-50">
                  <div className="p-3 border-b border-[#2a2a2a]">
                    <h3 className="text-sm font-medium">
                      You have 5 notifications
                    </h3>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 hover:bg-[#252525] cursor-pointer"
                      >
                        <div
                          className={`
                          flex h-8 w-8 items-center justify-center rounded-full
                          ${
                            notification.type === "info"
                              ? "bg-blue-500/20 text-blue-500"
                              : notification.type === "warning"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : notification.type === "success"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-red-500/20 text-red-500"
                          }
                        `}
                        >
                          {notification.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{notification.text}</p>
                        </div>
                      </div>
                    ))}

                    <div className="p-3 border-t border-[#2a2a2a]">
                      <h3 className="text-sm font-medium mb-2">server</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>CPU USAGE</span>
                            <span>{serverStats.cpu.total}</span>
                          </div>
                          <div className="h-2 bg-[#252525] rounded-full">
                            <div
                              className={`h-full rounded-full ${serverStats.cpu.color}`}
                              style={{ width: `${serverStats.cpu.usage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>MEMORY USAGE</span>
                            <span>{serverStats.memory.total}</span>
                          </div>
                          <div className="h-2 bg-[#252525] rounded-full">
                            <div
                              className={`h-full rounded-full ${serverStats.memory.color}`}
                              style={{ width: `${serverStats.memory.usage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>SSD 1 USAGE</span>
                            <span>{serverStats.ssd.total}</span>
                          </div>
                          <div className="h-2 bg-[#252525] rounded-full">
                            <div
                              className={`h-full rounded-full ${serverStats.ssd.color}`}
                              style={{ width: `${serverStats.ssd.usage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Messages Button */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => {
                  setShowMessages(!showMessages);
                  setShowNotifications(false);
                  setShowTasks(false);
                  setShowUserMenu(false);
                }}
              >
                <MessageSquare className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-primary-foreground">
                  4
                </span>
              </Button>

              {/* Messages Dropdown */}
              {showMessages && (
                <div className="absolute right-0 mt-2 w-80 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg z-50">
                  <div className="p-3 border-b border-[#2a2a2a]">
                    <h3 className="text-sm font-medium">You have 4 messages</h3>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 hover:bg-[#252525] cursor-pointer border-b border-[#2a2a2a]"
                      >
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={message.avatar}
                              alt={message.sender}
                            />
                            <AvatarFallback>
                              {message.sender.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#1a1a1a] 
                            ${
                              message.status === "online"
                                ? "bg-green-500"
                                : message.status === "away"
                                ? "bg-yellow-500"
                                : message.status === "busy"
                                ? "bg-red-500"
                                : "bg-gray-500"
                            }`}
                          ></span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">
                              {message.sender}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {message.time}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-primary">
                            {message.title}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tasks Button */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => {
                  setShowTasks(!showTasks);
                  setShowNotifications(false);
                  setShowMessages(false);
                  setShowUserMenu(false);
                }}
              >
                <BarChart className="h-5 w-5" />
                <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-[10px] text-primary-foreground">
                  5
                </span>
              </Button>

              {/* Tasks Dropdown */}
              {showTasks && (
                <div className="absolute right-0 mt-2 w-64 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg z-50">
                  <div className="p-3 border-b border-[#2a2a2a]">
                    <h3 className="text-sm font-medium">
                      You have 5 pending tasks
                    </h3>
                  </div>
                  <div className="p-3 space-y-3">
                    {pendingTasks.map((task, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{task.name}</span>
                          <span>{task.progress}%</span>
                        </div>
                        <Progress
                          value={task.progress}
                          className="h-2"
                          indicatorClassName={`${
                            task.progress < 30
                              ? "bg-red-500"
                              : task.progress < 70
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        />
                      </div>
                    ))}
                    <div className="pt-2 text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-primary"
                      >
                        View all tasks
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                  setShowMessages(false);
                  setShowTasks(false);
                }}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Avatar"
                  />
                  <AvatarFallback>VA</AvatarFallback>
                </Avatar>
              </Button>

              {/* User Menu Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg z-50">
                  <div className="p-3 border-b border-[#2a2a2a]">
                    <h3 className="text-sm font-medium">Account</h3>
                  </div>

                  {userMenuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.section && (
                        <div className="px-3 py-2 text-xs text-muted-foreground">
                          {section.section}
                        </div>
                      )}
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between px-3 py-2 hover:bg-[#252525] cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            {item.icon}
                            <span className="text-sm">{item.text}</span>
                          </div>
                          {item.count && (
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs ${
                                sectionIndex === 0 && itemIndex === 0
                                  ? "bg-blue-500 text-white"
                                  : sectionIndex === 0 && itemIndex === 1
                                  ? "bg-green-500 text-white"
                                  : sectionIndex === 0 && itemIndex === 2
                                  ? "bg-red-500 text-white"
                                  : "bg-yellow-500 text-white"
                              }`}
                            >
                              {item.count}
                            </span>
                          )}
                        </div>
                      ))}
                      {sectionIndex < userMenuItems.length - 1 && (
                        <div className="border-t border-[#2a2a2a] my-1"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="border-b border-[#2a2a2a] bg-[#1a1a1a]/40 px-6 py-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="hover:text-foreground">
              Library
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Data</span>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Sales
                </CardTitle>
                <div className="flex items-center text-sm text-emerald-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +7%
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,350.00</div>
                <p className="text-xs text-muted-foreground">Decline</p>
                <div className="mt-4 flex items-center">
                  <DollarSign className="h-4 w-4 text-emerald-500 mr-2" />
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    See all earnings
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <div className="flex items-center text-sm text-blue-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +11%
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,478</div>
                <p className="text-xs text-muted-foreground">Growth</p>
                <div className="mt-4 flex items-center">
                  <ShoppingCart className="h-4 w-4 text-blue-500 mr-2" />
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    See all orders
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Products Sold
                </CardTitle>
                <div className="flex items-center text-sm text-red-500">
                  <ArrowDown className="mr-1 h-4 w-4" />
                  -5%
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6,782</div>
                <p className="text-xs text-muted-foreground">Decline</p>
                <div className="mt-4 flex items-center">
                  <Package className="h-4 w-4 text-orange-500 mr-2" />
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    See all products
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Users</CardTitle>
                <div className="flex items-center text-sm text-emerald-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  +13%
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">Growth</p>
                <div className="mt-4 flex items-center">
                  <Users className="h-4 w-4 text-cyan-500 mr-2" />
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    See all users
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* KPI Cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <Card className="bg-blue-600 text-white border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Users</CardTitle>
                <MoreVertical className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">26K</div>
                <p className="text-xs flex items-center">
                  <ArrowDown className="mr-1 h-3 w-3" />
                  12.4% decrease
                </p>
                <div className="mt-4 h-[60px]">
                  {salesData?.users?.length > 0 && (
                    <ChartContainer>
                      <LineChartComponent
                        data={salesData.users}
                        color="#ffffff"
                        showGrid={false}
                      />
                    </ChartContainer>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-500 text-white border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Income</CardTitle>
                <MoreVertical className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$6,200</div>
                <p className="text-xs flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  40.9% increase
                </p>
                <div className="mt-4 h-[60px]">
                  <ChartContainer>
                    <LineChartComponent
                      data={salesData.income}
                      color="#ffffff"
                      showGrid={false}
                    />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-500 text-white border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversion Rate
                </CardTitle>
                <MoreVertical className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.49%</div>
                <p className="text-xs flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />
                  84.7% increase
                </p>
                <div className="mt-4 h-[60px]">
                  <ChartContainer>
                    <LineChartComponent
                      data={salesData.conversion}
                      color="#ffffff"
                      showGrid={false}
                    />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-500 text-white border-none">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sessions</CardTitle>
                <MoreVertical className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">44K</div>
                <p className="text-xs flex items-center">
                  <ArrowDown className="mr-1 h-3 w-3" />
                  23.6% decrease
                </p>
                <div className="mt-4 h-[60px]">
                  <ChartContainer>
                    <BarChartComponent
                      data={salesData.sessions}
                      color="#ffffff"
                      showGrid={false}
                    />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Area Chart */}
            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Area Chart representation</CardTitle>
                  <Select defaultValue="week3">
                    <SelectTrigger className="w-[120px] bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week1">Week 1</SelectItem>
                      <SelectItem value="week2">Week 2</SelectItem>
                      <SelectItem value="week3">Week 3</SelectItem>
                      <SelectItem value="week4">Week 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardDescription>Orders in last 4-weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ChartContainer>
                    <AreaChartComponent
                      data={revenueData.areaData}
                      colors={["#0ea5e9", "#f59e0b", "#10b981"]}
                    />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Bar Chart representation</CardTitle>
                  <Select defaultValue="week3">
                    <SelectTrigger className="w-[120px] bg-[#1a1a1a] border-[#2a2a2a]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week1">Week 1</SelectItem>
                      <SelectItem value="week2">Week 2</SelectItem>
                      <SelectItem value="week3">Week 3</SelectItem>
                      <SelectItem value="week4">Week 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardDescription>Orders in last 4-weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ChartContainer>
                    <BarChartComponent
                      data={revenueData.barData}
                      multiBar={true}
                      colors={["#0ea5e9", "#10b981", "#f59e0b"]}
                    />
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Chart */}
          <div className="mt-6">
            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Traffic & Sales</CardTitle>
                  <CardDescription>January - July 2021</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Tabs defaultValue="month">
                    <TabsList className="bg-[#252525]">
                      <TabsTrigger value="day">Day</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                      <TabsTrigger value="year">Year</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-[#1a1a1a] border-[#2a2a2a]"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-16 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          New Clients
                        </div>
                        <div className="text-2xl font-bold">9,123</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-16 bg-red-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Recurring Clients
                        </div>
                        <div className="text-2xl font-bold">22,643</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-16 bg-yellow-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Page Views
                        </div>
                        <div className="text-2xl font-bold">78,623</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-16 bg-green-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">
                          Organic
                        </div>
                        <div className="text-2xl font-bold">49,123</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[300px]">
                  <ChartContainer>
                    <LineChartComponent
                      data={salesData.traffic}
                      multiLine={true}
                      showGrid={true}
                    />
                  </ChartContainer>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-7 gap-4">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div key={day} className="space-y-2">
                      <div className="text-sm text-muted-foreground">{day}</div>
                      <div className="h-2 bg-[#252525] rounded-full">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: `${Math.random() * 60 + 20}%` }}
                        ></div>
                      </div>
                      <div className="h-2 bg-[#252525] rounded-full">
                        <div
                          className="h-full rounded-full bg-red-500"
                          style={{ width: `${Math.random() * 80 + 10}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div className="mt-6">
            <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
              <CardHeader>
                <CardTitle>Latest Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tracking ID</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">
                          {transaction.id}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-md bg-[#252525] flex items-center justify-center">
                              <Package className="h-4 w-4" />
                            </div>
                            <span>{transaction.product}</span>
                          </div>
                        </TableCell>
                        <TableCell>{transaction.customer}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>${transaction.price}</TableCell>
                        <TableCell>{transaction.paymentMethod}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.status === "Delivered"
                                ? "default"
                                : "outline"
                            }
                            className={
                              transaction.status === "Delivered"
                                ? "bg-green-500/20 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                                : "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/20 hover:text-yellow-500"
                            }
                          >
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
