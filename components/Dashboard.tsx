import React, { useState } from 'react';
import { ProjectData } from '../types';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface DashboardProps {
  projects: ProjectData[];
  onSelectProject: (project: ProjectData) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ projects, onSelectProject }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate status counts
  const counts = {
    notStarted: projects.filter(p => p.status === 'Not Started').length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    onHold: projects.filter(p => p.status === 'On Hold').length,
    cancelled: projects.filter(p => p.status === 'Cancelled').length,
    finished: projects.filter(p => p.status === 'Finished').length,
  };

  const filteredProjects = projects.filter(p => 
    p.projectName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      
      {/* Projects Summary Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Projects Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <SummaryCard label="Not Started" count={counts.notStarted} color="border-l-slate-400 text-slate-600" />
          <SummaryCard label="In Progress" count={counts.inProgress} color="border-l-blue-500 text-blue-600" />
          <SummaryCard label="On Hold" count={counts.onHold} color="border-l-orange-400 text-orange-500" />
          <SummaryCard label="Cancelled" count={counts.cancelled} color="border-l-red-400 text-red-500" />
          <SummaryCard label="Finished" count={counts.finished} color="border-l-green-500 text-green-600" />

        </div>
      </div>

      {/* Projects List Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Projects</h2>
        
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {/* Table Controls */}
          <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-100">
             <div className="flex items-center gap-2 text-sm text-slate-600">
                <select className="border border-slate-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500">
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span>entries per page</span>
             </div>

             <div className="flex items-center">
               <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Search.." 
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="pl-3 pr-10 py-1.5 border border-slate-300 rounded text-sm focus:outline-none focus:border-blue-500 w-64"
                 />
                 <button className="absolute right-0 top-0 h-full px-3 text-slate-500 border-l border-slate-300 bg-slate-50 rounded-r hover:bg-slate-100">
                    <Search size={14} />
                 </button>
               </div>
             </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-slate-700 bg-slate-50 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="px-6 py-4">Project Name</th>
                  <th className="px-6 py-4">Start Date</th>
                  <th className="px-6 py-4">Deadline</th>
                  <th className="px-6 py-4">Billing Type</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => onSelectProject(project)}
                          className="text-blue-500 hover:text-blue-700 hover:underline font-medium text-left"
                        >
                          {project.projectName}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{project.startDate}</td>
                      <td className="px-6 py-4 text-slate-600">{project.deadline || '-'}</td>
                      <td className="px-6 py-4 text-slate-600">{project.billingType}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded border text-xs font-medium ${
                          project.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                          project.status === 'Finished' ? 'bg-green-50 text-green-600 border-green-200' :
                          'bg-slate-50 text-slate-600 border-slate-200'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                      No projects found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <div>
               Showing 1 to {filteredProjects.length} of {projects.length} entries
            </div>
            <div className="flex items-center gap-1">
               <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50">Previous</button>
               <button className="px-3 py-1 border border-blue-500 bg-blue-600 text-white rounded">1</button>
               <button className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Summary Cards
const SummaryCard: React.FC<{ label: string; count: number; color: string }> = ({ label, count, color }) => (
  <div className={`bg-white p-4 rounded-lg shadow-sm border border-slate-200 border-l-4 ${color}`}>
    <h3 className={`text-sm font-medium ${color.split(' ')[1]}`}>{label}</h3>
    <p className={`text-2xl font-bold mt-1 ${color.split(' ')[1]}`}>{count}</p>
  </div>
);