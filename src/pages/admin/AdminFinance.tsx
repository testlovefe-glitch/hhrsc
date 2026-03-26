import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminFinance() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('withdrawals');

  // Filter states
  const [withdrawalStatus, setWithdrawalStatus] = useState('all');
  const [withdrawalSearch, setWithdrawalSearch] = useState('');
  
  const [transactionType, setTransactionType] = useState('all');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionSearch, setTransactionSearch] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Mock Stats
  const stats = {
    totalRevenue: 1258000.00,
    totalCommission: 345000.00,
    pendingWithdrawal: 12500.00,
    withdrawnAmount: 320000.00
  };

  // Mock Withdrawals
  const [withdrawals, setWithdrawals] = useState([
    { id: 'WD-20231026-001', userId: 'U99201', name: '王五', amount: 1500.00, method: '支付宝', account: '137****1122', status: '处理中', date: '2023-10-26 10:30' },
    { id: 'WD-20231025-089', userId: 'U99205', name: '赵六', amount: 3200.00, method: '微信', account: 'zhaoliu_wx', status: '处理中', date: '2023-10-25 15:45' },
    { id: 'WD-20231024-120', userId: 'U99188', name: '孙八', amount: 800.00, method: '银行卡', account: '6222 **** **** 1234', status: '成功', date: '2023-10-24 09:15' },
    { id: 'WD-20231023-045', userId: 'U99210', name: '钱七', amount: 5000.00, method: '支付宝', account: '139****5566', status: '审核拒绝', date: '2023-10-23 18:20', reason: '账户信息不匹配' },
  ]);

  // Mock Transactions
  const transactions = [
    { id: 'TRX-1001', orderId: 'ORD-20231026-001', type: '订单收入', amount: 299.00, payMethod: '微信支付', status: '交易成功', date: '2023-10-26 10:30' },
    { id: 'TRX-1002', orderId: 'ORD-20231025-089', type: '订单收入', amount: 599.00, payMethod: '支付宝', status: '交易成功', date: '2023-10-25 15:45' },
    { id: 'TRX-1003', orderId: 'ORD-20231024-120', type: '退款支出', amount: -199.00, payMethod: '原路退回', status: '交易成功', date: '2023-10-24 09:15' },
    { id: 'TRX-1004', orderId: 'ORD-20231023-045', type: '订单收入', amount: 899.00, payMethod: '微信支付', status: '交易成功', date: '2023-10-23 18:20' },
  ];

  const handleApprove = (id: string) => {
    setWithdrawals(prev => prev.map(w => w.id === id ? { ...w, status: '成功' } : w));
    showToast('提现申请已通过');
  };

  const handleReject = (id: string) => {
    setWithdrawals(prev => prev.map(w => w.id === id ? { ...w, status: '审核拒绝', reason: '管理员拒绝' } : w));
    showToast('提现申请已拒绝');
  };

  const filteredWithdrawals = withdrawals.filter(w => {
    const matchesStatus = withdrawalStatus === 'all' ? true : w.status === withdrawalStatus;
    const matchesSearch = w.name.includes(withdrawalSearch) || w.id.includes(withdrawalSearch);
    return matchesStatus && matchesSearch;
  });

  const filteredTransactions = transactions.filter(t => {
    const matchesType = transactionType === 'all' ? true : (transactionType === 'income' ? t.amount > 0 : t.amount < 0);
    const matchesDate = transactionDate ? t.date.startsWith(transactionDate) : true;
    const matchesSearch = t.id.includes(transactionSearch) || t.orderId.includes(transactionSearch);
    return matchesType && matchesDate && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">财务管理</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            导出报表
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">平台总收入</p>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">¥{stats.totalRevenue.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">savings</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">累计产生佣金</p>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">¥{stats.totalCommission.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">pending_actions</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">待审核提现</p>
          </div>
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-500">¥{stats.pendingWithdrawal.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">payments</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">已打款金额</p>
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">¥{stats.withdrawnAmount.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => setActiveTab('withdrawals')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${activeTab === 'withdrawals' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            提现审核
            {withdrawals.filter(w => w.status === '处理中').length > 0 && (
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                {withdrawals.filter(w => w.status === '处理中').length}
              </span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'transactions' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            交易流水
          </button>
        </div>

        {/* Tab Content: Withdrawals */}
        {activeTab === 'withdrawals' && (
          <div className="overflow-x-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4 bg-slate-50 dark:bg-slate-900/50">
              <select 
                value={withdrawalStatus}
                onChange={(e) => setWithdrawalStatus(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              >
                <option value="all">全部状态</option>
                <option value="处理中">待审核</option>
                <option value="成功">已打款</option>
                <option value="审核拒绝">已拒绝</option>
              </select>
              <input 
                type="text" 
                placeholder="搜索用户姓名/手机号/提现单号" 
                value={withdrawalSearch}
                onChange={(e) => setWithdrawalSearch(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">提现单号</th>
                  <th className="p-4 font-medium">申请人</th>
                  <th className="p-4 font-medium">提现金额</th>
                  <th className="p-4 font-medium">收款账户</th>
                  <th className="p-4 font-medium">申请时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredWithdrawals.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={`https://ui-avatars.com/api/?name=${item.name}&background=random`} alt={item.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.userId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-bold text-slate-900 dark:text-white">¥{item.amount.toFixed(2)}</td>
                    <td className="p-4">
                      <p className="text-sm text-slate-900 dark:text-white">{item.method}</p>
                      <p className="text-xs text-slate-500">{item.account}</p>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.date}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.status === '处理中' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                        item.status === '成功' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                      }`}>
                        {item.status === '处理中' ? '待审核' : item.status === '成功' ? '已打款' : '已拒绝'}
                      </span>
                      {item.reason && <p className="text-xs text-red-500 mt-1">{item.reason}</p>}
                    </td>
                    <td className="p-4 text-right">
                      {item.status === '处理中' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleApprove(item.id)}
                            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400 text-sm font-medium hover:underline"
                          >
                            打款
                          </button>
                          <span className="text-slate-300 dark:text-slate-600">|</span>
                          <button 
                            onClick={() => handleReject(item.id)}
                            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 text-sm font-medium hover:underline"
                          >
                            拒绝
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => navigate(`/admin/users/${item.userId}`)}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          查看用户
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Content: Transactions */}
        {activeTab === 'transactions' && (
          <div className="overflow-x-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4 bg-slate-50 dark:bg-slate-900/50">
              <select 
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              >
                <option value="all">全部类型</option>
                <option value="income">收入</option>
                <option value="expense">支出</option>
              </select>
              <input 
                type="date" 
                value={transactionDate}
                onChange={(e) => setTransactionDate(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none text-slate-500"
              />
              <input 
                type="text" 
                placeholder="搜索流水号/订单号" 
                value={transactionSearch}
                onChange={(e) => setTransactionSearch(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                  <th className="p-4 font-medium">流水号</th>
                  <th className="p-4 font-medium">关联订单</th>
                  <th className="p-4 font-medium">交易类型</th>
                  <th className="p-4 font-medium">交易金额</th>
                  <th className="p-4 font-medium">支付方式</th>
                  <th className="p-4 font-medium">交易时间</th>
                  <th className="p-4 font-medium">状态</th>
                  <th className="p-4 font-medium text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {filteredTransactions.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">{item.id}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.orderId}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        item.amount > 0 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className={`p-4 text-sm font-bold ${item.amount > 0 ? 'text-emerald-600 dark:text-emerald-500' : 'text-red-600 dark:text-red-500'}`}>
                      {item.amount > 0 ? '+' : ''}{item.amount.toFixed(2)}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.payMethod}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{item.date}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400">
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => navigate(`/admin/orders/${item.orderId}`)}
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
        )}
      </div>

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
