
import React from 'react';
import { ProjectData } from '../types';
import { ChevronDown, ChevronRight } from 'lucide-react';

export const ProjectGantt: React.FC<{ project: ProjectData }> = ({ project }) => {
  const months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Mock tree structure for visual matching of screenshot
  const treeItems = [
    { label: "Uncategorized", type: 'category', expanded: true, color: 'bg-slate-600' },
    { label: "Document Category Testing", type: 'task', indent: 1, barStart: 0, barLen: 2, color: 'bg-amber-500' },
    { label: "Case Management → Register Case", type: 'task', indent: 1, barStart: 2, barLen: 1, color: 'bg-amber-500' },
    { label: "Design Introducer Screen", type: 'task', indent: 1, barStart: 3, barLen: 4, color: 'bg-slate-400' }, // Line only
    { label: "User Management → Manage Case → Action Menu → Delete User", type: 'task', indent: 1, barStart: 3.5, barLen: 0.5, color: 'bg-amber-500' },
    { label: "Case Management → Manage Cases", type: 'task', indent: 1, barStart: 1.5, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Develop Document Library Screens Wealthmax CRM", type: 'task', indent: 1, barStart: 5.5, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Get Email, 2FA Screen and Reset Password Screens", type: 'task', indent: 1, barStart: 1.5, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Manage Introducer Listing", type: 'task', indent: 1, barStart: 3.2, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Case Management → Case Summary → Case Overview", type: 'task', indent: 1, barStart: 1.8, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Case Management → Case Summary → Case History", type: 'task', indent: 1, barStart: 1.8, barLen: 0.5, color: 'bg-slate-600' },
    { label: "Backend Development of Document Library", type: 'task', indent: 1, barStart: 5.5, barLen: 0.5, color: 'bg-slate-600' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
      <div className="p-4 border-b border-slate-200 flex justify-end">
         <select className="border border-slate-300 rounded px-3 py-1 text-sm text-slate-700">
            <option>Months View</option>
         </select>
      </div>

      <div className="flex-1 overflow-auto relative">
         <div className="min-w-[1200px]">
           {/* Timeline Header */}
           <div className="flex border-b border-slate-200 bg-white sticky top-0 z-20">
              <div className="w-[400px] flex-shrink-0 p-3 font-semibold text-slate-700 border-r border-slate-200">
                 Task Name
              </div>
              <div className="flex-1 grid grid-cols-10 text-center text-xs text-slate-500 font-medium py-3">
                 {months.map(m => <div key={m}>{m}</div>)}
              </div>
           </div>

           {/* Rows */}
           <div className="relative">
              {/* Vertical Grid Lines */}
              <div className="absolute inset-0 left-[400px] grid grid-cols-10 pointer-events-none h-full z-0">
                 {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-full border-r border-slate-100 ${i % 2 === 0 ? 'bg-slate-50/30' : ''}`} />
                 ))}
              </div>

              {treeItems.map((item, idx) => (
                <div key={idx} className="flex border-b border-slate-100 hover:bg-slate-50 z-10 relative h-10 items-center">
                   {/* Left Tree */}
                   <div className="w-[400px] flex-shrink-0 px-4 flex items-center border-r border-slate-200 h-full overflow-hidden whitespace-nowrap text-sm text-slate-600">
                      <div style={{ paddingLeft: `${(item.indent || 0) * 20}px` }} className="flex items-center gap-1">
                         {item.type === 'category' && <ChevronDown size={14} className="text-slate-400" />}
                         {item.type === 'task' && <div className="w-4 h-4" />} {/* Spacer */}
                         {item.type === 'task' && <span className="text-slate-400 mr-1">→</span>}
                         <span className="truncate" title={item.label}>{item.label}</span>
                      </div>
                   </div>

                   {/* Right Bars */}
                   <div className="flex-1 relative h-full">
                      {item.type === 'category' ? (
                         // Category Bar
                         <div 
                           className="absolute top-1/2 -translate-y-1/2 h-5 rounded text-[10px] text-white flex items-center justify-center px-2 bg-slate-600 shadow-sm"
                           style={{ left: '10%', width: '15%' }}
                         >
                            {item.label}
                         </div>
                      ) : (
                         // Task Bar
                         <div 
                           className={`absolute top-1/2 -translate-y-1/2 h-4 rounded-sm shadow-sm ${item.color} border border-white/20`}
                           style={{ 
                             left: `${item.barStart * 10}%`, 
                             width: `${item.barLen * 10}%` 
                           }}
                         />
                      )}
                      
                      {/* Connector Line Mock */}
                      {item.indent && idx > 0 && (
                         <div 
                           className="absolute top-1/2 left-0 h-[1px] bg-slate-400 opacity-50"
                           style={{ 
                             left: `${(treeItems[idx-1].barStart || 0) * 10}%`,
                             width: `${(item.barStart - (treeItems[idx-1].barStart || 0)) * 10}%`
                           }}
                         />
                      )}
                   </div>
                </div>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
};
