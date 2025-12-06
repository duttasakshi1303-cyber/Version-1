import React, { useState } from 'react';
import { TrendingUp, Lock, Mail, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 z-10">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 rounded-full border-2 border-amber-400 flex items-center justify-center bg-[#0B1120] shadow-[0_0_30px_rgba(251,191,36,0.15)] mb-4">
               <TrendingUp className="text-amber-400" size={32} strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl font-extrabold text-white text-center tracking-tight">
              <span className="text-amber-400">TRACK MY</span> PROJECT
            </h1>
            <p className="mt-2 text-sm text-slate-400 text-center">
              Client Project Tracking Portal
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl py-8 px-8 shadow-2xl rounded-2xl border border-white/10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <div className="mt-2 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-[#0B1120]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 sm:text-sm transition-all"
                    placeholder="client@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="mt-2 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-[#0B1120]/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 sm:text-sm transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-slate-600 rounded bg-[#0B1120]/50"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-amber-400 hover:text-amber-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm font-bold text-[#0B1120] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 focus:ring-offset-[#0B1120] disabled:opacity-70 disabled:cursor-wait transition-all transform hover:scale-[1.02]"
                >
                  {loading ? 'Accessing Portal...' : 'Sign In'}
                  {!loading && <ArrowRight size={18} strokeWidth={2.5} />}
                </button>
              </div>
            </form>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            &copy; 2024 Track My Project. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Right side image/graphic for large screens */}
      <div className="hidden lg:block relative w-0 flex-1 bg-[#0B1120]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#0B1120] to-slate-900 flex items-center justify-center p-12">
           <div className="w-full h-full border border-slate-800/50 rounded-3xl bg-slate-900/50 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
               <div className="relative z-10 text-center p-8">
                  <h2 className="text-4xl font-bold text-white mb-4">Visualize Your Success</h2>
                  <p className="text-lg text-slate-400 max-w-md mx-auto">Track progress, manage billing, and stay on top of deadlines with our premium project management suite.</p>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};