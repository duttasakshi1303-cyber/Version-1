
import React from 'react';
import { ActivityLog } from '../types';

export const ProjectActivity: React.FC<{ activities: ActivityLog[] }> = ({ activities }) => {
  return (
    <div className="max-w-4xl">
       <div className="relative border-l border-green-500 ml-3 space-y-8 py-2">
          {activities.length > 0 ? activities.map((activity, idx) => (
             <div key={activity.id} className="relative pl-8">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-green-500"></div>
                
                {/* Content */}
                <div>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                      {activity.timestamp}
                   </span>
                   <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 flex-shrink-0 mt-0.5">
                         {activity.user.avatar}
                      </div>
                      <div>
                         <p className="text-sm text-slate-800">
                            <span className="font-semibold">{activity.user.name}</span> - <span className="font-bold">{activity.action}</span>
                         </p>
                         <p className="text-sm text-slate-500 mt-0.5">
                            {activity.description}
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          )) : (
             <div className="pl-8 text-slate-400 italic">No recent activity.</div>
          )}
       </div>
    </div>
  );
};
