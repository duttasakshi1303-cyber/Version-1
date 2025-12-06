
import React from 'react';
import { TimesheetEntry } from '../types';
import { Search } from 'lucide-react';

export const ProjectTimesheets: React.FC<{ timesheets: TimesheetEntry[] }> = ({ timesheets }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-slate-200">
         <div className="flex items-center gap-2">
           <select className="border border-slate-300 rounded px-2 py-1 text-sm text-slate-600 focus:outline-none">
             <option>25</option>
           </select>
         </div>
         <div className="relative">
             <input 
               type="text" 
               placeholder="Search.." 
               className="pl-3 pr-8 py-1.5 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 w-64"
             />
             <Search size={14} className="absolute right-2.5 top-2.5 text-slate-400"/>
         </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Member</th>
              <th className="px-6 py-4">Task</th>
              <th className="px-6 py-4">Start Time</th>
              <th className="px-6 py-4">End Time</th>
              <th className="px-6 py-4">Time Spent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {timesheets.length > 0 ? timesheets.map((entry) => (
              <tr key={entry.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {entry.user.avatar && entry.user.avatar.length <= 2 ? (
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                          {entry.user.avatar}
                        </div>
                    ) : (
                        <img src={entry.user.avatar} alt={entry.user.name} className="w-8 h-8 rounded-full" />
                    )}
                    <span className="text-slate-700 font-medium">{entry.user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer max-w-md truncate">
                   {entry.taskTitle}
                </td>
                <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{entry.startTime}</td>
                <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{entry.endTime}</td>
                <td className="px-6 py-4 text-slate-800 font-medium">{entry.timeSpent}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No timesheet entries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
