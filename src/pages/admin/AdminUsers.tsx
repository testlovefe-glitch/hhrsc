import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../components/Empty';

export default function AdminUsers() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 'U88291', avatar: 'https://ui-avatars.com/api/?name=张三&background=random', name: '张三', phone: '138****1234', isPartner: true, partnerLevel: '高级合伙人', referrer: '系统', teamSize: 128, joinDate: '2023-01-15 10:30:00', status: '正常' },
    { id: 'U88292', avatar: 'https://ui-avatars.com/api/?name=李四&background=random', name: '李四', phone: '139****5678', isPartner: true, partnerLevel: '初级合伙人', referrer: '张三', teamSize: 45, joinDate: '2023-03-22 14:20:00', status: '正常' },
    { id: 'U88293', avatar: 'https://ui-avatars.com/api/?name=王五&background=random', name: '王五', phone: '137****9012', isPartner: false, partnerLevel: '无', referrer: '李四', teamSize: 0, joinDate: '2023-06-10 09:15:00', status: '冻结' },
    { id: 'U88294', avatar: 'https://ui-avatars.com/api/?name=赵六&background=random', name: '赵六', phone: '136****3456', isPartner: false, partnerLevel: '无', referrer: '系统', teamSize: 0, joinDate: '2023-08-05 16:45:00', status: '正常' },
    { id: 'U88295', avatar: 'https://ui-avatars.com/api/?name=孙七&background=random', name: '孙七', phone: '135****7890', isPartner: true, partnerLevel: '中级合伙人', referrer: '张三', teamSize: 89, joinDate: '2023-02-18 11:10:00', status: '正常' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.includes(searchQuery) || user.phone.includes(searchQuery) || user.id.includes(searchQuery);
    const matchesLevel = filterLevel ? user.partnerLevel === filterLevel : true;
    const matchesStatus = filterStatus ? user.status === filterStatus : true;
    
    // Simple date filtering (assuming joinDate is YYYY-MM-DD HH:mm:ss)
    const userDate = user.joinDate.split(' ')[0];
    const matchesStartDate = startDate ? userDate >= startDate : true;
    const matchesEndDate = endDate ? userDate <= endDate : true;

    return matchesSearch && matchesLevel && matchesStatus && matchesStartDate && matchesEndDate;
  });

  const toggleStatus = (id: string) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newStatus = user.status === '正常' ? '冻结' : '正常';
        showToast(`用户状态已更新为: ${newStatus}`);
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
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
        {/* Toolbar & Filters */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/20">
          <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索昵称/手机号..." 
                className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:border-primary dark:focus:border-primary transition-colors w-64"
              />
            </div>
            
            <select 
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary transition-colors"
            >
              <option value="">所有等级</option>
              <option value="无">非合伙人</option>
              <option value="初级合伙人">初级合伙人</option>
              <option value="中级合伙人">中级合伙人</option>
              <option value="高级合伙人">高级合伙人</option>
            </select>

            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary transition-colors"
            >
              <option value="">所有状态</option>
              <option value="正常">正常</option>
              <option value="冻结">冻结</option>
            </select>

            <div className="flex items-center gap-2">
              <input 
                type="date" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary transition-colors"
              />
              <span className="text-slate-400">-</span>
              <input 
                type="date" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:border-primary transition-colors"
              />
            </div>
            
            <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              筛选
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium">用户信息 (ID/昵称/手机号)</th>
                <th className="p-4 font-medium">合伙人信息</th>
                <th className="p-4 font-medium">推荐人</th>
                <th className="p-4 font-medium">团队人数</th>
                <th className="p-4 font-medium">注册时间</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{user.name}</p>
                            <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{user.id}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{user.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1 items-start">
                        {user.isPartner ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400">
                            {user.partnerLevel}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                            非合伙人
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      {user.referrer}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      {user.teamSize} 人
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                      {user.joinDate}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        user.status === '正常' 
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' 
                          : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button 
                          onClick={() => navigate(`/admin/users/${user.id}`)}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          查看详情
                        </button>
                        <button 
                          onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                          className="text-primary text-sm font-medium hover:underline"
                        >
                          编辑
                        </button>
                        <button 
                          onClick={() => toggleStatus(user.id)}
                          className={`text-sm font-medium hover:underline ${user.status === '正常' ? 'text-red-500 hover:text-red-600' : 'text-emerald-500 hover:text-emerald-600'}`}
                        >
                          {user.status === '正常' ? '冻结' : '解冻'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-0">
                    <Empty 
                      icon="search_off"
                      title="未找到用户"
                      description="没有找到符合条件的用户，请尝试更改搜索条件"
                      actionText="清除筛选"
                      onAction={() => {
                        setSearchQuery('');
                        setFilterLevel('');
                        setFilterStatus('');
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
