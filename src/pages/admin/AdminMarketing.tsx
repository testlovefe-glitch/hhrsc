import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminMarketing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flash-sale');
  const [showDataModal, setShowDataModal] = useState(false);
  const [selectedFlashSale, setSelectedFlashSale] = useState<any>(null);

  // Filter states
  const [flashSaleSearch, setFlashSaleSearch] = useState('');
  const [flashSaleStatus, setFlashSaleStatus] = useState('all');
  
  const [groupBuySearch, setGroupBuySearch] = useState('');
  const [groupBuyStatus, setGroupBuyStatus] = useState('all');

  const flashSales = [
    { 
      id: 1, 
      name: '周末高端白酒秒杀', 
      productName: '飞天茅台 53度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      price: 1499.00,
      originalPrice: 2999.00,
      stock: 45,
      totalStock: 100,
      status: 'active', 
      startTime: '2023-11-01 10:00', 
      endTime: '2023-11-02 23:59',
      stats: { participants: 1250, orders: 55, amount: 82445.00, soldOutTime: '-' }
    },
    { 
      id: 2, 
      name: '双十一名酒预热', 
      productName: '五粮液 普五 52度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      price: 899.00,
      originalPrice: 1499.00,
      stock: 200,
      totalStock: 200,
      status: 'upcoming', 
      startTime: '2023-11-05 00:00', 
      endTime: '2023-11-10 23:59',
      stats: { participants: 0, orders: 0, amount: 0.00, soldOutTime: '-' }
    },
    { 
      id: 3, 
      name: '中秋特惠专场', 
      productName: '剑南春 水晶剑 52度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      price: 359.00,
      originalPrice: 489.00,
      stock: 0,
      totalStock: 500,
      status: 'ended', 
      startTime: '2023-09-28 00:00', 
      endTime: '2023-09-30 23:59',
      stats: { participants: 8500, orders: 500, amount: 179500.00, soldOutTime: '2023-09-28 14:23:05' }
    },
  ];

  const groupBuys = [
    {
      id: 1,
      name: '国窖1573三人团',
      productName: '国窖1573 52度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      groupSize: 3,
      completedGroups: 156,
      freeRule: '团长免单',
      startTime: '2023-10-01 00:00',
      endTime: '2023-10-31 23:59',
      status: 'active'
    },
    {
      id: 2,
      name: '青花汾酒20五人团',
      productName: '青花汾酒20 53度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      groupSize: 5,
      completedGroups: 89,
      freeRule: '随机免单一员',
      startTime: '2023-11-01 00:00',
      endTime: '2023-11-11 23:59',
      status: 'upcoming'
    },
    {
      id: 3,
      name: '洋河梦之蓝M6两人团',
      productName: '洋河梦之蓝M6 52度 500ml',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      groupSize: 2,
      completedGroups: 420,
      freeRule: '随机免单一员',
      startTime: '2023-09-01 00:00',
      endTime: '2023-09-30 23:59',
      status: 'ended'
    }
  ];

  const coupons = [
    {
      id: 1,
      name: '新人无门槛10元券',
      type: '无门槛',
      value: '10元',
      total: 10000,
      claimed: 8500,
      status: 'active'
    },
    {
      id: 2,
      name: '满199减30优惠券',
      type: '满减券',
      value: '满199减30',
      total: 5000,
      claimed: 1200,
      status: 'active'
    },
    {
      id: 3,
      name: '中秋特惠满500减100',
      type: '满减券',
      value: '满500减100',
      total: 2000,
      claimed: 2000,
      status: 'ended'
    }
  ];

  const filteredFlashSales = flashSales.filter(item => {
    const matchesSearch = item.name.includes(flashSaleSearch) || item.productName.includes(flashSaleSearch);
    const matchesStatus = flashSaleStatus === 'all' ? true : item.status === flashSaleStatus;
    return matchesSearch && matchesStatus;
  });

  const filteredGroupBuys = groupBuys.filter(item => {
    const matchesSearch = item.name.includes(groupBuySearch) || item.productName.includes(groupBuySearch);
    const matchesStatus = groupBuyStatus === 'all' ? true : item.status === groupBuyStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">营销活动</h1>
        <button 
          onClick={() => {
            if (activeTab === 'flash-sale') navigate('/admin/marketing/flash-sale/create');
            else if (activeTab === 'coupons') navigate('/admin/marketing/coupons/create');
            else if (activeTab === 'group-buy') navigate('/admin/marketing/group-buy/create');
            else navigate('/admin/marketing/create');
          }}
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
            onClick={() => setActiveTab('group-buy')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'group-buy' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            团购免单
          </button>
        </div>

        {/* Tab Content: Flash Sale */}
        {activeTab === 'flash-sale' && (
          <div className="overflow-x-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4 bg-slate-50 dark:bg-slate-900/50">
              <select 
                value={flashSaleStatus}
                onChange={(e) => setFlashSaleStatus(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              >
                <option value="all">全部状态</option>
                <option value="active">进行中</option>
                <option value="upcoming">未开始</option>
                <option value="ended">已结束</option>
              </select>
              <input 
                type="text" 
                placeholder="搜索活动名称/商品名称" 
                value={flashSaleSearch}
                onChange={(e) => setFlashSaleSearch(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
            </div>
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">活动名称</th>
                  <th className="p-4 font-medium">秒杀商品</th>
                  <th className="p-4 font-medium">秒杀价/原价</th>
                  <th className="p-4 font-medium">剩余/总库存</th>
                  <th className="p-4 font-medium">活动时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredFlashSales.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.name}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={item.productImg} alt={item.productName} className="w-10 h-10 rounded object-cover border border-slate-200 dark:border-slate-700" />
                        <p className="text-sm text-slate-900 dark:text-white max-w-[150px] truncate" title={item.productName}>{item.productName}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-bold text-red-500">¥{item.price.toFixed(2)}</p>
                      <p className="text-xs text-slate-500 line-through">¥{item.originalPrice.toFixed(2)}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden w-16">
                          <div className={`h-full ${item.stock === 0 ? 'bg-slate-400' : 'bg-orange-500'}`} style={{ width: `${(item.stock / item.totalStock) * 100}%` }}></div>
                        </div>
                        <span className="text-xs text-slate-600 dark:text-slate-400">{item.stock}/{item.totalStock}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <div>起：{item.startTime}</div>
                      <div>止：{item.endTime}</div>
                    </td>
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
                        <button 
                          onClick={() => {
                            setSelectedFlashSale(item);
                            setShowDataModal(true);
                          }}
                          className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium hover:underline"
                        >
                          数据
                        </button>
                        <button className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline">删除</button>
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
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">优惠券概览</h2>
              <button 
                onClick={() => navigate('/admin/marketing/coupons')}
                className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
              >
                进入优惠券管理中心
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
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
                          <button onClick={() => navigate('/admin/marketing/coupons')} className="text-primary text-sm font-medium hover:underline">管理</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Group Buy */}
        {activeTab === 'group-buy' && (
          <div className="overflow-x-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4 bg-slate-50 dark:bg-slate-900/50">
              <select 
                value={groupBuyStatus}
                onChange={(e) => setGroupBuyStatus(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              >
                <option value="all">全部状态</option>
                <option value="active">进行中</option>
                <option value="upcoming">未开始</option>
                <option value="ended">已结束</option>
              </select>
              <input 
                type="text" 
                placeholder="搜索活动名称/商品名称" 
                value={groupBuySearch}
                onChange={(e) => setGroupBuySearch(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
            </div>
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">活动名称</th>
                  <th className="p-4 font-medium">商品名称</th>
                  <th className="p-4 font-medium">团型</th>
                  <th className="p-4 font-medium">已成团数</th>
                  <th className="p-4 font-medium">免单规则</th>
                  <th className="p-4 font-medium">活动时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredGroupBuys.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.name}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={item.productImg} alt={item.productName} className="w-10 h-10 rounded object-cover border border-slate-200 dark:border-slate-700" />
                        <p className="text-sm text-slate-900 dark:text-white max-w-[150px] truncate" title={item.productName}>{item.productName}</p>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.groupSize}人团</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.completedGroups}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        item.freeRule === '团长免单' ? 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                      }`}>
                        {item.freeRule}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <div>起：{item.startTime}</div>
                      <div>止：{item.endTime}</div>
                    </td>
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
                        <button 
                          onClick={() => navigate(`/admin/marketing/group-buy/details/${item.id}`)}
                          className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-sm font-medium hover:underline"
                        >
                          详情
                        </button>
                        <button className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline">删除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Data Modal */}
      {showDataModal && selectedFlashSale && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-lg shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">效果数据 - {selectedFlashSale.name}</h3>
              <button onClick={() => setShowDataModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">参与人数</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{selectedFlashSale.stats.participants}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">成交订单数</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">{selectedFlashSale.stats.orders}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">成交金额</p>
                <p className="text-2xl font-bold text-primary">¥{selectedFlashSale.stats.amount.toFixed(2)}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">售罄时间</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{selectedFlashSale.stats.soldOutTime}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                onClick={() => setShowDataModal(false)}
                className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
