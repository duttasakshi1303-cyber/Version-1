
import React from 'react';
import { FileEntry } from '../types';
import { Search } from 'lucide-react';

export const ProjectFiles: React.FC<{ files: FileEntry[] }> = ({ files }) => {
  return (
    <div className="space-y-4">
       {/* Dropzone */}
       <div className="border-2 border-dashed border-slate-200 rounded-lg h-48 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
          <p className="text-blue-500 font-medium">Drop files here to upload</p>
       </div>

       {/* Actions */}
       <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button className="bg-[#000080] text-white px-4 py-2 rounded text-sm font-bold shadow-sm hover:bg-blue-900 transition-colors">
             Download All
          </button>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
             <select className="border border-slate-300 rounded px-2 py-2 text-sm text-slate-600 focus:outline-none">
               <option>25</option>
             </select>
             
             <div className="flex items-center w-full">
               <input 
                 type="text" 
                 placeholder="Search.." 
                 className="flex-1 pl-3 pr-10 py-2 border border-slate-300 rounded-l text-sm focus:outline-none focus:border-blue-500 min-w-[200px]"
               />
               <button className="px-3 py-2 border border-l-0 border-slate-300 rounded-r bg-slate-50 text-slate-500 hover:bg-slate-100">
                  <Search size={16} />
               </button>
             </div>
          </div>
       </div>

       {/* Table */}
       <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">Filename</th>
                  <th className="px-6 py-3">File type</th>
                  <th className="px-6 py-3">Last Activity</th>
                  <th className="px-6 py-3">Total Comments</th>
                  <th className="px-6 py-3 flex items-center justify-between group cursor-pointer">
                    Date uploaded
                    <span className="text-slate-300 text-[10px] group-hover:text-slate-500">▼</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {files.length > 0 ? files.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">{f.filename}</td>
                    <td className="px-6 py-4">{f.fileType}</td>
                    <td className="px-6 py-4">{f.lastActivity}</td>
                    <td className="px-6 py-4">{f.totalComments}</td>
                    <td className="px-6 py-4">{f.dateUploaded}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500 font-medium">
                      No entries found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
       </div>
    </div>
  );
};
