import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Empty from '../../components/Empty';
import { PartnerLevel, UserStatus } from '../../types';

export default function AdminPartners() {
  const navigate = useNavigate();

  const [partners, setPartners] = useState([
    { id: 'P88291', name: '张三', phone: '138****1234', isPartner: true, level: PartnerLevel.SENIOR, referrer: '系统', teamSize: 128, joinDate: '2023-01-15', status: UserStatus.ACTIVE, monthSales: 15000.00, totalReferralReward: 5000.00, totalSalesCommission: 40800.00 },
    { id: 'P88292', name: '李四', phone: '139****5678', isPartner: true, level: PartnerLevel.JUNIOR, referrer: '张三', teamSize: 45, joinDate: '2023-03-22', status: UserStatus.ACTIVE, monthSales: 3000.00, totalReferralReward: 800.00, totalSalesCommission: 2400.00 },
    { id: 'P88295', name: '孙七', phone: '135****7890', isPartner: true, level: PartnerLevel.MIDDLE, referrer: '张三', teamSize: 89, joinDate: '2023-02-18', status: UserStatus.ACTIVE, monthSales: 8000.00, totalReferralReward: 2000.00, totalSalesCommission: 13600.20 },
    { id: 'P88298', name: '周八', phone: '133****2233', isPartner: true, level: PartnerLevel.JUNIOR, referrer: '李四', teamSize: 12, joinDate: '2023-09-10', status: UserStatus.FROZEN, monthSales: 0.00, totalReferralReward: 100.00, totalSalesCommission: 700.00 },
    { id: 'P88299', name: '吴九', phone: '132****4455', isPartner: true, level: PartnerLevel.SENIOR, referrer: '系统', teamSize: 340, joinDate: '2022-11-05', status: UserStatus.ACTIVE, monthSales: 50000.00, totalReferralReward: 15000.00, totalSalesCommission: 110000.00 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.includes(searchQuery) || partner.phone.includes(searchQuery) || partner.id.includes(searchQuery);
    
    let matchesLevel = true;
    if (levelFilter === PartnerLevel.JUNIOR) matchesLevel = partner.level === PartnerLevel.JUNIOR;
    else if (levelFilter === PartnerLevel.MIDDLE) matchesLevel = partner.level === PartnerLevel.MIDDLE;
    else if (levelFilter === PartnerLevel.SENIOR) matchesLevel = partner.level === PartnerLevel.SENIOR;

    let matchesStatus = true;
    if (statusFilter === UserStatus.ACTIVE) matchesStatus = partner.status === UserStatus.ACTIVE;
    else if (statusFilter === UserStatus.FROZEN) matchesStatus = partner.status === UserStatus.FROZEN;

    const matchesStartDate = startDate ? partner.joinDate >= startDate : true;
    const matchesEndDate = endDate ? partner.joinDate <= endDate : true;

    return matchesSearch && matchesLevel && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const toggleStatus = (id: string) => {
    setPartners(partners.map(p => {
      if (p.id === id) {
        const newStatus = p.status === UserStatus.ACTIVE ? UserStatus.FROZEN : UserStatus.ACTIVE;
        showToast(`合伙人状态已更新为: ${newStatus}`);
        return { ...p, status: newStatus };
      }
      return p;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">合伙人管理</h1>
        <div className="flex gap-3">
          <button 
            onClick={() => navigate('/admin/partners/audit')}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">fact_check</span>
            审核申请
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">3</span>
          </button>
          <button 
            onClick={() => navigate('/admin/partners/add')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            添加合伙人
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center w-full">
            <div className="relative flex-1 min-w-[200px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索姓名/手机号/ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <select 
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
            >
              <option value="">所有等级</option>
              <option value={PartnerLevel.JUNIOR}>{PartnerLevel.JUNIOR}</option>
              <option value={PartnerLevel.MIDDLE}>{PartnerLevel.MIDDLE}</option>
              <option value={PartnerLevel.SENIOR}>{PartnerLevel.SENIOR}</option>
            </select>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
            >
              <option value="">所有状态</option>
              <option value={UserStatus.ACTIVE}>{UserStatus.ACTIVE}</option>
              <option value={UserStatus.FROZEN}>{UserStatus.FROZEN}</option>
            </select>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              />
              <span className="text-slate-500">-</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">合伙人信息</th>
                <th className="p-4 font-medium">等级</th>
                <th className="p-4 font-medium">推荐人</th>
                <th className="p-4 font-medium">团队人数</th>
                <th className="p-4 font-medium">本月销售额</th>
                <th className="p-4 font-medium">累计推荐奖励</th>
                <th className="p-4 font-medium">累计销售提成</th>
                <th className="p-4 font-medium">注册时间</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredPartners.length > 0 ? (
                filteredPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={`https://ui-avatars.com/api/?name=${partner.name}&background=random`} alt={partner.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{partner.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{partner.phone} · {partner.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        partner.level === PartnerLevel.SENIOR ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                        partner.level === PartnerLevel.MIDDLE ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {partner.level}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{partner.referrer}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-slate-400">group</span>
                        {partner.teamSize}
                      </div>
                    </td>
                    <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">¥{partner.monthSales.toFixed(2)}</td>
                    <td className="p-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">¥{partner.totalReferralReward.toFixed(2)}</td>
                    <td className="p-4 text-sm font-medium text-primary">¥{partner.totalSalesCommission.toFixed(2)}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{partner.joinDate}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        partner.status === UserStatus.ACTIVE ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                      }`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => navigate(`/admin/partners/${partner.id}`)}
                        className="text-primary text-sm font-medium hover:underline mr-3"
                      >
                        查看详情
                      </button>
                      <button 
                        onClick={() => navigate(`/admin/partners/edit/${partner.id}`)}
                        className="text-slate-500 hover:text-primary text-sm font-medium hover:underline mr-3"
                      >
                        编辑
                      </button>
                      <button 
                        onClick={() => toggleStatus(partner.id)}
                        className={`${partner.status === UserStatus.ACTIVE ? 'text-red-500 hover:text-red-600' : 'text-emerald-500 hover:text-emerald-600'} text-sm font-medium hover:underline`}
                      >
                        {partner.status === UserStatus.ACTIVE ? '冻结' : '解冻'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="p-0">
                    <Empty 
                      icon="group_off"
                      title="未找到合伙人"
                      description="没有找到符合条件的合伙人，请尝试更改搜索条件"
                      actionText="清除筛选"
                      onAction={() => {
                        setSearchQuery('');
                        setLevelFilter('');
                        setStatusFilter('');
                        setStartDate('');
                        setEndDate('');
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
          <span className="text-slate-500">共 342 条记录，当前 1/35 页</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">上一页</button>
            <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">2</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">3</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">下一页</button>
          </div>
        </div>
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
