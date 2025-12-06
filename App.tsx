
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { ProjectDetails } from './components/ProjectDetails'; // New import
import { Login } from './components/Login';
import { AIAssistant } from './components/AIAssistant';
import { ViewState, ProjectData } from './types';
import { MOCK_PROJECTS } from './constants';
import { Menu, Bell, Search } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LOGIN);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData>(MOCK_PROJECTS[0]);

  const handleLogin = () => {
    setCurrentView(ViewState.DASHBOARD);
  };

  const handleLogout = () => {
    setCurrentView(ViewState.LOGIN);
  };

  const handleProjectSelect = (project: ProjectData) => {
    setSelectedProject(project);
    setCurrentView(ViewState.PROJECT_DETAILS);
  };

  const handleBackToDashboard = () => {
    setCurrentView(ViewState.DASHBOARD);
  };

  if (currentView === ViewState.LOGIN) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard projects={MOCK_PROJECTS} onSelectProject={handleProjectSelect} />;
      case ViewState.PROJECT_DETAILS:
        return <ProjectDetails project={selectedProject} onBack={handleBackToDashboard} />;
      default:
        return <Dashboard projects={MOCK_PROJECTS} onSelectProject={handleProjectSelect} />;
    }
  };

  const getViewTitle = () => {
    switch(currentView) {
      case ViewState.DASHBOARD: return 'Projects Summary';
      case ViewState.PROJECT_DETAILS: return ''; // Handled inside component
      default: return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Always visible in Dashboard/Project view */}
      <Sidebar 
        currentView={currentView} 
        onChangeView={(view) => {
          // If sidebar items are clicked, mostly we want to go back to Dashboard for now
          // or we could implement global views. For now, let's map Dashboard to Dashboard.
          if (view === ViewState.DASHBOARD) setCurrentView(ViewState.DASHBOARD);
          setIsSidebarOpen(false);
        }}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full w-full relative bg-[#F8FAFC]">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200/60 flex items-center justify-between px-8 z-20 shadow-sm flex-shrink-0">
           <div className="flex items-center gap-4">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600"
             >
               <Menu size={20} />
             </button>
             <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 hidden sm:block truncate max-w-md">
                {getViewTitle()}
                </h2>
                {currentView === ViewState.PROJECT_DETAILS && (
                  <button 
                    onClick={handleBackToDashboard}
                    className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-0.5"
                  >
                     ← Back to Projects
                  </button>
                )}
             </div>
           </div>

           <div className="flex items-center gap-6">
             <div className="hidden md:flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 w-72 focus-within:ring-2 focus-within:ring-amber-400/20 focus-within:border-amber-400 transition-all">
               <Search size={18} className="text-slate-400 mr-3" />
               <input 
                 type="text" 
                 placeholder="Search..." 
                 className="bg-transparent border-none outline-none text-sm w-full text-slate-600 placeholder-slate-400"
               />
             </div>
             
             <div className="flex items-center gap-4">
                 <div className="relative p-2.5 hover:bg-slate-50 rounded-full cursor-pointer text-slate-500 hover:text-amber-500 transition-colors border border-transparent hover:border-slate-100">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                 </div>
             </div>
             
             <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
               <div className="text-right hidden md:block">
                 <p className="text-sm font-bold text-slate-800">WealthMax</p>
                 <p className="text-xs text-amber-600 font-medium bg-amber-50 inline-block px-1.5 rounded mt-0.5">Client Portal</p>
               </div>
               <div className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-slate-200 ring-2 ring-white">
                 WM
               </div>
             </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
           <div className="max-w-[1400px] mx-auto">
             {renderContent()}
           </div>
        </div>

        {/* AI Assistant Widget */}
        <AIAssistant projectData={selectedProject} />
      </main>
    </div>
  );
};

export default App;
