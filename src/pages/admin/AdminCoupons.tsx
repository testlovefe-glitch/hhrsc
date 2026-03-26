import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminCoupons() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const coupons = [
    { 
      id: 1, 
      name: '新人专享满减券', 
      type: '新人券', 
      value: '满500减50', 
      threshold: '满500元可用',
      total: 10000, 
      claimed: 4520, 
      used: 1200,
      validity: '领取后7天有效',
      status: '发放中' 
    },
    { 
      id: 2, 
      name: '全场无门槛折扣', 
      type: '平台通用', 
      value: '9.5折', 
      threshold: '无门槛',
      total: 5000, 
      claimed: 5000, 
      used: 4800,
      validity: '2023-10-01 至 2023-10-31',
      status: '已结束' 
    },
    { 
      id: 3, 
      name: '飞天茅台专属券', 
      type: '商品券', 
      value: '立减100', 
      threshold: '满2000元可用',
      total: 1000, 
      claimed: 120, 
      used: 10,
      validity: '2023-11-01 至 2023-11-11',
      status: '发放中' 
    },
  ];

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.name.includes(searchQuery);
    const matchesType = typeFilter ? coupon.type === typeFilter : true;
    const matchesStatus = statusFilter ? coupon.status === statusFilter : true;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/admin/marketing')}
            className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">优惠券管理</h1>
        </div>
        <button 
          onClick={() => navigate('/admin/marketing/coupons/create')}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          创建优惠券
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索优惠券名称..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
            >
              <option value="">所有类型</option>
              <option value="平台通用">平台通用</option>
              <option value="商品券">商品券</option>
              <option value="新人券">新人券</option>
            </select>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
            >
              <option value="">所有状态</option>
              <option value="发放中">发放中</option>
              <option value="已结束">已结束</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">优惠券名称</th>
                <th className="p-4 font-medium">类型</th>
                <th className="p-4 font-medium">面额/折扣</th>
                <th className="p-4 font-medium">使用门槛</th>
                <th className="p-4 font-medium">发放总量</th>
                <th className="p-4 font-medium">已领取/已使用</th>
                <th className="p-4 font-medium">有效期</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredCoupons.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.name}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      item.type === '新人券' ? 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400' :
                      item.type === '商品券' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                      'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-bold text-primary">{item.value}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.threshold}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.total}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 w-10">领取:</span>
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden w-20">
                          <div className="h-full bg-blue-500" style={{ width: `${(item.claimed / item.total) * 100}%` }}></div>
                        </div>
                        <span className="text-xs">{item.claimed}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500 w-10">使用:</span>
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden w-20">
                          <div className="h-full bg-emerald-500" style={{ width: `${(item.used / item.claimed) * 100}%` }}></div>
                        </div>
                        <span className="text-xs">{item.used}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.validity}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      item.status === '发放中' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button 
                        onClick={() => navigate(`/admin/marketing/coupons/records/${item.id}`)}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        发放记录
                      </button>
                      <button className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium hover:underline">编辑</button>
                      {item.status === '发放中' && (
                        <button className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline">停发</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
          <span className="text-slate-500">共 3 条记录，当前 1/1 页</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
