import React, { useState } from "react";
import {
  BarChart3,
  Building2,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const menuItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      badge: "New",
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      submenu: [
        {
          id: "overview",
          label: "Overview",
        },
        {
          id: "reports",
          label: "Reports",
        },
        {
          id: "insight",
          label: "Insight",
        },
      ],
    },
    {
      id: "users",
      icon: Users,
      label: "Users",
      count: "2.4k",
      submenu: [
        {
          id: "all-users",
          label: "All Users",
        },
        {
          id: "roles",
          label: "Roles and Permissions",
        },
        {
          id: "activity",
          label: "User Activity",
        },
      ],
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      label: "E-commerce",
      submenu: [
        {
          id: "products",
          label: "Products",
        },
        { id: "orders", label: "Orders" },
        { id: "customers", label: "Customers" },
      ],
    },
    { id: "inventory", icon: Package, label: "Inventory", count: "847" },
    {
      id: "transactions",
      icon: CreditCard,
      label: "Transactions",
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "Messages",
      badge: "12",
    },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "reports", icon: FileText, label: "Reports" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const [expandedItems, setExpandedItems] = useState(new Set(["analytics"]));

  const toggleExpand = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }

    setExpandedItems(newExpanded);
  };

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-xl dark:bg-slate-900/80 border-r  border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center shadow-lg w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          {/* conditional rendering */}
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                CityMart
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation (Dynamically--) */}
      <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
        {menuItems.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex justify-between items-center p-3 rounded-xl transition-all duration-200 ${
                  currentPage === item.id || item.active
                    ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                }`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpand(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  {/* condition rendering  */}

                  {!collapsed && (
                    <>
                      <span className="font-medium ml-2">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {!collapsed && item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform" />
                )}
              </button>

              {/* submenu rendering  */}
              {!collapsed && item.submenu && expandedItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subItem) => {
                    return (
                      <button
                        className="w-full text-left text-sm p-2 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                        key={subItem.id}
                      >
                        {subItem.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      {/* User Profile */}
      {!collapsed && (
        <div className="border-t p-4 border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Mohammad Ejaz
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
