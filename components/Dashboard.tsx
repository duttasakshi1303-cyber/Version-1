import React from 'react';
import { ProjectData } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Clock, CheckCircle, AlertCircle, DollarSign, Calendar } from 'lucide-react';

interface DashboardProps {
  data: ProjectData;
}

const COLORS = ['#3b82f6', '#e2e8f0']; // Blue and Slate-200

export const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const completedTasks = data.tasks.filter(t => t.status === 'done').length;
  const totalTasks = data.tasks.length;
  
  const pieData = [
    { name: 'Completed', value: completedTasks },
    { name: 'Remaining', value: totalTasks - completedTasks },
  ];

  const budgetData = [
    { name: 'Used', amount: data.budgetUsed },
    { name: 'Remaining', amount: data.totalBudget - data.budgetUsed },
  ];

  const nextMilestone = data.milestones.find(m => m.status === 'active' || m.status === 'upcoming');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Overall Progress</p>
            <h3 className="text-2xl font-bold text-slate-800">{data.overallProgress}%</h3>
          </div>
          <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
            <CheckCircle size={20} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Budget Usage</p>
            <h3 className="text-2xl font-bold text-slate-800">${(data.budgetUsed / 1000).toFixed(1)}k <span className="text-xs text-slate-400 font-normal">/ ${(data.totalBudget / 1000).toFixed(1)}k</span></h3>
          </div>
          <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
            <DollarSign size={20} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Next Deadline</p>
            <h3 className="text-lg font-bold text-slate-800">{nextMilestone ? nextMilestone.date : "TBD"}</h3>
            <p className="text-xs text-slate-400 truncate max-w-[120px]">{nextMilestone?.title}</p>
          </div>
          <div className="h-10 w-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
            <Calendar size={20} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Pending Tasks</p>
            <h3 className="text-2xl font-bold text-slate-800">{totalTasks - completedTasks}</h3>
          </div>
          <div className="h-10 w-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
            <Clock size={20} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Completion Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Task Completion Rate</h3>
          <div className="h-64 w-full flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Budget vs Spend */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <h3 className="text-lg font-semibold text-slate-800 mb-4">Financial Overview</h3>
           <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={budgetData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="amount" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
           </div>
           <div className="mt-4 text-sm text-slate-500 text-center">
              You have used {((data.budgetUsed / data.totalBudget) * 100).toFixed(1)}% of your allocated budget.
           </div>
        </div>
      </div>

      {/* Recent Activity / Milestones Snapshot */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Active Milestones</h3>
        <div className="space-y-4">
          {data.milestones.filter(m => m.status === 'active' || m.status === 'completed').slice(-3).map((milestone) => (
            <div key={milestone.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className={`mt-1 h-3 w-3 rounded-full flex-shrink-0 ${
                milestone.status === 'completed' ? 'bg-green-500' : 'bg-blue-500 animate-pulse'
              }`} />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium text-slate-900">{milestone.title}</h4>
                  <span className="text-xs text-slate-500">{milestone.date}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};