
import React from 'react';
import { Milestone } from '../types';
import { Search } from 'lucide-react';

export const ProjectMilestones: React.FC<{ milestones: Milestone[] }> = ({ milestones }) => {
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
              <th className="px-6 py-4 w-1/3">Name</th>
              <th className="px-6 py-4 w-1/3">Description</th>
              <th className="px-6 py-4">Start Date</th>
              <th className="px-6 py-4">Due date</th>
              <th className="px-6 py-4">Logged Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {milestones.length > 0 ? milestones.map((m) => (
              <tr key={m.id} className="hover:bg-slate-50 text-slate-600">
                <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer font-medium">
                   {m.title}
                </td>
                <td className="px-6 py-4">{m.description}</td>
                <td className="px-6 py-4 text-blue-600">{m.startDate}</td>
                <td className="px-6 py-4 text-blue-600">{m.dueDate}</td>
                <td className="px-6 py-4">{m.loggedTime}</td>
              </tr>
            )) : (
              <tr>
                 <td colSpan={5} className="px-6 py-8 text-center text-slate-500">No milestones found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
