
import React from 'react';
import { Task } from '../types';
import { List } from 'lucide-react';

export const ProjectTasks: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const columns = [
    { title: 'Uncategorized', loggedTime: '1209:30', color: 'bg-[#0099ff]' },
    { title: 'Project Backlogs', loggedTime: '00:00', subtext: '05-08-2025 - 05-08-2026', color: 'bg-[#007acc]' },
    { title: 'Approved from Client for Development', loggedTime: '00:00', subtext: '05-08-2025 - 05-08-2026', color: 'bg-[#007acc]' },
    { title: 'Design & Discussion', loggedTime: '00:00', subtext: '', color: 'bg-[#007acc]' },
  ];

  return (
    <div className="flex items-start gap-2 overflow-x-auto pb-4">
       <div className="bg-white p-2 rounded border border-slate-200 shadow-sm mr-2 sticky left-0 z-10">
          <List size={20} className="text-slate-500" />
       </div>

       {columns.map((col, idx) => {
         const colTasks = tasks.filter(t => t.category === col.title);

         return (
           <div key={idx} className="min-w-[300px] w-[300px] flex-shrink-0 bg-white border-l border-r border-b border-slate-200 rounded-b-lg shadow-sm">
              {/* Header */}
              <div className={`${col.color} text-white p-3 rounded-t-sm`}>
                 <h3 className="font-bold text-sm truncate" title={col.title}>{col.title}</h3>
                 {col.subtext && <p className="text-[10px] opacity-90">{col.subtext}</p>}
                 <p className="text-[10px] mt-1 font-medium opacity-90">Logged Time: {col.loggedTime}</p>
              </div>

              {/* Tasks Area */}
              <div className="p-2 space-y-2 min-h-[400px] bg-slate-50/30">
                 {colTasks.length > 0 ? (
                    colTasks.map(task => (
                      <div key={task.id} className="bg-[#fcecec] border-l-4 border-[#e9aaaa] p-3 rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                         <h4 className="text-blue-600 font-medium text-sm mb-1 hover:underline">{task.title}</h4>
                         <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-blue-500">{task.status}</span>
                            <div className="text-[10px] text-slate-500 font-semibold">
                               <div>Start Date: <span className="text-slate-700">{task.startDate}</span></div>
                               <div>Due Date: <span className="text-slate-700">{task.dueDate}</span></div>
                            </div>
                         </div>
                      </div>
                    ))
                 ) : (
                    <div className="text-center py-8 text-slate-400 text-sm">
                       No tasks found
                    </div>
                 )}
              </div>
           </div>
         );
       })}
    </div>
  );
};
