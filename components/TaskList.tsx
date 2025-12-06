import React, { useState } from 'react';
import { Task } from '../types';
import { Filter, CheckCircle2, Circle, Clock, MoreHorizontal } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [filter, setFilter] = useState<'all' | 'todo' | 'in-progress' | 'done'>('all');

  const filteredTasks = tasks.filter(t => {
    if (filter === 'all') return true;
    if (filter === 'todo') return t.status === 'Not Started';
    if (filter === 'in-progress') return t.status === 'In Progress';
    if (filter === 'done') return t.status === 'Completed';
    return false;
  });

  const getStatusColor = (status: Task['status']) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'On Hold': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-slate-800">Daily Tasks</h2>
        <div className="flex gap-2">
          {(['all', 'todo', 'in-progress', 'done'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                filter === f ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {filteredTasks.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            No tasks found in this category.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4 group">
              <div className="flex-shrink-0 text-slate-400">
                {task.status === 'Completed' ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <Circle />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium truncate ${task.status === 'Completed' ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                  {task.title}
                </h4>
                <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {task.dueDate}
                  </span>
                  <span>•</span>
                  <span>{task.assignee?.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(task.status)} uppercase`}>
                   {task.status}
                 </span>
                 <span className={`hidden sm:inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border uppercase ${
                   task.priority === 'high' ? 'bg-red-50 text-red-600 border-red-100' :
                   task.priority === 'medium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                   'bg-slate-50 text-slate-500 border-slate-100'
                 }`}>
                   {task.priority}
                 </span>
                 <button className="p-1 text-slate-400 hover:text-blue-600 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                   <MoreHorizontal size={18} />
                 </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};