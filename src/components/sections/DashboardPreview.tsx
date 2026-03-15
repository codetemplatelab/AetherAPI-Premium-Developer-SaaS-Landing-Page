import React from 'react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Activity, Zap, Users, Globe } from 'lucide-react';

const data = [
  { time: '00:00', requests: 400, latency: 12 },
  { time: '04:00', requests: 300, latency: 15 },
  { time: '08:00', requests: 900, latency: 10 },
  { time: '12:00', requests: 1500, latency: 8 },
  { time: '16:00', requests: 1200, latency: 11 },
  { time: '20:00', requests: 1800, latency: 9 },
  { time: '23:59', requests: 1400, latency: 10 },
];

const StatCard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-emerald-500/10 rounded-lg">
        <Icon className="text-emerald-500 w-5 h-5" />
      </div>
      <span className="text-xs font-bold text-emerald-400">{trend}</span>
    </div>
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">{title}</div>
  </div>
);

export const DashboardPreview = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Real-time <span className="text-emerald-500">Insights</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Monitor your API performance with millisecond precision. 
            Beautiful, actionable analytics built right into the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Requests" value="2.4M" icon={Activity} trend="+12.5%" />
          <StatCard title="Avg Latency" value="9.2ms" icon={Zap} trend="-2.1ms" />
          <StatCard title="Active Users" value="84.2k" icon={Users} trend="+5.4%" />
          <StatCard title="Global Nodes" value="254" icon={Globe} trend="Healthy" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 bg-slate-900/50 border border-white/10 rounded-[32px] h-[400px]"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white">Request Volume</h3>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold">Live</div>
              </div>
            </div>
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area type="monotone" dataKey="requests" stroke="#10b981" fillOpacity={1} fill="url(#colorRequests)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-slate-900/50 border border-white/10 rounded-[32px] h-[400px]"
          >
            <h3 className="text-lg font-bold text-white mb-8">Latency Distribution</h3>
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  />
                  <Line type="monotone" dataKey="latency" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
