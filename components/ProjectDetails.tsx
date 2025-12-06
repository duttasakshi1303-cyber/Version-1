
import React, { useState } from 'react';
import { ProjectData, ProjectTab } from '../types';
import { ProjectOverview } from './ProjectOverview';
import { ProjectTasks } from './ProjectTasks';
import { ProjectTimesheets } from './ProjectTimesheets';
import { ProjectMilestones } from './ProjectMilestones';
import { ProjectFiles } from './ProjectFiles';
import { ProjectGantt } from './ProjectGantt';
import { ProjectActivity } from './ProjectActivity';
import { LayoutGrid, CheckSquare, Clock, Flag, FileText, MessageSquare, List, Ticket, Activity, Plus } from 'lucide-react';

interface ProjectDetailsProps {
  project: ProjectData;
  onBack: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState<ProjectTab>('Overview');

  const tabs: { id: ProjectTab; label: string; icon: React.ElementType }[] = [
    { id: 'Overview', label: 'Overview', icon: LayoutGrid },
    { id: 'Tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'Timesheets', label: 'Timesheets', icon: Clock },
    { id: 'Milestones', label: 'Milestones', icon: Flag },
    { id: 'Files', label: 'Files', icon: FileText },
    { id: 'Discussions', label: 'Discussions', icon: MessageSquare },
    { id: 'Gantt', label: 'Gantt', icon: List },
    { id: 'Tickets', label: 'Tickets', icon: Ticket },
    { id: 'Activity', label: 'Activity', icon: Activity },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview': return <ProjectOverview project={project} />;
      case 'Tasks': return <ProjectTasks tasks={project.tasks} />;
      case 'Timesheets': return <ProjectTimesheets timesheets={project.timesheets} />;
      case 'Milestones': return <ProjectMilestones milestones={project.milestones} />;
      case 'Files': return <ProjectFiles files={project.files} />;
      case 'Gantt': return <ProjectGantt project={project} />;
      case 'Activity': return <ProjectActivity activities={project.activities} />;
      default: return (
        <div className="p-12 text-center text-slate-500 bg-white rounded-lg border border-slate-200">
           <p>The {activeTab} module is not enabled for this project.</p>
        </div>
      );
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-slate-800">{project.projectName}</h1>
          
          {/* Members Avatars */}
          <div className="flex -space-x-2 ml-2">
            {project.members.slice(0, 8).map((m, i) => (
              <div key={m.id} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600" title={m.name}>
                {m.avatar}
              </div>
            ))}
            {project.members.length > 8 && (
               <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                  +{project.members.length - 8}
               </div>
            )}
          </div>

          <span className={`px-3 py-0.5 rounded-full text-xs font-medium border ml-2 ${
             project.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-slate-50 text-slate-600'
          }`}>
            {project.status}
          </span>
        </div>

        <button className="bg-[#000080] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-900 flex items-center gap-2 shadow-sm transition-colors">
          <Plus size={16} /> New Task
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-t-lg border-b border-slate-200 shadow-sm overflow-x-auto">
        <div className="flex min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors
                ${activeTab === tab.id 
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}
              `}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="animate-fade-in">
        {renderTabContent()}
      </div>
    </div>
  );
};
