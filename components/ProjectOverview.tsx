
import React from 'react';
import { ProjectData } from '../types';
import { Calendar, CheckCircle2, List } from 'lucide-react';

export const ProjectOverview: React.FC<{ project: ProjectData }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Col: Details */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">Overview</h2>
          
          <div className="grid grid-cols-[120px_1fr] gap-y-4 text-sm">
            <div className="text-slate-500 font-medium">Project #</div>
            <div className="text-slate-900">21</div>

            <div className="text-slate-500 font-medium">Billing Type</div>
            <div className="text-slate-900">{project.billingType}</div>

            <div className="text-slate-500 font-medium">Total Rate</div>
            <div className="text-slate-900">£{project.totalRate.toFixed(2)}</div>

            <div className="text-slate-500 font-medium">Status</div>
            <div className="text-slate-900">{project.status}</div>

            <div className="text-slate-500 font-medium">Start Date</div>
            <div className="text-slate-900">{project.startDate}</div>

            <div className="text-slate-500 font-medium">Deadline</div>
            <div className="text-slate-900">{project.deadline}</div>

            <div className="text-slate-500 font-medium">Total Logged Hours</div>
            <div className="text-slate-900">{project.totalLoggedHours}</div>
          </div>
        </div>

        {/* Right Col: Progress Stats */}
        <div className="space-y-6">
          {/* Project Progress */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
             <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 font-medium text-slate-700">
                   <List size={16} /> Project Progress
                </div>
                <span className="text-slate-900 font-bold">{project.progress}%</span>
             </div>
             <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
             </div>
          </div>

          {/* Open Tasks */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
             <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 font-medium text-slate-700">
                   <CheckCircle2 size={16} /> 
                   {project.openTasksCount} / {project.totalTasksCount} Open Tasks
                </div>
                <span className="text-slate-900 font-bold">
                   {Math.round((project.openTasksCount / project.totalTasksCount) * 100)}%
                </span>
             </div>
             <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(project.openTasksCount / project.totalTasksCount) * 100}%` }}></div>
             </div>
          </div>

          {/* Days Left */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
             <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 font-medium text-slate-700">
                   <Calendar size={16} /> 
                   {project.daysLeft} / {project.totalDays} Days Left
                </div>
                <span className="text-slate-900 font-bold">
                   {project.totalDays > 0 ? Math.round((project.daysLeft / project.totalDays) * 100) : 0}%
                </span>
             </div>
             <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${project.totalDays > 0 ? (project.daysLeft / project.totalDays) * 100 : 0}%` }}></div>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-800 mb-2">Description</h3>
        <p className="text-slate-500 text-sm">{project.description}</p>
      </div>
    </div>
  );
};
