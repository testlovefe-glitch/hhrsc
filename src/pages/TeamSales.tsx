import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TeamSales() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');

  // Mock data for team sales
  const teamSales = [
    {
      id: 1,
      memberName: '张三',
      memberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCov-1IBDjVasO4ATENK1JG1phJT6MQjLfN8KjmD6bxQjPkZnGpakbEr34-uj2nSPxjsyv8-DU01ght5qvmiZ-o1Y14DJCupPcMUZeml3BEJaA7K2YIF1Z756jKtVklHiMG5H2ake1L1gA56328p5jn9veOZZpA0oKjb9nycdwfZxCxnzIv23sM3um9cMmcTXH9ZFzToIBhL9ZSbkjbqyeUHZD6P7OG0tb-DR_bIMBk4usNGpCV1Izr_rr8zVkiBTpPw4Dm0sxDcIA',
      productName: '飞天茅台 53度 500ml',
      productImage: 'https://images.unsplash.com/photo-1563514973413-17686b245a49?w=500&q=80',
      amount: 3198.00,
      commission: 319.80,
      date: '2026-03-14 10:30',
      status: '已完成'
    },
    {
      id: 2,
      memberName: '李四',
      memberAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=80',
      productName: '人参枸杞养生酒 500ml 礼盒装',
      productImage: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500&q=80',
      amount: 299.00,
      commission: 29.90,
      date: '2026-03-13 15:45',
      status: '已完成'
    },
    {
      id: 3,
      memberName: '王五',
      memberAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&q=80',
      productName: '五粮液 普五第八代 52度 500ml',
      productImage: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&q=80',
      amount: 1099.00,
      commission: 109.90,
      date: '2026-03-12 09:15',
      status: '待结算'
    },
    {
      id: 4,
      memberName: '赵六',
      memberAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
      productName: '奔富 BIN389 赤霞珠设拉子红葡萄酒',
      productImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500&q=80',
      amount: 699.00,
      commission: 69.90,
      date: '2026-03-11 14:20',
      status: '已完成'
    }
  ];

  // Mock data for chart
  const chartData = [
    { name: '3/08', sales: 4000 },
    { name: '3/09', sales: 3000 },
    { name: '3/10', sales: 5000 },
    { name: '3/11', sales: 2780 },
    { name: '3/12', sales: 6890 },
    { name: '3/13', sales: 4390 },
    { name: '3/14', sales: 5490 },
  ];

  const filteredAndSortedSales = useMemo(() => {
    let result = [...teamSales];

    // Filter by name
    if (searchTerm) {
      result = result.filter(sale => 
        sale.memberName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'date-desc') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'date-asc') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'amount-desc') {
        return b.amount - a.amount;
      } else if (sortBy === 'amount-asc') {
        return a.amount - b.amount;
      }
      return 0;
    });

    return result;
  }, [searchTerm, sortBy]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="material-symbols-outlined cursor-pointer text-slate-600 dark:text-slate-300">arrow_back</button>
          <h1 className="text-lg font-bold">团队销售额</h1>
        </div>
        <div className="w-10"></div> {/* 占位符 */}
      </nav>

      <main className="max-w-md mx-auto pb-8 flex-1 w-full">
        {/* 统计卡片 */}
        <div className="p-4">
          <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-8xl -rotate-12">monitoring</span>
            </div>
            <div className="relative z-10">
              <p className="text-white/80 text-sm font-medium mb-1">团队总销售额 (元)</p>
              <p className="text-3xl font-bold tracking-tight">¥84,320.00</p>
              <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/20 pt-4">
                <div>
                  <p className="text-white/70 text-xs mb-1">本月新增</p>
                  <p className="text-lg font-bold">¥12,450.00</p>
                </div>
                <div>
                  <p className="text-white/70 text-xs mb-1">预计提成</p>
                  <p className="text-lg font-bold">¥1,245.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 销售趋势图表 */}
        <div className="px-4 mt-2 mb-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-lg font-bold mb-4">近7天销售趋势</h2>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    labelStyle={{ color: '#64748b', fontSize: '12px', marginBottom: '4px' }}
                    itemStyle={{ color: '#0f172a', fontSize: '14px', fontWeight: 'bold' }}
                    formatter={(value: number) => [`¥${value}`, '销售额']}
                  />
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 销售记录列表 */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">成员购买记录</h2>
          </div>
          
          {/* 筛选和排序控制区 */}
          <div className="mb-4 flex flex-col gap-3">
            {/* 搜索框 */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input 
                type="text" 
                placeholder="搜索成员姓名..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/50 transition-shadow"
              />
            </div>
            
            {/* 排序选项 */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
              <button 
                onClick={() => setSortBy(sortBy === 'date-desc' ? 'date-asc' : 'date-desc')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${sortBy.startsWith('date') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                时间排序
                <span className="material-symbols-outlined text-[14px]">
                  {sortBy === 'date-desc' ? 'arrow_downward' : sortBy === 'date-asc' ? 'arrow_upward' : 'swap_vert'}
                </span>
              </button>
              <button 
                onClick={() => setSortBy(sortBy === 'amount-desc' ? 'amount-asc' : 'amount-desc')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${sortBy.startsWith('amount') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              >
                金额排序
                <span className="material-symbols-outlined text-[14px]">
                  {sortBy === 'amount-desc' ? 'arrow_downward' : sortBy === 'amount-asc' ? 'arrow_upward' : 'swap_vert'}
                </span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredAndSortedSales.map((sale) => (
              <div key={sale.id} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
                {/* 成员信息 & 状态 */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <img src={sale.memberAvatar} alt={sale.memberName} className="w-6 h-6 rounded-full object-cover" />
                    <span className="text-sm font-medium">{sale.memberName}</span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    sale.status === '已完成' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  }`}>
                    {sale.status}
                  </span>
                </div>
                
                {/* 商品信息 */}
                <div className="flex gap-3">
                  <img src={sale.productImage} alt={sale.productName} className="w-16 h-16 rounded-lg object-cover bg-slate-100" />
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-sm font-bold line-clamp-2">{sale.productName}</p>
                    <div className="flex items-end justify-between mt-2">
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">订单金额: <span className="text-slate-900 dark:text-slate-100 font-semibold">¥{sale.amount.toFixed(2)}</span></p>
                        <p className="text-xs text-primary font-medium">预估提成: ¥{sale.commission.toFixed(2)}</p>
                      </div>
                      <p className="text-[10px] text-slate-400">{sale.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredAndSortedSales.length === 0 && (
              <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                没有找到匹配的记录
              </div>
            )}
          </div>
          
          {/* 加载更多 */}
          {filteredAndSortedSales.length > 0 && (
            <button className="w-full mt-6 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              加载更多记录
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
