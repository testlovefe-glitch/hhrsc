import { useNavigate } from 'react-router-dom';

export default function AdminUsers() {
  const navigate = useNavigate();

  const users = [
    { id: 'U88291', name: '张三', phone: '138****1234', role: '高级合伙人', teamSize: 128, balance: 1280.50, joinDate: '2023-01-15' },
    { id: 'U88292', name: '李四', phone: '139****5678', role: '初级合伙人', teamSize: 45, balance: 350.00, joinDate: '2023-03-22' },
    { id: 'U88293', name: '王五', phone: '137****9012', role: '普通用户', teamSize: 0, balance: 0.00, joinDate: '2023-06-10' },
    { id: 'U88294', name: '赵六', phone: '136****3456', role: '普通用户', teamSize: 0, balance: 0.00, joinDate: '2023-08-05' },
    { id: 'U88295', name: '孙七', phone: '135****7890', role: '中级合伙人', teamSize: 89, balance: 890.20, joinDate: '2023-02-18' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">用户管理</h1>
        <button 
          onClick={() => navigate('/admin/users/add')}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">person_add</span>
          添加用户
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
                placeholder="搜索用户名/手机号..." 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有身份</option>
              <option value="normal">普通用户</option>
              <option value="partner">合伙人</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">用户信息</th>
                <th className="p-4 font-medium">身份角色</th>
                <th className="p-4 font-medium">推荐人数</th>
                <th className="p-4 font-medium">账户余额</th>
                <th className="p-4 font-medium">注册时间</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} alt={user.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{user.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      user.role.includes('合伙人') ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{user.teamSize}</td>
                  <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">¥{user.balance.toFixed(2)}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{user.joinDate}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => navigate(`/admin/users/${user.id}`)}
                      className="text-primary text-sm font-medium hover:underline mr-3"
                    >
                      查看详情
                    </button>
                    <button 
                      onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                      className="text-slate-500 hover:text-primary text-sm font-medium hover:underline"
                    >
                      编辑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
          <span className="text-slate-500">共 12,450 条记录，当前 1/1245 页</span>
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
