import React, { useState } from "react";
import Sidebar from "./component/layout/Sidebar";
import Header from "./component/layout/Header";
import Dashboard from "./component/dashboard/Dashboard";

const App = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-blue-900 dark:to-slate-800 transition-all duration-500 ">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            sideBarCollapsed={sideBarCollapsed}
            onToggleSideBar={() => setSideBarCollapsed(!sideBarCollapsed)}
          />
          <main className="flex-1 overflow-y-auto bg-transparent">
            <div className="p-6 space-y-6">
              {currentPage === "dashboard" && <Dashboard />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
