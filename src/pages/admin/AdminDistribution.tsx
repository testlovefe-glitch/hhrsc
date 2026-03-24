import { useState } from 'react';

export default function AdminDistribution() {
  const [activeTab, setActiveTab] = useState('level-config');
  const [showSettleModal, setShowSettleModal] = useState(false);
  const [settleType, setSettleType] = useState('partner_1');

  // Mock Data for Transactions
  const injectRecords = [
    { id: 'INJ-001', time: '2023-10-25 14:30:22', source: '订单 ORD-20231025-001', amount: '+1000.00', pool: '合伙人分红池 (均分至5星级)' },
    { id: 'INJ-002', time: '2023-10-25 15:10:05', source: '订单 ORD-20231025-002', amount: '+450.00', pool: '销售分红池 (30%)' },
    { id: 'INJ-003', time: '2023-10-24 09:00:00', source: '手动调整', amount: '+5000.00', pool: '合伙人分红池 (一星)' },
  ];

  const distributeRecords = [
    { id: 'DIS-001', time: '2023-10-01 00:00:00', period: '2023年9月', rule: '平均分配', totalAmount: '50000.00', participants: 125, pool: '合伙人分红池 (一星)' },
    { id: 'DIS-002', time: '2023-10-01 00:00:00', period: '2023年9月', rule: '权重分配 (金3:银2:铜1)', totalAmount: '120000.00', participants: 45, pool: '销售分红池' },
  ];

  // Mock Data for Earnings
  const earningRecords = [
    { id: 'ERN-001', user: '张三', phone: '138****1234', type: '推荐奖励', amount: '+1000.00', time: '2023-10-25 14:30:22', desc: '推荐新合伙人 李四' },
    { id: 'ERN-002', user: '王五', phone: '139****5678', type: '销售提成', amount: '+299.80', time: '2023-10-25 15:10:05', desc: '订单 ORD-20231025-002 (20%)' },
    { id: 'ERN-003', user: '赵六', phone: '137****9012', type: '分红收益', amount: '+400.00', time: '2023-10-01 00:00:00', desc: '9月一星合伙人分红' },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">分销管理</h1>
        {activeTab === 'earnings-records' && (
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            导出报表
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('level-config')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'level-config' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            合伙人等级配置
          </button>
          <button 
            onClick={() => setActiveTab('pool-config')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'pool-config' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            分红池配置
          </button>
          <button 
            onClick={() => setActiveTab('pool-transactions')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'pool-transactions' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            分红池流水
          </button>
          <button 
            onClick={() => setActiveTab('earnings-records')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'earnings-records' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            收益记录
          </button>
        </div>

        {/* Tab Content: Level Config */}
        {activeTab === 'level-config' && (
          <div className="p-6 space-y-8">
            {/* 星级设置 */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">stars</span>
                星级合伙人晋升规则
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">一星合伙人</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">直推合伙人满</span>
                    <input type="number" defaultValue={3} className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <span className="text-sm text-slate-500">人</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">二星合伙人</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">直推一星满</span>
                    <input type="number" defaultValue={3} className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <span className="text-sm text-slate-500">人</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">三星合伙人</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">直推二星满</span>
                    <input type="number" defaultValue={3} className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <span className="text-sm text-slate-500">人</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">四星合伙人</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">直推三星满</span>
                    <input type="number" defaultValue={3} className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <span className="text-sm text-slate-500">人</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">五星合伙人</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">直推四星满</span>
                    <input type="number" defaultValue={3} className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-primary" />
                    <span className="text-sm text-slate-500">人</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* 销售级别设置 */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">military_tech</span>
                销售级别门槛 (月销售额)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border border-orange-100 dark:border-orange-900/20">
                  <label className="block text-sm font-medium text-orange-800 dark:text-orange-300 mb-2">铜牌门槛</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-orange-600 dark:text-orange-400">¥</span>
                    <input type="number" defaultValue={5000} className="w-full bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-800/30 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-orange-500" />
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">银牌门槛</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400">¥</span>
                    <input type="number" defaultValue={20000} className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-slate-400" />
                  </div>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-xl border border-yellow-200 dark:border-yellow-900/20">
                  <label className="block text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">金牌门槛</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">¥</span>
                    <input type="number" defaultValue={50000} className="w-full bg-white dark:bg-slate-800 border border-yellow-300 dark:border-yellow-800/30 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-yellow-500" />
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-700" />

            {/* 基础奖励设置 */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">payments</span>
                基础奖励设置
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">推荐奖励金额 (元/人)</label>
                  <input type="number" defaultValue={1000} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                  <p className="text-xs text-slate-500 mt-1.5">每推荐一个新合伙人，推荐人可获得的固定奖励金额。</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">普通订单销售提成比例 (%)</label>
                  <input type="number" defaultValue={20} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                  <p className="text-xs text-slate-500 mt-1.5">合伙人推广普通商品订单时，可获得的提成比例。</p>
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

        {/* Tab Content: Pool Config */}
        {activeTab === 'pool-config' && (
          <div className="p-6 space-y-8">
            {/* 合伙人分红池 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">account_balance</span>
                  合伙人分红池配置
                </h3>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">每次注入金额 (元)</label>
                    <input type="number" defaultValue={1000} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                    <p className="text-xs text-slate-500 mt-1.5">新合伙人加入时，注入分红池的总金额，将平均分配至5个星级池。</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">分红周期</label>
                    <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors">
                      <option value="monthly">每月</option>
                      <option value="weekly">每周</option>
                      <option value="custom">自定义</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">分配算法</label>
                  <select className="w-full md:w-1/2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors">
                    <option value="average">平均分配 (池内总金额 ÷ 达标人数)</option>
                    <option value="weight">权重分配 (预留)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 销售分红池 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">storefront</span>
                  销售分红池配置
                </h3>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-100 dark:border-slate-700/50 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">订单注入比例 (%)</label>
                    <input type="number" defaultValue={30} className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors" />
                    <p className="text-xs text-slate-500 mt-1.5">订单实付金额的该比例将注入销售分红池。</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">分红周期</label>
                    <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors">
                      <option value="monthly">每月</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">分配权重配置</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-yellow-600 dark:text-yellow-500 font-medium">金牌系数</span>
                      <input type="number" defaultValue={3} className="w-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-primary text-center" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">银牌系数</span>
                      <input type="number" defaultValue={2} className="w-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-primary text-center" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-orange-600 dark:text-orange-500 font-medium">铜牌系数</span>
                      <input type="number" defaultValue={1} className="w-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-primary text-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button 
                onClick={() => setShowSettleModal(true)}
                className="px-6 py-2 bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">calculate</span>
                手动结算分红
              </button>
              <button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                保存配置
              </button>
            </div>
          </div>
        )}

        {/* Tab Content: Pool Transactions */}
        {activeTab === 'pool-transactions' && (
          <div>
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4">
              <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
                <option value="all">所有记录类型</option>
                <option value="inject">资金注入记录</option>
                <option value="distribute">分红发放记录</option>
              </select>
              <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
                <option value="all">所有分红池</option>
                <option value="partner">合伙人分红池 (所有星级)</option>
                <option value="sales">销售分红池</option>
              </select>
            </div>

            <div className="p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">资金注入记录</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                      <th className="p-4 font-medium">流水号</th>
                      <th className="p-4 font-medium">时间</th>
                      <th className="p-4 font-medium">来源</th>
                      <th className="p-4 font-medium">所属池子</th>
                      <th className="p-4 font-medium text-right">金额</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {injectRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.time}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.source}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.pool}</td>
                        <td className="p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 text-right">{record.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">分红发放记录</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                      <th className="p-4 font-medium">发放单号</th>
                      <th className="p-4 font-medium">发放时间</th>
                      <th className="p-4 font-medium">所属池子</th>
                      <th className="p-4 font-medium">发放周期</th>
                      <th className="p-4 font-medium">分配规则</th>
                      <th className="p-4 font-medium">参与人数</th>
                      <th className="p-4 font-medium text-right">发放总金额</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {distributeRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.time}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.pool}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.period}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.rule}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.participants} 人</td>
                        <td className="p-4 text-sm font-medium text-red-500 text-right">- {record.totalAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Earnings Records */}
        {activeTab === 'earnings-records' && (
          <div>
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                  <input 
                    type="text" 
                    placeholder="搜索用户昵称/手机号..." 
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                  />
                </div>
                <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
                  <option value="">所有收益类型</option>
                  <option value="recommend">推荐奖励</option>
                  <option value="sales">销售提成</option>
                  <option value="dividend">分红收益</option>
                </select>
                <input type="date" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary text-slate-500" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                    <th className="p-4 font-medium">记录ID</th>
                    <th className="p-4 font-medium">用户</th>
                    <th className="p-4 font-medium">收益类型</th>
                    <th className="p-4 font-medium">明细说明</th>
                    <th className="p-4 font-medium">时间</th>
                    <th className="p-4 font-medium text-right">金额</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {earningRecords.map((record) => (
                    <tr key={record.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{record.id}</td>
                      <td className="p-4">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{record.user}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{record.phone}</p>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          record.type === '推荐奖励' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                          record.type === '销售提成' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'
                        }`}>
                          {record.type}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.desc}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{record.time}</td>
                      <td className="p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400 text-right">{record.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
              <span className="text-slate-500">共 3 条记录，当前 1/1 页</span>
              <div className="flex gap-1">
                <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>上一页</button>
                <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
                <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50" disabled>下一页</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Manual Settle Modal */}
      {showSettleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">手动结算分红</h3>
              <button onClick={() => setShowSettleModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">选择要结算的分红池</label>
                <select 
                  value={settleType}
                  onChange={(e) => setSettleType(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                >
                  <option value="partner_1">合伙人分红池 - 一星</option>
                  <option value="partner_2">合伙人分红池 - 二星</option>
                  <option value="partner_3">合伙人分红池 - 三星</option>
                  <option value="partner_4">合伙人分红池 - 四星</option>
                  <option value="partner_5">合伙人分红池 - 五星</option>
                  <option value="sales">销售分红池</option>
                </select>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-amber-800 dark:text-amber-400">当前池内可分配金额</span>
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-500">¥ 12,500.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-800 dark:text-amber-400">预计参与分配人数</span>
                  <span className="text-sm font-medium text-amber-800 dark:text-amber-400">45 人</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                确认结算后，系统将立即生成分红发放记录，并将分红金额计入对应合伙人的收益账户中。此操作不可撤销。
              </p>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button 
                onClick={() => setShowSettleModal(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setShowSettleModal(false)}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                确认结算
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
