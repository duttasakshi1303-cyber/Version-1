import React from 'react';
import { ProjectData } from '../types';

interface GanttChartProps {
  data: ProjectData;
}

export const GanttChart: React.FC<GanttChartProps> = ({ data }) => {
  // Simplified logic: Assume chart spans from Project Start to Deadline + buffer
  // In a real app, we'd calculate date diffs precisely. 
  // Here we mock the visual bars based on milestones for simplicity in this demo.
  
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">Project Timeline (Gantt)</h2>
        <p className="text-sm text-slate-500">Visual roadmap of key milestones and phases</p>
      </div>
      
      <div className="p-6 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row (Months) */}
          <div className="grid grid-cols-7 gap-0 border-b border-slate-200 pb-2 mb-4">
            {months.map(m => (
              <div key={m} className="text-sm font-semibold text-slate-500 text-center">{m}</div>
            ))}
          </div>

          {/* Rows */}
          <div className="space-y-6 relative">
            {/* Grid Lines (Background) */}
            <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="border-r border-slate-100 h-full last:border-0" />
              ))}
            </div>

            {data.milestones.map((milestone, index) => {
               // Quick hack to determine position based on index for demo purposes since we aren't using a heavy date library
               // M1 (Oct) -> col-start-1
               // M2 (Nov) -> col-start-2
               // M3 (Jan) -> col-start-4
               // M4 (Mar) -> col-start-6
               // M5 (Apr) -> col-start-7
               
               let startCol = 1;
               let span = 1;
               if (index === 0) { startCol = 1; span = 1; } // Oct
               else if (index === 1) { startCol = 2; span = 1; } // Nov
               else if (index === 2) { startCol = 3; span = 2; } // Dec-Jan
               else if (index === 3) { startCol = 5; span = 1; } // Feb-Mar
               else if (index === 4) { startCol = 6; span = 2; } // Mar-Apr

               return (
                 <div key={milestone.id} className="relative h-12 flex items-center">
                    <div 
                      className={`
                        absolute h-8 rounded-md shadow-sm flex items-center px-3 text-xs font-medium text-white truncate
                        ${milestone.status === 'completed' ? 'bg-blue-600' : 
                          milestone.status === 'active' ? 'bg-amber-500' : 'bg-slate-400'}
                      `}
                      style={{
                        left: `${(startCol - 1) * (100/7)}%`,
                        width: `${span * (100/7)}%`
                      }}
                    >
                      {milestone.title}
                    </div>
                 </div>
               );
            })}
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-4 text-xs text-slate-500 flex gap-4">
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600 rounded"></div> Completed</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded"></div> In Progress</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-400 rounded"></div> Upcoming</div>
      </div>
    </div>
  );
};