import { useState } from 'react';

export default function AdminWithdrawal() {
  const [activeTab, setActiveTab] = useState('audit');
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [auditAction, setAuditAction] = useState<'pass' | 'reject'>('pass');
  const [rejectReason, setRejectReason] = useState('');

  // Filter states for audit tab
  const [auditSearch, setAuditSearch] = useState('');
  const [auditStatus, setAuditStatus] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const [withdrawals, setWithdrawals] = useState([
    { id: 'WD-20231025-001', user: { name: '张三', phone: '138****1234' }, amount: 500.00, method: '微信零钱', fee: 0, actualAmount: 500.00, time: '2023-10-25 14:30:22', status: 'pending', reason: '' },
    { id: 'WD-20231025-002', user: { name: '李四', phone: '139****5678' }, amount: 1200.00, method: '银行卡', fee: 12.00, actualAmount: 1188.00, time: '2023-10-25 10:15:00', status: 'pending', reason: '' },
    { id: 'WD-20231024-003', user: { name: '王五', phone: '137****9012' }, amount: 300.00, method: '微信零钱', fee: 0, actualAmount: 300.00, time: '2023-10-24 16:45:10', status: 'passed', reason: '' },
    { id: 'WD-20231024-004', user: { name: '赵六', phone: '136****3456' }, amount: 800.00, method: '银行卡', fee: 8.00, actualAmount: 792.00, time: '2023-10-24 09:20:00', status: 'rejected', reason: '银行卡信息不匹配' },
    { id: 'WD-20231023-005', user: { name: '钱七', phone: '135****7890' }, amount: 2000.00, method: '微信零钱', fee: 0, actualAmount: 2000.00, time: '2023-10-23 11:10:00', status: 'failed', reason: '微信商户余额不足' },
  ]);

  const paymentRecords = [
    { id: 'PAY-001', withdrawalId: 'WD-20231024-003', user: '王五', amount: 300.00, method: '微信企业付款', time: '2023-10-24 17:00:00', status: 'success', reason: '-' },
    { id: 'PAY-002', withdrawalId: 'WD-20231023-005', user: '钱七', amount: 2000.00, method: '微信企业付款', time: '2023-10-23 11:30:00', status: 'failed', reason: '微信商户余额不足，请充值后重试' },
  ];

  const accounts = [
    { id: 'ACC-001', user: { name: '张三', phone: '138****1234' }, type: '微信零钱', accountNo: 'oXv1-5... (OpenID)', bindTime: '2023-09-01 10:00:00' },
    { id: 'ACC-002', user: { name: '李四', phone: '139****5678' }, type: '银行卡', accountNo: '招商银行 (尾号 8888)', bindTime: '2023-09-15 14:20:00' },
    { id: 'ACC-003', user: { name: '王五', phone: '137****9012' }, type: '微信零钱', accountNo: 'oXv1-9... (OpenID)', bindTime: '2023-10-05 09:15:00' },
  ];

  const openAuditModal = (record: any, action: 'pass' | 'reject') => {
    setSelectedRecord(record);
    setAuditAction(action);
    setRejectReason('');
    setShowAuditModal(true);
  };

  const handleAuditConfirm = () => {
    if (!selectedRecord) return;
    
    if (auditAction === 'reject' && !rejectReason.trim()) {
      showToast('请输入拒绝原因');
      return;
    }

    setWithdrawals(prev => prev.map(w => {
      if (w.id === selectedRecord.id) {
        return {
          ...w,
          status: auditAction === 'pass' ? 'passed' : 'rejected',
          reason: auditAction === 'reject' ? rejectReason : ''
        };
      }
      return w;
    }));

    setShowAuditModal(false);
    showToast(auditAction === 'pass' ? '审核已通过并打款' : '审核已拒绝');
  };

  const filteredWithdrawals = withdrawals.filter(record => {
    const matchesSearch = record.user.name.includes(auditSearch) || record.user.phone.includes(auditSearch);
    const matchesStatus = auditStatus ? record.status === auditStatus : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">提现管理</h1>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('audit')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'audit' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            提现审核
          </button>
          <button 
            onClick={() => setActiveTab('records')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'records' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            打款记录
          </button>
          <button 
            onClick={() => setActiveTab('accounts')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'accounts' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            提现账户
          </button>
          <button 
            onClick={() => setActiveTab('rules')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'rules' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            提现规则配置
          </button>
        </div>

        {/* Tab Content: Audit */}
        {activeTab === 'audit' && (
          <div>
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                  <input 
                    type="text" 
                    placeholder="搜索申请人/手机号..." 
                    value={auditSearch}
                    onChange={(e) => setAuditSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                  />
                </div>
                <select 
                  value={auditStatus}
                  onChange={(e) => setAuditStatus(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
                >
                  <option value="">所有状态</option>
                  <option value="pending">待审核</option>
                  <option value="passed">审核通过</option>
                  <option value="rejected">审核拒绝</option>
                  <option value="failed">打款失败</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-medium">申请单号</th>
                    <th className="p-4 font-medium">申请人</th>
                    <th className="p-4 font-medium text-right">申请金额</th>
                    <th className="p-4 font-medium">提现方式</th>
                    <th className="p-4 font-medium text-right">手续费</th>
                    <th className="p-4 font-medium text-right">实际到账</th>
                    <th className="p-4 font-medium">申请时间</th>
                    <th className="p-4 font-medium">状态</th>
                    <th className="p-4 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {filteredWithdrawals.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{record.user.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{record.user.phone}</p>
                      </td>
                      <td className="p-4 text-sm font-medium text-slate-900 dark:text-white text-right">¥{record.amount.toFixed(2)}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          {record.method === '微信零钱' ? (
                            <span className="material-symbols-outlined text-emerald-500 text-[16px]">chat</span>
                          ) : (
                            <span className="material-symbols-outlined text-blue-500 text-[16px]">credit_card</span>
                          )}
                          {record.method}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-500 text-right">¥{record.fee.toFixed(2)}</td>
                      <td className="p-4 text-sm font-bold text-emerald-600 dark:text-emerald-400 text-right">¥{record.actualAmount.toFixed(2)}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.time}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          record.status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                          record.status === 'passed' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          record.status === 'failed' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                        }`}>
                          {record.status === 'pending' ? '待审核' : 
                           record.status === 'passed' ? '审核通过' : 
                           record.status === 'failed' ? '打款失败' : '审核拒绝'}
                        </span>
                        {(record.status === 'rejected' || record.status === 'failed') && (
                          <p className="text-xs text-red-500 mt-1 max-w-[150px] truncate" title={record.reason}>{record.reason}</p>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        {record.status === 'pending' ? (
                          <div className="flex items-center justify-end gap-3">
                            <button 
                              onClick={() => openAuditModal(record, 'pass')}
                              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium hover:underline"
                            >
                              通过
                            </button>
                            <button 
                              onClick={() => openAuditModal(record, 'reject')}
                              className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline"
                            >
                              拒绝
                            </button>
                          </div>
                        ) : record.status === 'failed' ? (
                          <button className="text-primary hover:text-primary/80 text-sm font-medium hover:underline">重新打款</button>
                        ) : (
                          <span className="text-sm text-slate-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
              <span className="text-slate-500">共 5 条记录，当前 1/1 页</span>
              <div className="flex gap-1">
                <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>上一页</button>
                <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
                <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>下一页</button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Payment Records */}
        {activeTab === 'records' && (
          <div>
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                  <input 
                    type="text" 
                    placeholder="搜索打款单号/提现单号..." 
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                  />
                </div>
                <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
                  <option value="">所有状态</option>
                  <option value="success">打款成功</option>
                  <option value="failed">打款失败</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-medium">打款单号</th>
                    <th className="p-4 font-medium">关联提现单</th>
                    <th className="p-4 font-medium">收款人</th>
                    <th className="p-4 font-medium text-right">打款金额</th>
                    <th className="p-4 font-medium">打款方式</th>
                    <th className="p-4 font-medium">打款时间</th>
                    <th className="p-4 font-medium">状态</th>
                    <th className="p-4 font-medium">失败原因</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {paymentRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                      <td className="p-4 text-sm text-primary hover:underline cursor-pointer">{record.withdrawalId}</td>
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{record.user}</td>
                      <td className="p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 text-right">¥{record.amount.toFixed(2)}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.method}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.time}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          record.status === 'success' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                        }`}>
                          {record.status === 'success' ? '打款成功' : '打款失败'}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-red-500 max-w-[200px] truncate" title={record.reason}>{record.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Accounts */}
        {activeTab === 'accounts' && (
          <div>
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                  <input 
                    type="text" 
                    placeholder="搜索用户/账号..." 
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                  />
                </div>
                <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
                  <option value="">所有账户类型</option>
                  <option value="wechat">微信零钱</option>
                  <option value="bank">银行卡</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-medium">账户ID</th>
                    <th className="p-4 font-medium">所属用户</th>
                    <th className="p-4 font-medium">账户类型</th>
                    <th className="p-4 font-medium">账户信息</th>
                    <th className="p-4 font-medium">绑定时间</th>
                    <th className="p-4 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {accounts.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{record.user.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{record.user.phone}</p>
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          {record.type === '微信零钱' ? (
                            <span className="material-symbols-outlined text-emerald-500 text-[16px]">chat</span>
                          ) : (
                            <span className="material-symbols-outlined text-blue-500 text-[16px]">credit_card</span>
                          )}
                          {record.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm font-mono text-slate-600 dark:text-slate-300">{record.accountNo}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.bindTime}</td>
                      <td className="p-4 text-right">
                        <button className="text-red-500 hover:text-red-600 text-sm font-medium hover:underline">解绑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Rules */}
        {activeTab === 'rules' && (
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">settings</span>
                基础提现规则
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">最低提现金额 (元)</label>
                  <input type="number" defaultValue={100} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                  <p className="text-xs text-slate-500 mt-1.5">用户发起提现的最低金额限制。</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">提现手续费比例 (%)</label>
                  <input type="number" defaultValue={0} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                  <p className="text-xs text-slate-500 mt-1.5">提现时扣除的手续费比例，0表示免手续费。</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">每日提现次数限制</label>
                  <input type="number" defaultValue={1} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                  <p className="text-xs text-slate-500 mt-1.5">每个用户每天最多可发起的提现次数。</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">security</span>
                提现审核与打款
              </h3>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">提现审核开关</label>
                    <p className="text-xs text-slate-500 mt-1">开启后，所有提现申请需人工审核；关闭后，系统将自动打款至用户账户。</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                保存配置
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Audit Modal */}
      {showAuditModal && selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {auditAction === 'pass' ? '确认通过提现申请' : '拒绝提现申请'}
              </h3>
              <button onClick={() => setShowAuditModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">申请人</span>
                  <span className="font-medium text-slate-900 dark:text-white">{selectedRecord.user.name} ({selectedRecord.user.phone})</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-500">提现方式</span>
                  <span className="font-medium text-slate-900 dark:text-white">{selectedRecord.method}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">实际到账金额</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">¥{selectedRecord.actualAmount.toFixed(2)}</span>
                </div>
              </div>

              {auditAction === 'pass' ? (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  确认通过后，系统将自动调用接口向该用户的{selectedRecord.method}打款。请确保商户余额充足。
                </p>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">拒绝原因 <span className="text-red-500">*</span></label>
                  <textarea 
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    placeholder="请输入拒绝原因，用户端可见"
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none h-24"
                  ></textarea>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowAuditModal(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleAuditConfirm}
                className={`px-4 py-2 text-white rounded-lg text-sm font-medium transition-colors ${
                  auditAction === 'pass' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                {auditAction === 'pass' ? '确认通过并打款' : '确认拒绝'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <span className={`material-symbols-outlined ${toastMessage.includes('请') ? 'text-amber-400' : 'text-emerald-400'}`}>
            {toastMessage.includes('请') ? 'warning' : 'check_circle'}
          </span>
          <p>{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
