import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../components/Empty';
import { OrderStatus, OrderType } from '../../types';

export default function AdminOrders() {
  const navigate = useNavigate();
  const [showExportModal, setShowExportModal] = useState(false);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [referrerFilter, setReferrerFilter] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const orders = [
    { 
      id: 'ORD-20231024-001', 
      type: OrderType.NORMAL,
      user: '张三', 
      phone: '138****1234', 
      product: '飞天茅台 53度 500ml x2',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      amount: 2999.00, 
      paidAmount: 2899.00,
      paymentMethod: '微信支付',
      paymentTime: '2023-10-24 14:35',
      status: OrderStatus.PENDING_SHIPMENT, 
      date: '2023-10-24 14:30',
      referrer: '李总 (U10001)',
      salesCommission: 150.00,
      dividendPool: 50.00
    },
    { 
      id: 'ORD-20231024-002', 
      type: OrderType.FLASH_SALE,
      user: '李四', 
      phone: '139****5678', 
      product: '五粮液 普五 52度 500ml x1',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      amount: 1499.00, 
      paidAmount: 1299.00,
      paymentMethod: '支付宝',
      paymentTime: '2023-10-24 12:20',
      status: OrderStatus.SHIPPED, 
      date: '2023-10-24 12:15',
      referrer: '无',
      salesCommission: 0.00,
      dividendPool: 20.00
    },
    { 
      id: 'ORD-20231023-003', 
      type: OrderType.GROUP_BUY,
      user: '王五', 
      phone: '137****9012', 
      product: '剑南春 水晶剑 52度 500ml x6',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      amount: 2394.00, 
      paidAmount: 1999.00,
      paymentMethod: '微信支付',
      paymentTime: '2023-10-23 09:50',
      status: OrderStatus.COMPLETED, 
      date: '2023-10-23 09:45',
      referrer: '赵六 (U10002)',
      salesCommission: 100.00,
      dividendPool: 30.00
    },
    { 
      id: 'ORD-20231022-004', 
      type: OrderType.NORMAL,
      user: '赵六', 
      phone: '136****3456', 
      product: '洋河 蓝色经典 52度 500ml x1',
      productImg: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      amount: 299.00, 
      paidAmount: 299.00,
      paymentMethod: '微信支付',
      paymentTime: '2023-10-22 10:15',
      status: OrderStatus.REFUNDING, 
      date: '2023-10-22 10:10',
      referrer: '无',
      salesCommission: 0.00,
      dividendPool: 0.00
    },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.includes(searchQuery) || order.phone.includes(searchQuery) || order.user.includes(searchQuery);
    const matchesType = typeFilter ? order.type === typeFilter : true;
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    const matchesReferrer = referrerFilter ? order.referrer.includes(referrerFilter) : true;
    const matchesMinAmount = minAmount ? order.paidAmount >= parseFloat(minAmount) : true;
    const matchesMaxAmount = maxAmount ? order.paidAmount <= parseFloat(maxAmount) : true;
    const matchesDate = dateFilter ? order.date.startsWith(dateFilter) : true;
    return matchesSearch && matchesType && matchesStatus && matchesReferrer && matchesMinAmount && matchesMaxAmount && matchesDate;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">订单管理</h1>
        <button 
          onClick={() => setShowExportModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">download</span>
          导出订单
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center w-full">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索订单号/手机号..." 
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
              <option value="">订单类型</option>
              <option value={OrderType.NORMAL}>普通订单</option>
              <option value={OrderType.FLASH_SALE}>秒杀订单</option>
              <option value={OrderType.GROUP_BUY}>团购订单</option>
            </select>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
            >
              <option value="">所有状态</option>
              <option value={OrderStatus.PENDING_PAYMENT}>待付款</option>
              <option value={OrderStatus.PENDING_SHIPMENT}>待发货</option>
              <option value={OrderStatus.SHIPPED}>已发货</option>
              <option value={OrderStatus.COMPLETED}>已完成</option>
              <option value={OrderStatus.REFUNDING}>退款/售后</option>
              <option value={OrderStatus.CANCELLED}>已取消</option>
            </select>
            <input 
              type="text" 
              placeholder="推荐人ID"
              value={referrerFilter}
              onChange={(e) => setReferrerFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-32"
            />
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                placeholder="最低金额"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-24"
              />
              <span className="text-slate-400">-</span>
              <input 
                type="number" 
                placeholder="最高金额"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-24"
              />
            </div>
            <input 
              type="date" 
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none text-slate-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">订单编号/类型</th>
                <th className="p-4 font-medium">下单用户</th>
                <th className="p-4 font-medium">商品信息</th>
                <th className="p-4 font-medium">金额明细</th>
                <th className="p-4 font-medium">支付信息</th>
                <th className="p-4 font-medium">分销明细</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{order.id}</p>
                      <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium ${
                        order.type === OrderType.NORMAL ? 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300' :
                        order.type === OrderType.FLASH_SALE ? 'bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400' :
                        'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                      }`}>
                        {order.type}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-slate-900 dark:text-white">{order.user}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{order.phone}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={order.productImg} alt="商品" className="w-10 h-10 rounded object-cover border border-slate-200 dark:border-slate-700" />
                        <p className="text-sm text-slate-900 dark:text-white max-w-[150px] truncate" title={order.product}>{order.product}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-slate-500">总额: <span className="line-through">¥{order.amount.toFixed(2)}</span></p>
                      <p className="text-sm font-bold text-primary mt-0.5">实付: ¥{order.paidAmount.toFixed(2)}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-slate-900 dark:text-white">{order.paymentMethod}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{order.paymentTime}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-xs text-slate-500">推荐人: <span className="text-slate-900 dark:text-white">{order.referrer}</span></p>
                      <p className="text-xs text-slate-500 mt-0.5">提成: <span className="text-emerald-600 dark:text-emerald-400">¥{order.salesCommission.toFixed(2)}</span></p>
                      <p className="text-xs text-slate-500 mt-0.5">分红池: <span className="text-purple-600 dark:text-purple-400">¥{order.dividendPool.toFixed(2)}</span></p>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        order.status === OrderStatus.PENDING_SHIPMENT ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                        order.status === OrderStatus.SHIPPED ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                        order.status === OrderStatus.COMPLETED ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        order.status === OrderStatus.REFUNDING ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' :
                        order.status === OrderStatus.CANCELLED ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' :
                        'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex flex-col items-end gap-2">
                        <button onClick={() => navigate(`/admin/orders/${order.id}`)} className="text-primary text-sm font-medium hover:underline">
                          查看详情
                        </button>
                        <div className="flex items-center gap-2">
                          {order.status === OrderStatus.PENDING_SHIPMENT && (
                            <button className="text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:underline">
                              发货
                            </button>
                          )}
                          {(order.status === OrderStatus.PENDING_SHIPMENT || order.status === OrderStatus.SHIPPED) && (
                            <button className="text-red-600 dark:text-red-400 text-xs font-medium hover:underline">
                              退款
                            </button>
                          )}
                          {order.status === OrderStatus.REFUNDING && (
                            <button className="text-red-600 dark:text-red-400 text-xs font-medium hover:underline">
                              处理售后
                            </button>
                          )}
                          <button className="text-slate-500 dark:text-slate-400 text-xs font-medium hover:underline">
                            备注
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-0">
                    <Empty 
                      icon="search_off"
                      title="未找到订单"
                      description="没有找到符合条件的订单，请尝试更改搜索条件"
                      actionText="清除筛选"
                      onAction={() => {
                        setSearchQuery('');
                        setTypeFilter('');
                        setStatusFilter('');
                        setReferrerFilter('');
                        setMinAmount('');
                        setMaxAmount('');
                        setDateFilter('');
                      }}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
          <span className="text-slate-500">共 856 条记录，当前 1/86 页</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">上一页</button>
            <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">2</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">3</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">下一页</button>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">导出订单数据</h3>
              <button onClick={() => setShowExportModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">请选择需要导出的字段：</p>
              <div className="grid grid-cols-2 gap-3">
                {['订单号', '订单类型', '下单用户', '手机号', '商品信息', '订单金额', '实付金额', '支付方式', '支付时间', '订单状态', '推荐人', '销售提成', '分红池注入', '收货地址', '物流单号', '买家备注'].map((field, idx) => (
                  <label key={idx} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{field}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button 
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => {
                  setShowExportModal(false);
                  showToast('报表导出成功');
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">download</span>
                确认导出
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          <p>{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
