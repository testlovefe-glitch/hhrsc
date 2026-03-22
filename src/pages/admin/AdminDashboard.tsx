export default function AdminDashboard() {
  const stats = [
    { label: '今日销售额', value: '¥24,500.00', trend: '+12.5%', isPositive: true, icon: 'payments', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
    { label: '今日订单数', value: '156', trend: '+5.2%', isPositive: true, icon: 'shopping_bag', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    { label: '新增合伙人', value: '24', trend: '-2.1%', isPositive: false, icon: 'handshake', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
    { label: '待处理提现', value: '12', trend: '需处理', isPositive: null, icon: 'account_balance_wallet', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-500/10' },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
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

      {/* Charts & Tables Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart Placeholder */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">销售趋势</h3>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-1.5 outline-none">
              <option>最近7天</option>
              <option>最近30天</option>
              <option>本年</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2 justify-between pt-4 border-b border-slate-100 dark:border-slate-700/50">
            {/* Fake Chart Bars */}
            {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
              <div key={i} className="w-full flex flex-col items-center gap-2">
                <div 
                  className="w-full max-w-[40px] bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-colors relative group cursor-pointer"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    ¥{(height * 120).toFixed(0)}
                  </div>
                </div>
                <span className="text-xs text-slate-400">10/{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">最新订单</h3>
            <button className="text-primary text-sm hover:underline">查看全部</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700/50 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-500">inventory_2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">订单 #100{i}</p>
                    <p className="text-xs text-slate-500">10分钟前</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">¥2,999.00</p>
                  <span className="text-[10px] bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 px-1.5 py-0.5 rounded">待发货</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
