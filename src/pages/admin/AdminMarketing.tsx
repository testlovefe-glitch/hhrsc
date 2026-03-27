import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../components/Empty';

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

  const [partnerPackageSearch, setPartnerPackageSearch] = useState('');
  const [partnerPackageStatus, setPartnerPackageStatus] = useState('all');
  const [showPackageModal, setShowPackageModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState<any>(null);

  const [partnerPackages, setPartnerPackages] = useState([
    {
      id: 1,
      name: '尊享酱香套餐',
      price: 3300,
      originalPrice: 4599,
      desc: '飞天茅台53度500ml × 1 + 奔富MAX干红葡萄酒 × 2',
      img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      status: '上架',
      sales: 120
    },
    {
      id: 2,
      name: '品味浓香套餐',
      price: 1888,
      originalPrice: 2599,
      desc: '五粮液普五52度500ml × 1 + 剑南春水晶剑52度500ml × 2',
      img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      status: '上架',
      sales: 85
    },
    {
      id: 3,
      name: '清雅清香套餐',
      price: 999,
      originalPrice: 1399,
      desc: '青花汾酒20年53度500ml × 2',
      img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      status: '下架',
      sales: 42
    }
  ]);

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
      status: '进行中', 
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
      status: '未开始', 
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
      status: '已结束', 
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
      status: '进行中'
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
      status: '未开始'
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
      status: '已结束'
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

  const filteredPartnerPackages = partnerPackages.filter(item => {
    const matchesSearch = item.name.includes(partnerPackageSearch) || item.desc.includes(partnerPackageSearch);
    const matchesStatus = partnerPackageStatus === 'all' ? true : item.status === partnerPackageStatus;
    return matchesSearch && matchesStatus;
  });

  const handleSavePackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPackage.id) {
      setPartnerPackages(partnerPackages.map(p => p.id === editingPackage.id ? editingPackage : p));
    } else {
      setPartnerPackages([...partnerPackages, { ...editingPackage, id: Date.now(), sales: 0 }]);
    }
    setShowPackageModal(false);
  };

  const togglePackageStatus = (id: number) => {
    setPartnerPackages(partnerPackages.map(p => {
      if (p.id === id) {
        return { ...p, status: p.status === '上架' ? '下架' : '上架' };
      }
      return p;
    }));
  };

  const deletePackage = (id: number) => {
    if (window.confirm('确定要删除该礼包吗？')) {
      setPartnerPackages(partnerPackages.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">营销活动</h1>
        <button 
          onClick={() => {
            if (activeTab === 'partner-package') {
              setEditingPackage({ name: '', price: '', originalPrice: '', desc: '', img: '', status: '上架' });
              setShowPackageModal(true);
            }
            else if (activeTab === 'flash-sale') navigate('/admin/marketing/flash-sale/create');
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
          <button 
            onClick={() => setActiveTab('partner-package')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'partner-package' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            合伙人礼包
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
                <option value="进行中">进行中</option>
                <option value="未开始">未开始</option>
                <option value="已结束">已结束</option>
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
                {filteredFlashSales.length > 0 ? (
                  filteredFlashSales.map((item) => (
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
                          item.status === '进行中' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          item.status === '未开始' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        }`}>
                          {item.status}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-0">
                      <Empty 
                        icon="bolt"
                        title="未找到秒杀活动"
                        description="没有找到符合条件的秒杀活动，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => {
                          setFlashSaleSearch('');
                          setFlashSaleStatus('all');
                        }}
                      />
                    </td>
                  </tr>
                )}
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
                <option value="进行中">进行中</option>
                <option value="未开始">未开始</option>
                <option value="已结束">已结束</option>
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
                {filteredGroupBuys.length > 0 ? (
                  filteredGroupBuys.map((item) => (
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
                          item.status === '进行中' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          item.status === '未开始' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        }`}>
                          {item.status}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="p-0">
                      <Empty 
                        icon="groups"
                        title="未找到团购免单活动"
                        description="没有找到符合条件的团购免单活动，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => {
                          setGroupBuySearch('');
                          setGroupBuyStatus('all');
                        }}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: Partner Package */}
        {activeTab === 'partner-package' && (
          <div className="overflow-x-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4 bg-slate-50 dark:bg-slate-900/50">
              <select 
                value={partnerPackageStatus}
                onChange={(e) => setPartnerPackageStatus(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              >
                <option value="all">全部状态</option>
                <option value="上架">上架</option>
                <option value="下架">下架</option>
              </select>
              <input 
                type="text" 
                placeholder="搜索礼包名称/描述" 
                value={partnerPackageSearch}
                onChange={(e) => setPartnerPackageSearch(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
            </div>
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">礼包信息</th>
                  <th className="p-4 font-medium">价格</th>
                  <th className="p-4 font-medium">销量</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredPartnerPackages.length > 0 ? (
                  filteredPartnerPackages.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={item.img} alt={item.name} className="w-12 h-12 rounded object-cover border border-slate-200 dark:border-slate-700" />
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{item.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[300px] truncate" title={item.desc}>{item.desc}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-primary">¥{item.price}</span>
                          <span className="text-xs text-slate-400 line-through">¥{item.originalPrice}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.sales}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          item.status === '上架' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button 
                            onClick={() => {
                              setEditingPackage(item);
                              setShowPackageModal(true);
                            }}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            编辑
                          </button>
                          <button 
                            onClick={() => togglePackageStatus(item.id)}
                            className={`${item.status === '上架' ? 'text-amber-500 hover:text-amber-600' : 'text-emerald-500 hover:text-emerald-600'} text-sm font-medium hover:underline`}
                          >
                            {item.status === '上架' ? '下架' : '上架'}
                          </button>
                          <button 
                            onClick={() => deletePackage(item.id)}
                            className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline"
                          >
                            删除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-0">
                      <Empty 
                        icon="card_giftcard"
                        title="未找到合伙人礼包"
                        description="没有找到符合条件的合伙人礼包，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => {
                          setPartnerPackageSearch('');
                          setPartnerPackageStatus('all');
                        }}
                      />
                    </td>
                  </tr>
                )}
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

      {/* Package Modal */}
      {showPackageModal && editingPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-lg shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingPackage.id ? '编辑礼包' : '添加礼包'}
              </h3>
              <button onClick={() => setShowPackageModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleSavePackage} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">礼包名称</label>
                <input 
                  type="text" 
                  required
                  value={editingPackage.name}
                  onChange={e => setEditingPackage({...editingPackage, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
                  placeholder="如：尊享酱香套餐"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">价格 (¥)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    step="0.01"
                    value={editingPackage.price}
                    onChange={e => setEditingPackage({...editingPackage, price: Number(e.target.value)})}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">原价 (¥)</label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    step="0.01"
                    value={editingPackage.originalPrice}
                    onChange={e => setEditingPackage({...editingPackage, originalPrice: Number(e.target.value)})}
                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">礼包内容描述</label>
                <textarea 
                  required
                  value={editingPackage.desc}
                  onChange={e => setEditingPackage({...editingPackage, desc: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary h-20 resize-none"
                  placeholder="如：飞天茅台53度500ml × 1 + 奔富MAX干红葡萄酒 × 2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">图片链接</label>
                <input 
                  type="url" 
                  required
                  value={editingPackage.img}
                  onChange={e => setEditingPackage({...editingPackage, img: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">状态</label>
                <select 
                  value={editingPackage.status}
                  onChange={e => setEditingPackage({...editingPackage, status: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary"
                >
                  <option value="上架">上架</option>
                  <option value="下架">下架</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowPackageModal(false)}
                  className="px-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  取消
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
