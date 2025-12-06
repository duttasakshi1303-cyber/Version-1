import React from 'react';
import { Invoice } from '../types';
import { Download, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

interface BillingProps {
  invoices: Invoice[];
}

export const Billing: React.FC<BillingProps> = ({ invoices }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-500 text-sm font-medium">Total Billed</p>
          <h3 className="text-3xl font-bold text-slate-800 mt-2">$75,000.00</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <p className="text-slate-500 text-sm font-medium">Paid to Date</p>
           <h3 className="text-3xl font-bold text-green-600 mt-2">$35,000.00</h3>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
           <p className="text-slate-500 text-sm font-medium">Outstanding</p>
           <h3 className="text-3xl font-bold text-amber-600 mt-2">$40,000.00</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Invoices</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Download All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">Issue Date</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                    <FileText size={16} className="text-slate-400"/>
                    {invoice.id}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{invoice.issueDate}</td>
                  <td className="px-6 py-4 text-slate-600">{invoice.dueDate}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">${invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${
                      invoice.status === 'paid' ? 'bg-green-50 text-green-700 border-green-200' :
                      invoice.status === 'overdue' ? 'bg-red-50 text-red-700 border-red-200' :
                      'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {invoice.status === 'paid' && <CheckCircle size={12}/>}
                      {invoice.status === 'pending' && <AlertTriangle size={12}/>}
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};