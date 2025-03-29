import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, Bell, MessageSquare, BarChart, Package, 
  Moon, Sun, LaptopIcon
} from "lucide-react";

// Import data from const.tsx
import { 
  pendingTasks, 
  messages, 
  notifications, 
  serverStats, 
  userMenuItems,
  themeOptions,
} from "./const";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("auto");

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'busy': return 'bg-red-500';
      case 'offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };
  
  // Helper function to close all dropdowns
  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowMessages(false);
    setShowTasks(false);
    setShowUserMenu(false);
    setShowThemeMenu(false);
  };

  // Helper function to toggle dropdown and close others
  const toggleDropdown = (dropdown: boolean, setter: { (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (value: SetStateAction<boolean>): void; (arg0: boolean): void; }) => {
    closeAllDropdowns();
    setter(!dropdown);
  };

  // Theme icon based on selected theme
  const getThemeIcon = () => {
    switch (selectedTheme) {
      case 'light': return <Sun className="h-5 w-5" />;
      case 'dark': return <Moon className="h-5 w-5" />;
      case 'auto': return <LaptopIcon className="h-5 w-5" />;
      default: return <LaptopIcon className="h-5 w-5" />;
    }
  };

  return (
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

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => toggleDropdown(showNotifications, setShowNotifications)}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            5
          </span>
          
          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-72 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
              <div className="border-b border-[#2a2a2a] p-3">
                <p className="text-sm">You have 5 notifications</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-[#2a2a2a] p-3 hover:bg-[#252525]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#252525]">
                      {notification.icon}
                    </div>
                    <span className="text-sm">{notification.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#2a2a2a] p-3">
                <p className="text-xs text-muted-foreground">server</p>
                <p className="mt-2 text-xs font-semibold">CPU USAGE</p>
                <div className="mt-1 h-2 w-full rounded-full bg-[#252525]">
                  <div className={`h-2 rounded-full ${serverStats.cpu.color}`} style={{ width: `${serverStats.cpu.usage}%` }}></div>
                </div>
                <p className="mt-1 text-xs">{serverStats.cpu.processes}. {serverStats.cpu.total}</p>
                
                <p className="mt-3 text-xs font-semibold">MEMORY USAGE</p>
                <div className="mt-1 h-2 w-full rounded-full bg-[#252525]">
                  <div className={`h-2 rounded-full ${serverStats.memory.color}`} style={{ width: `${serverStats.memory.usage}%` }}></div>
                </div>
                <p className="mt-1 text-xs">{serverStats.memory.total}</p>
                
                <p className="mt-3 text-xs font-semibold">SSD 1 USAGE</p>
                <div className="mt-1 h-2 w-full rounded-full bg-[#252525]">
                  <div className={`h-2 rounded-full ${serverStats.ssd.color}`} style={{ width: `${serverStats.ssd.usage}%` }}></div>
                </div>
                <p className="mt-1 text-xs">{serverStats.ssd.total}</p>
              </div>
            </div>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => toggleDropdown(showTasks, setShowTasks)}
        >
          <BarChart className="h-5 w-5" />
          <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
            5
          </span>
          
          {/* Tasks Dropdown */}
          {showTasks && (
            <div className="absolute right-0 top-12 w-72 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
              <div className="border-b border-[#2a2a2a] p-3">
                <p className="text-sm">You have 5 pending tasks</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="border-b border-[#2a2a2a] p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm">{task.name}</span>
                      <span className="text-xs">{task.progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#252525]">
                      <div 
                        className={`h-2 rounded-full ${
                          task.progress === 0 ? 'bg-gray-500' :
                          task.progress <= 25 ? 'bg-red-500' :
                          task.progress <= 50 ? 'bg-yellow-500' :
                          task.progress <= 75 ? 'bg-blue-500' :
                          'bg-green-500'
                        }`} 
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#2a2a2a] p-3 text-center">
                <button className="text-sm">View all tasks</button>
              </div>
            </div>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => toggleDropdown(showMessages, setShowMessages)}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
            7
          </span>
          
          {/* Messages Dropdown */}
          {showMessages && (
            <div className="absolute right-0 top-12 w-80 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
              <div className="border-b border-[#2a2a2a] p-3">
                <p className="text-sm">You have 4 messages</p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index} className="border-b border-[#2a2a2a] p-3 hover:bg-[#252525]">
                    <div className="flex gap-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.avatar} alt={message.sender} />
                          <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full ${getStatusColor(message.status)}`}></span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{message.sender}</span>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Button>

        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => toggleDropdown(showThemeMenu, setShowThemeMenu)}
        >
          {getThemeIcon()}
          
          {/* Theme Menu Dropdown */}
          {showThemeMenu && (
            <div className="absolute right-0 top-12 w-40 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg">
              {themeOptions.map((option, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 p-2 hover:bg-[#252525] ${selectedTheme === option.value ? 'bg-[#252525]' : ''}`}
                  onClick={() => {
                    setSelectedTheme(option.value);
                    setShowThemeMenu(false);
                  }}
                >
                  {option.value === 'light' && <Sun className="h-4 w-4" />}
                  {option.value === 'dark' && <Moon className="h-4 w-4" />}
                  {option.value === 'auto' && <LaptopIcon className="h-4 w-4" />}
                  <span className="text-sm">{option.label}</span>
                  {selectedTheme === option.value && (
                    <div className="ml-auto h-2 w-2 rounded-full bg-blue-500"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => toggleDropdown(showUserMenu, setShowUserMenu)}
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
          
          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 top-12 w-64 rounded-md border border-[#2a2a2a] bg-[#1a1a1a] shadow-lg z-50">
              {userMenuItems.map((section, sectionIndex) => (
                <div key={sectionIndex} className={`${sectionIndex > 0 ? 'border-t border-[#2a2a2a]' : ''} p-2`}>
                  {section.section && (
                    <p className="px-2 py-1 text-xs text-muted-foreground">{section.section}</p>
                  )}
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between rounded px-2 py-1.5 hover:bg-[#252525]">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span className="text-sm">{item.text}</span>
                      </div>
                      {'count' in item && item.count && (
                        <span className={`flex h-5 min-w-5 items-center justify-center rounded px-1.5 text-xs font-semibold text-white ${item.color || 'bg-blue-500'}`}>
                          {item.count}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;