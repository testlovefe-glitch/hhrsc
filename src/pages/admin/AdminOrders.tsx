import { useNavigate } from 'react-router-dom';

export default function AdminOrders() {
  const navigate = useNavigate();

  const orders = [
    { id: 'ORD-20231024-001', user: '张三', phone: '138****1234', amount: 2999.00, status: '待发货', date: '2023-10-24 14:30' },
    { id: 'ORD-20231024-002', user: '李四', phone: '139****5678', amount: 1499.00, status: '已发货', date: '2023-10-24 12:15' },
    { id: 'ORD-20231023-003', user: '王五', phone: '137****9012', amount: 399.00, status: '已完成', date: '2023-10-23 09:45' },
    { id: 'ORD-20231023-004', user: '赵六', phone: '136****3456', amount: 598.00, status: '待付款', date: '2023-10-23 08:20' },
    { id: 'ORD-20231022-005', user: '孙七', phone: '135****7890', amount: 1899.00, status: '已取消', date: '2023-10-22 16:10' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">订单管理</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[20px]">download</span>
          导出订单
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
                placeholder="搜索订单号/手机号..." 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有状态</option>
              <option value="pending_payment">待付款</option>
              <option value="pending_shipment">待发货</option>
              <option value="shipped">已发货</option>
              <option value="completed">已完成</option>
              <option value="cancelled">已取消</option>
            </select>
            <input 
              type="date" 
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none text-slate-500"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">订单编号</th>
                <th className="p-4 font-medium">买家信息</th>
                <th className="p-4 font-medium">订单金额</th>
                <th className="p-4 font-medium">下单时间</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{order.id}</td>
                  <td className="p-4">
                    <p className="text-sm text-slate-900 dark:text-white">{order.user}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{order.phone}</p>
                  </td>
                  <td className="p-4 text-sm font-bold text-primary">¥{order.amount.toFixed(2)}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{order.date}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      order.status === '待发货' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                      order.status === '已发货' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                      order.status === '已完成' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      order.status === '已取消' ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' :
                      'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button onClick={() => navigate(`/admin/orders/${order.id}`)} className="text-primary text-sm font-medium hover:underline">
                      查看详情
                    </button>
                    {order.status === '待发货' && (
                      <button className="ml-3 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:underline">
                        发货
                      </button>
                    )}
                  </td>
                </tr>
              ))}
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
    </div>
  );
}
