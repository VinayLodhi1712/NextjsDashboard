// Data constants for the dashboard header

import { 
  User, FileText, ShoppingCart, Server, 
  Bell, MessageSquare, BarChart, Settings, 
  CreditCard, Lock, LogOut 
} from "lucide-react";

// Pending tasks data
export const pendingTasks = [
  { name: "Upgrade NextJS", progress: 0 },
  { name: "Train Pokemons", progress: 25 },
  { name: "Complete Pokedex", progress: 50 },
  { name: "Catch all shiny", progress: 75 },
  { name: "Beat all gyms", progress: 100 },
];

// Messages data
export const messages = [
  {
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "! Pet Pikachu",
    content: "Lorem ipsum dolor sit amet, consectetur ",
    time: "Just now",
    status: "online",
  },
  {
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Dress Eevee",
    content: "Lorem ipsum dolor sit amet, consectetur .",
    time: "5 mins ago",
    status: "away",
  },
  {
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Team up training",
    content: "Lorem ipsum dolor sit amet, consectetur .",
    time: "1:52 PM",
    status: "busy",
  },
  {
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Go to Safari Zone",
    content: "Lorem ipsum dolor sit amet, consectetur .",
    time: "4:03 PM",
    status: "offline",
  },
];

// Notifications data
export const notifications = [
  { icon: <User className="h-4 w-4" />, text: "New user registered", type: "info" },
  { icon: <User className="h-4 w-4" />, text: "User deleted", type: "warning" },
  { icon: <FileText className="h-4 w-4" />, text: "Sales report is ready", type: "success" },
  { icon: <ShoppingCart className="h-4 w-4" />, text: "New client", type: "info" },
  { icon: <Server className="h-4 w-4" />, text: "Server overloaded", type: "error" },
];

// Server statistics data
export const serverStats = {
  cpu: { usage: 34, processes: "348Processes", total: "1/4Cores", color: "bg-blue-500" },
  memory: { usage: 70, total: "11,444GB / 16,384MB", color: "bg-yellow-500" },
  ssd: { usage: 95, total: "243GB / 256GB", color: "bg-red-500" },
};

// User menu items
export const userMenuItems = [
  {
    section: "Account",
    items: [
      { icon: <Bell className="h-4 w-4" />, text: "Updates", count: 42, color: "bg-cyan-500" },
      { icon: <MessageSquare className="h-4 w-4" />, text: "Messages", count: 42, color: "bg-green-500" },
      { icon: <BarChart className="h-4 w-4" />, text: "Tasks", count: 42, color: "bg-red-500" },
      { icon: <MessageSquare className="h-4 w-4" />, text: "Comments", count: 42, color: "bg-yellow-500" },
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

// Theme options
export const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
];

// Dashboard statistics
export const dashboardStats = {
  sessions: {
    value: "44K",
    change: -23.6,
    label: "Sessions"
  }
};