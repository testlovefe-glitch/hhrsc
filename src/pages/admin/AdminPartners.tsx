import { useNavigate } from 'react-router-dom';

export default function AdminPartners() {
  const navigate = useNavigate();

  const partners = [
    { id: 'P88291', name: '张三', phone: '138****1234', level: '高级合伙人', teamSize: 128, totalCommission: 45800.00, currentBalance: 1280.50, status: '正常', joinDate: '2023-01-15' },
    { id: 'P88292', name: '李四', phone: '139****5678', level: '初级合伙人', teamSize: 45, totalCommission: 3200.00, currentBalance: 350.00, status: '正常', joinDate: '2023-03-22' },
    { id: 'P88295', name: '孙七', phone: '135****7890', level: '中级合伙人', teamSize: 89, totalCommission: 15600.20, currentBalance: 890.20, status: '正常', joinDate: '2023-02-18' },
    { id: 'P88298', name: '周八', phone: '133****2233', level: '初级合伙人', teamSize: 12, totalCommission: 800.00, currentBalance: 0.00, status: '冻结', joinDate: '2023-09-10' },
    { id: 'P88299', name: '吴九', phone: '132****4455', level: '高级合伙人', teamSize: 340, totalCommission: 125000.00, currentBalance: 5600.00, status: '正常', joinDate: '2022-11-05' },
  ];

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
          <div className="flex gap-4 items-center">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索姓名/手机号/ID..." 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有等级</option>
              <option value="junior">初级合伙人</option>
              <option value="middle">中级合伙人</option>
              <option value="senior">高级合伙人</option>
            </select>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有状态</option>
              <option value="active">正常</option>
              <option value="frozen">冻结</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">合伙人信息</th>
                <th className="p-4 font-medium">等级</th>
                <th className="p-4 font-medium">团队人数</th>
                <th className="p-4 font-medium">累计佣金</th>
                <th className="p-4 font-medium">当前余额</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {partners.map((partner) => (
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
                      partner.level === '高级合伙人' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                      partner.level === '中级合伙人' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {partner.level}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-slate-400">group</span>
                      {partner.teamSize}
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">¥{partner.totalCommission.toFixed(2)}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">¥{partner.currentBalance.toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      partner.status === '正常' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
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
                      onClick={() => navigate(`/admin/partners/level/${partner.id}`)}
                      className="text-slate-500 hover:text-primary text-sm font-medium hover:underline mr-3"
                    >
                      调整等级
                    </button>
                    <button className={`${partner.status === '正常' ? 'text-red-500 hover:text-red-600' : 'text-emerald-500 hover:text-emerald-600'} text-sm font-medium hover:underline`}>
                      {partner.status === '正常' ? '冻结' : '解冻'}
                    </button>
                  </td>
                </tr>
              ))}
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
    </div>
  );
}
