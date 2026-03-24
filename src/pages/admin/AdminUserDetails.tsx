import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AdminUserDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({ 'root': true });

  const toggleNode = (id: string) => {
    setExpandedNodes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const networkTree = {
    id: 'root',
    name: '张三',
    level: '高级合伙人',
    avatar: 'https://ui-avatars.com/api/?name=张三&background=random',
    children: [
      {
        id: 'child1',
        name: '李四',
        level: '初级合伙人',
        avatar: 'https://ui-avatars.com/api/?name=李四&background=random',
        children: [
          {
            id: 'child1-1',
            name: '王五',
            level: '普通用户',
            avatar: 'https://ui-avatars.com/api/?name=王五&background=random',
            children: []
          },
          {
            id: 'child1-2',
            name: '钱七',
            level: '初级合伙人',
            avatar: 'https://ui-avatars.com/api/?name=钱七&background=random',
            children: []
          }
        ]
      },
      {
        id: 'child2',
        name: '赵六',
        level: '普通用户',
        avatar: 'https://ui-avatars.com/api/?name=赵六&background=random',
        children: []
      }
    ]
  };

  const renderTreeNode = (node: any, isRoot = false) => {
    const isExpanded = expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className={`flex flex-col ${!isRoot ? 'ml-8 mt-4 relative before:content-[""] before:absolute before:left-[-16px] before:top-[-16px] before:bottom-0 before:w-px before:bg-slate-200 dark:before:bg-slate-700' : ''}`}>
        {!isRoot && (
          <div className="absolute left-[-16px] top-[24px] w-4 h-px bg-slate-200 dark:bg-slate-700"></div>
        )}
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm w-fit relative z-10">
          {hasChildren && (
            <button 
              onClick={() => toggleNode(node.id)}
              className="w-5 h-5 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">
                {isExpanded ? 'remove' : 'add'}
              </span>
            </button>
          )}
          {!hasChildren && <div className="w-5"></div>}
          <img src={node.avatar} alt={node.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">{node.name}</p>
            <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium ${
              node.level.includes('合伙人') ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
              'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            }`}>
              {node.level}
            </span>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="flex flex-col">
            {node.children.map((child: any) => renderTreeNode(child))}
          </div>
        )}
      </div>
    );
  };

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

  const incomeRecords = [
    { id: 'INC-001', type: '直推奖励', amount: 150.00, sourceUser: '李四 (U88292)', date: '2023-10-24 15:00', status: '已入账' },
    { id: 'INC-002', type: '团队分红', amount: 320.50, sourceUser: '团队业绩', date: '2023-10-23 23:59', status: '已入账' },
    { id: 'INC-003', type: '间推奖励', amount: 50.00, sourceUser: '王五 (U88293)', date: '2023-10-22 10:30', status: '已入账' },
  ];

  const networkData = {
    direct: [
      { id: 'U88292', name: '李四', level: '初级合伙人', joinDate: '2023-02-10', teamSize: 15, contribution: 1250.00 },
      { id: 'U88295', name: '赵六', level: '普通用户', joinDate: '2023-05-20', teamSize: 0, contribution: 150.00 },
    ],
    indirect: [
      { id: 'U88293', name: '王五', level: '普通用户', joinDate: '2023-02-15', referrer: '李四', contribution: 50.00 },
      { id: 'U88294', name: '钱七', level: '初级合伙人', joinDate: '2023-03-01', referrer: '李四', contribution: 300.00 },
    ]
  };

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
      <div className="flex border-b border-slate-200 dark:border-slate-700 mb-6 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('basic')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'basic' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          基本信息
        </button>
        <button 
          onClick={() => setActiveTab('income')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'income' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          收益统计
        </button>
        <button 
          onClick={() => setActiveTab('network')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'network' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          关系图谱
        </button>
        <button 
          onClick={() => setActiveTab('orders')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'orders' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
        >
          订单与购买记录
        </button>
        <button 
          onClick={() => setActiveTab('aftersales')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'aftersales' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
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

      {/* Tab Content: Income Stats */}
      {activeTab === 'income' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">累计总收益</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">¥{user.totalCommission.toFixed(2)}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">当前可提现余额</p>
              <p className="text-2xl font-bold text-primary">¥{user.balance.toFixed(2)}</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">已提现总额</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">¥{(user.totalCommission - user.balance).toFixed(2)}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">近期收益明细</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-medium">流水号</th>
                    <th className="p-4 font-medium">收益类型</th>
                    <th className="p-4 font-medium">收益金额</th>
                    <th className="p-4 font-medium">来源用户/说明</th>
                    <th className="p-4 font-medium">入账时间</th>
                    <th className="p-4 font-medium">状态</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {incomeRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{record.id}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.type}</td>
                      <td className="p-4 text-sm font-bold text-emerald-600 dark:text-emerald-400">+¥{record.amount.toFixed(2)}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.sourceUser}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.date}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                          {record.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Network Graph */}
      {activeTab === 'network' && (
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8 overflow-x-auto">
          <div className="min-w-max">
            {renderTreeNode(networkTree, true)}
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
