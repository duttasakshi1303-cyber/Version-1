import React from 'react';
import { ViewState } from '../types';
import { LayoutDashboard, CheckSquare, BarChart2, Flag, CreditCard, LogOut, TrendingUp } from 'lucide-react';

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
      fixed lg:static top-0 left-0 z-40 h-screen w-72 bg-[#0B1120] text-white transition-transform duration-300 ease-in-out shadow-xl
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-8 flex flex-col items-center border-b border-slate-800/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center bg-transparent shadow-[0_0_15px_rgba(251,191,36,0.2)]">
               <TrendingUp className="text-amber-400" size={28} strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-extrabold tracking-wider text-amber-400 font-sans">TRACK MY</h1>
            <h1 className="text-lg font-bold tracking-[0.2em] text-white -mt-1">PROJECT</h1>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-6 py-8 space-y-2">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">Main Menu</div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group
                ${currentView === item.id 
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/5 text-amber-400 border border-amber-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}
              `}
            >
              <item.icon size={20} className={`transition-colors ${currentView === item.id ? 'text-amber-400' : 'group-hover:text-white'}`} />
              <span className="font-medium text-sm">{item.label}</span>
              {currentView === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        {/* User / Logout */}
        <div className="p-6 border-t border-slate-800/50">
           <div className="bg-slate-800/50 rounded-xl p-4 mb-4 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Authenticated As</p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-[#0B1120] font-bold text-xs">
                   SJ
                 </div>
                 <div>
                    <span className="text-sm font-semibold text-white block leading-tight">Sarah Jenkins</span>
                    <span className="text-xs text-slate-400 block">Project Manager</span>
                 </div>
              </div>
           </div>
           <button 
             onClick={onLogout}
             className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-red-400 text-sm font-medium transition-colors py-2"
           >
             <LogOut size={16} /> Sign Out
           </button>
        </div>
      </div>
    </aside>
  );
};