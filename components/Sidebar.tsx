import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, CheckSquare, BarChart2, Flag, CreditCard, LogOut, Hexagon } from 'lucide-react';

interface SidebarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
  onLogout: () => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, onLogout, isOpen }) => {
  const menuItems = [
    { id: ViewState.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: ViewState.TASKS, label: 'Daily Tasks', icon: CheckSquare },
    { id: ViewState.GANTT, label: 'Gantt Chart', icon: BarChart2 },
    { id: ViewState.MILESTONES, label: 'Milestones', icon: Flag },
    { id: ViewState.BILLING, label: 'Billing & Invoices', icon: CreditCard },
  ];

  return (
    <aside className={`
      fixed lg:static top-0 left-0 z-40 h-screen w-64 bg-slate-900 text-white transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-lg">
             <Hexagon fill="white" className="text-blue-600" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide">IZLA CRM</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Client Portal</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${currentView === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'}
              `}
            >
              <item.icon size={20} />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User / Logout */}
        <div className="p-4 border-t border-slate-800">
           <div className="bg-slate-800 rounded-xl p-4 mb-4">
              <p className="text-xs text-slate-400 mb-1">Project Manager</p>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 <span className="text-sm font-medium">Sarah Jenkins</span>
              </div>
           </div>
           <button 
             onClick={onLogout}
             className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-400 text-sm font-medium transition-colors"
           >
             <LogOut size={16} /> Sign Out
           </button>
        </div>
      </div>
    </aside>
  );
};