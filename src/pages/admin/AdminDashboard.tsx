import { useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: '今日交易额', value: '¥24,500.00', trend: '+12.5%', isPositive: true, icon: 'payments', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10', link: '/admin/orders' },
    { label: '今日新增合伙人', value: '24', trend: '+5.2%', isPositive: true, icon: 'handshake', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10', link: '/admin/partners' },
    { label: '待处理提现订单数', value: '12', trend: '需处理', isPositive: null, icon: 'account_balance_wallet', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10', link: '/admin/finance' },
    { label: '分红池总金额', value: '¥128,500.00', trend: '+2.1%', isPositive: true, icon: 'savings', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10', link: '/admin/finance' },
  ];

  const salesData = [
    { name: '10/18', value: 12000 },
    { name: '10/19', value: 15000 },
    { name: '10/20', value: 11000 },
    { name: '10/21', value: 22000 },
    { name: '10/22', value: 18000 },
    { name: '10/23', value: 25000 },
    { name: '10/24', value: 28000 },
  ];

  const partnersData = [
    { name: '10/18', value: 12 },
    { name: '10/19', value: 15 },
    { name: '10/20', value: 8 },
    { name: '10/21', value: 20 },
    { name: '10/22', value: 18 },
    { name: '10/23', value: 25 },
    { name: '10/24', value: 30 },
  ];

  const ordersData = [
    { name: '10/18', value: 45 },
    { name: '10/19', value: 52 },
    { name: '10/20', value: 38 },
    { name: '10/21', value: 65 },
    { name: '10/22', value: 58 },
    { name: '10/23', value: 72 },
    { name: '10/24', value: 85 },
  ];

  const pendingWithdrawals = [
    { id: 'TX20231024001', name: '张三', amount: '¥5,000.00', time: '10分钟前' },
    { id: 'TX20231024002', name: '李四', amount: '¥1,200.00', time: '1小时前' },
    { id: 'TX20231024003', name: '王五', amount: '¥8,500.00', time: '2小时前' },
  ];

  const quickActions = [
    { label: '新建秒杀活动', icon: 'flash_on', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10', link: '/admin/marketing/create' },
    { label: '新建团购活动', icon: 'groups', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10', link: '/admin/marketing/create' },
    { label: '发放优惠券', icon: 'local_activity', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10', link: '/admin/marketing/create' },
    { label: '调整分红池', icon: 'tune', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10', link: '/admin/finance' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">控制台概览</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            导出报表
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            刷新数据
          </button>
        </div>
      </div>

      {/* Core Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            onClick={() => navigate(stat.link)}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:shadow-md hover:border-primary/30 transition-all group"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1 group-hover:text-primary transition-colors">{stat.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
              </div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg}`}>
                <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {stat.isPositive !== null && (
                <span className={`flex items-center text-xs font-medium ${stat.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                  <span className="material-symbols-outlined text-[14px]">
                    {stat.isPositive ? 'trending_up' : 'trending_down'}
                  </span>
                  {stat.trend}
                </span>
              )}
              {stat.isPositive === null && (
                <span className="text-xs font-medium text-orange-500">{stat.trend}</span>
              )}
              <span className="text-xs text-slate-400">较昨日</span>
            </div>
          </div>
        ))}
      </div>

      {/* Trend Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">近7天交易额</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`¥${value}`, '交易额']}
                />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Partners Chart */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">近7天合伙人增长</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={partnersData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`${value} 人`, '新增合伙人']}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="value" fill="#a855f7" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">近7天新增订单数</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ordersData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`${value} 单`, '新增订单']}
                />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section: To-Do & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* To-Do List */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500">assignment_late</span>
            待办事项
          </h3>
          
          <div className="space-y-6 flex-1">
            {/* Pending Withdrawals */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">待审核提现 (12)</h4>
                <button 
                  onClick={() => navigate('/admin/finance')}
                  className="text-primary text-sm hover:underline font-medium"
                >
                  查看全部
                </button>
              </div>
              <div className="space-y-3">
                {pendingWithdrawals.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300">
                        {item.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{item.name} <span className="text-xs text-slate-500 font-normal ml-1">{item.time}</span></p>
                        <p className="text-xs text-slate-500">单号: {item.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{item.amount}</p>
                      <button 
                        onClick={() => navigate('/admin/finance')}
                        className="px-3 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-md text-xs font-medium transition-colors"
                      >
                        去处理
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Shipments */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
              <div className="flex items-center justify-between p-4 bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">待发货订单</h4>
                    <p className="text-xs text-slate-500 mt-0.5">有 45 笔订单等待发货</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/admin/orders')}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  去发货
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">bolt</span>
            快捷操作
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.link)}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:shadow-md bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${action.bg} group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined text-[24px] ${action.color}`}>{action.icon}</span>
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
