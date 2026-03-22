import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AdminUserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('basic');

  // Mock data for orders and after-sales
  const recentOrders = [
    { id: 'ORD-20231024-001', amount: 2999.00, status: '已完成', date: '2023-10-24 14:30', products: '飞天茅台 53度 等2件' },
    { id: 'ORD-20230915-088', amount: 598.00, status: '已发货', date: '2023-09-15 10:20', products: '五粮液 普五 等1件' },
    { id: 'ORD-20230801-102', amount: 1299.00, status: '已完成', date: '2023-08-01 09:15', products: '剑南春 水晶剑 等3件' },
  ];

  const afterSales = [
    { id: 'AS-20231025-001', orderId: 'ORD-20231024-001', productName: '飞天茅台 53度', type: '退货退款', status: '处理中', amount: 2999.00, date: '2023-10-25 10:00' },
    { id: 'AS-20230710-045', orderId: 'ORD-20230708-055', productName: '洋河 蓝色经典', type: '仅退款', status: '已完成', amount: 299.00, date: '2023-07-10 15:30' },
  ];

  useEffect(() => {
    // Mock API call
    setUser({
      id: id || 'U88291',
      name: '张三',
      phone: '13812345678',
      role: '高级合伙人',
      status: '正常',
      teamSize: 128,
      balance: 1280.50,
      totalCommission: 5600.00,
      joinDate: '2023-01-15 10:30:00',
      lastLogin: '2023-10-24 09:15:22',
      address: '广东省深圳市南山区科技园高新南九道9号',
      referrer: '李总 (U10001)',
    });
  }, [id]);

  if (!user) return <div className="p-8 text-center text-slate-500">加载中...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/admin/users')}
            className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">用户详情</h1>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
            user.status === '正常' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
            'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
          }`}>
            {user.status}
          </span>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => navigate(`/admin/users/edit/${user.id}`)}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            编辑用户
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6">
        <button 
          onClick={() => setActiveTab('basic')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'basic' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          基本信息
        </button>
        <button 
          onClick={() => setActiveTab('orders')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'orders' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          订单与购买记录
        </button>
        <button 
          onClick={() => setActiveTab('aftersales')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'aftersales' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          售后记录
        </button>
      </div>

      {/* Tab Content: Basic Info */}
      {activeTab === 'basic' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">基本信息</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            <div className="flex items-center gap-4">
              <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt={user.name} className="w-16 h-16 rounded-full" />
              <div>
                <p className="text-lg font-medium text-slate-900 dark:text-white">{user.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">ID: {user.id}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">身份角色</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                  user.role.includes('合伙人') ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                  'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                }`}>
                  {user.role}
                </span>
              </p>
            </div>
            
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">手机号码</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user.phone}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">推荐人</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user.referrer}</p>
            </div>
            
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">注册时间</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user.joinDate}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">最后登录</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user.lastLogin}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">默认收货地址</p>
              <p className="text-sm font-medium text-slate-900 dark:text-white">{user.address}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Orders */}
      {activeTab === 'orders' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">订单与购买记录</h2>
            <span className="text-sm text-slate-500">累计消费: ¥4896.00</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">订单编号</th>
                  <th className="p-4 font-medium">购买商品</th>
                  <th className="p-4 font-medium">订单金额</th>
                  <th className="p-4 font-medium">下单时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{order.id}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{order.products}</td>
                    <td className="p-4 text-sm font-bold text-primary">¥{order.amount.toFixed(2)}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{order.date}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        order.status === '已完成' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => navigate(`/admin/orders/${order.id}`)}
                        className="text-primary text-sm font-medium hover:underline"
                      >
                        查看订单
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content: After-sales */}
      {activeTab === 'aftersales' && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">售后记录</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">售后编号</th>
                  <th className="p-4 font-medium">关联订单</th>
                  <th className="p-4 font-medium">售后商品</th>
                  <th className="p-4 font-medium">类型</th>
                  <th className="p-4 font-medium">退款金额</th>
                  <th className="p-4 font-medium">申请时间</th>
                  <th className="p-4 font-medium">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {afterSales.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.id}</td>
                    <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                      <button onClick={() => navigate(`/admin/orders/${item.orderId}`)} className="hover:text-primary hover:underline">
                        {item.orderId}
                      </button>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.productName}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.type}</td>
                    <td className="p-4 text-sm font-bold text-slate-900 dark:text-white">¥{item.amount.toFixed(2)}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.date}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.status === '已完成' ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' :
                        'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
