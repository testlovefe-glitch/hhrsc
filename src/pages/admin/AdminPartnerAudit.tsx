import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminPartnerAudit() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const [applications, setApplications] = useState([
    { id: 'APP-001', userId: 'U99201', name: '王五', phone: '137****1122', applyLevel: '初级合伙人', applyDate: '2023-10-26 09:30', status: 'pending', reason: '拥有500人社群资源' },
    { id: 'APP-002', userId: 'U99205', name: '赵六', phone: '136****3344', applyLevel: '中级合伙人', applyDate: '2023-10-25 14:20', status: 'pending', reason: '线下实体店主，客源稳定' },
    { id: 'APP-003', userId: 'U99210', name: '钱七', phone: '139****5566', applyLevel: '高级合伙人', applyDate: '2023-10-24 11:15', status: 'pending', reason: '电商从业者，月销百万' },
    { id: 'APP-004', userId: 'U99188', name: '孙八', phone: '135****7788', applyLevel: '初级合伙人', applyDate: '2023-10-20 16:45', status: 'approved', reason: '微商团队长' },
    { id: 'APP-005', userId: 'U99150', name: '周九', phone: '138****9900', applyLevel: '中级合伙人', applyDate: '2023-10-18 10:00', status: 'rejected', reason: '资料不全' },
  ]);

  const filteredApplications = applications.filter(app => {
    const matchesTab = app.status === activeTab;
    const matchesSearch = app.name.includes(searchQuery) || app.phone.includes(searchQuery) || app.userId.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  const handleApprove = (id: string) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: 'approved' } : app));
    showToast('申请已通过');
  };

  const handleReject = (id: string) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: 'rejected' } : app));
    showToast('申请已拒绝');
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate('/admin/partners')}
          className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">合伙人申请审核</h1>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-700 p-4 sm:p-0">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${activeTab === 'pending' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
            >
              待审核
              <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                {applications.filter(a => a.status === 'pending').length}
              </span>
            </button>
            <button 
              onClick={() => setActiveTab('approved')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'approved' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
            >
              已通过
            </button>
            <button 
              onClick={() => setActiveTab('rejected')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'rejected' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
            >
              已拒绝
            </button>
          </div>
          <div className="mt-4 sm:mt-0 sm:pr-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索姓名/手机号/ID..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">申请人</th>
                <th className="p-4 font-medium">申请等级</th>
                <th className="p-4 font-medium">申请理由/优势</th>
                <th className="p-4 font-medium">申请时间</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredApplications.length > 0 ? (
                filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={`https://ui-avatars.com/api/?name=${app.name}&background=random`} alt={app.name} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{app.name}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{app.phone} · {app.userId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        app.applyLevel === '高级合伙人' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                        app.applyLevel === '中级合伙人' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                        'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {app.applyLevel}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300 max-w-xs truncate" title={app.reason}>
                      {app.reason}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{app.applyDate}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        app.status === 'pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                        app.status === 'approved' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                      }`}>
                        {app.status === 'pending' ? '待审核' : app.status === 'approved' ? '已通过' : '已拒绝'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      {app.status === 'pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleApprove(app.id)}
                            className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-500 dark:hover:text-emerald-400 text-sm font-medium hover:underline"
                          >
                            通过
                          </button>
                          <span className="text-slate-300 dark:text-slate-600">|</span>
                          <button 
                            onClick={() => handleReject(app.id)}
                            className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 text-sm font-medium hover:underline"
                          >
                            拒绝
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => navigate(`/admin/users/${app.userId}`)}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          查看资料
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500 dark:text-slate-400">
                    暂无{activeTab === 'pending' ? '待审核' : activeTab === 'approved' ? '已通过' : '已拒绝'}的申请记录
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
