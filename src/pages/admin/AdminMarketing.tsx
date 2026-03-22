import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminMarketing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flash-sale');

  const flashSales = [
    { id: 1, name: '周末高端白酒秒杀', status: 'active', startTime: '2023-11-01 10:00', endTime: '2023-11-02 23:59', productsCount: 12 },
    { id: 2, name: '双十一名酒预热', status: 'upcoming', startTime: '2023-11-05 00:00', endTime: '2023-11-10 23:59', productsCount: 50 },
    { id: 3, name: '中秋特惠专场', status: 'ended', startTime: '2023-09-28 00:00', endTime: '2023-09-30 23:59', productsCount: 8 },
  ];

  const coupons = [
    { id: 1, name: '新人专享满减券', type: '满减', value: '满500减50', total: 10000, claimed: 4520, status: 'active' },
    { id: 2, name: '全场无门槛折扣', type: '折扣', value: '9.5折', total: 5000, claimed: 5000, status: 'ended' },
    { id: 3, name: '合伙人专属礼包券', type: '兑换', value: '免费兑换', total: 1000, claimed: 120, status: 'active' },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">营销活动</h1>
        <button 
          onClick={() => navigate('/admin/marketing/create')}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          创建活动
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => setActiveTab('flash-sale')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'flash-sale' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            限时秒杀
          </button>
          <button 
            onClick={() => setActiveTab('coupons')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'coupons' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            优惠券管理
          </button>
          <button 
            onClick={() => setActiveTab('new-user')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'new-user' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            新人专享
          </button>
        </div>

        {/* Tab Content: Flash Sale */}
        {activeTab === 'flash-sale' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">活动名称</th>
                  <th className="p-4 font-medium">活动时间</th>
                  <th className="p-4 font-medium">商品数量</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {flashSales.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.name}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <div>起：{item.startTime}</div>
                      <div>止：{item.endTime}</div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.productsCount} 件</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        item.status === 'upcoming' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {item.status === 'active' ? '进行中' : item.status === 'upcoming' ? '未开始' : '已结束'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-primary text-sm font-medium hover:underline">编辑</button>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm font-medium">数据</button>
                        <button className="text-red-500 hover:text-red-600 text-sm font-medium">删除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: Coupons */}
        {activeTab === 'coupons' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">优惠券名称</th>
                  <th className="p-4 font-medium">类型/面值</th>
                  <th className="p-4 font-medium">发放总量</th>
                  <th className="p-4 font-medium">已领取</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {coupons.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.name}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <span className="bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400 px-2 py-0.5 rounded text-xs mr-2">{item.type}</span>
                      {item.value}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.total}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden w-24">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${(item.claimed / item.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{item.claimed}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {item.status === 'active' ? '发放中' : '已结束'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-primary text-sm font-medium hover:underline">编辑</button>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm font-medium">停发</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: New User */}
        {activeTab === 'new-user' && (
          <div className="p-8 text-center text-slate-500">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">card_giftcard</span>
            <p>新人专享活动配置加载中...</p>
          </div>
        )}
      </div>
    </div>
  );
}
