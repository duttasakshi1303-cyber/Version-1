import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { TaskList } from './components/TaskList';
import { GanttChart } from './components/GanttChart';
import { Billing } from './components/Billing';
import { Login } from './components/Login';
import { AIAssistant } from './components/AIAssistant';
import { ViewState } from './types';
import { MOCK_PROJECT_DATA } from './constants';
import { Menu, Bell, Search } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LOGIN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Simple authentication flow mock
  const handleLogin = () => {
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleLogout = () => {
    setCurrentView(ViewState.LOGIN);
  };

  if (currentView === ViewState.LOGIN) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard data={MOCK_PROJECT_DATA} />;
      case ViewState.TASKS:
        return <TaskList tasks={MOCK_PROJECT_DATA.tasks} />;
      case ViewState.GANTT:
        return <GanttChart data={MOCK_PROJECT_DATA} />;
      case ViewState.BILLING:
        return <Billing invoices={MOCK_PROJECT_DATA.invoices} />;
      case ViewState.MILESTONES:
         // Reusing Gantt for milestones view in this simple demo, or we could build a list
         return <GanttChart data={MOCK_PROJECT_DATA} />;
      default:
        return <Dashboard data={MOCK_PROJECT_DATA} />;
    }
  };

  const getViewTitle = () => {
    switch(currentView) {
      case ViewState.DASHBOARD: return 'Project Dashboard';
      case ViewState.TASKS: return 'Tasks & To-Dos';
      case ViewState.GANTT: return 'Timeline & Schedule';
      case ViewState.BILLING: return 'Invoices & Payments';
      case ViewState.MILESTONES: return 'Milestones';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={(view) => {
          setCurrentView(view);
          setIsSidebarOpen(false);
        }}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full w-full relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-20">
           <div className="flex items-center gap-4">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600"
             >
               <Menu size={20} />
             </button>
             <h2 className="text-xl font-bold text-slate-800 hidden sm:block">
               {getViewTitle()}
             </h2>
           </div>

           <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64">
               <Search size={16} className="text-slate-400 mr-2" />
               <input 
                 type="text" 
                 placeholder="Search tasks, docs..." 
                 className="bg-transparent border-none outline-none text-sm w-full text-slate-600"
               />
             </div>
             
             <div className="relative p-2 hover:bg-slate-100 rounded-full cursor-pointer text-slate-500 hover:text-blue-600 transition-colors">
               <Bell size={20} />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
             </div>
             
             <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
               <div className="text-right hidden md:block">
                 <p className="text-sm font-semibold text-slate-800">{MOCK_PROJECT_DATA.clientName}</p>
                 <p className="text-xs text-slate-500">Client Access</p>
               </div>
               <div className="h-9 w-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                 AC
               </div>
             </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
           <div className="max-w-7xl mx-auto space-y-6">
             {renderContent()}
           </div>
        </div>

        {/* AI Assistant Widget */}
        <AIAssistant projectData={MOCK_PROJECT_DATA} />
      </main>
    </div>
  );
};

export default App;