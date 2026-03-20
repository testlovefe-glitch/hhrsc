import { Link } from 'react-router-dom';

export default function NewPartnersToday() {
  const newPartners = [
    { id: 1, name: '张三', phone: '138****1234', time: '10:23', status: '已激活', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80' },
    { id: 2, name: '李四', phone: '139****5678', time: '09:45', status: '待激活', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80' },
    { id: 3, name: '王五', phone: '137****9012', time: '08:30', status: '已激活', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
    { id: 4, name: '赵六', phone: '136****3456', time: '08:15', status: '已激活', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
    { id: 5, name: '孙七', phone: '158****7890', time: '07:50', status: '待激活', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
    { id: 6, name: '周八', phone: '159****1234', time: '07:20', status: '已激活', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { id: 7, name: '吴九', phone: '186****5678', time: '06:40', status: '已激活', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id: 8, name: '郑十', phone: '188****9012', time: '06:10', status: '已激活', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&q=80' },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/partner" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">今日新增合伙人</h1>
        <div className="flex w-10 items-center justify-end"></div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">共新增 8 人</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">待激活 2 人</span>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {newPartners.map((partner) => (
              <Link to={`/member/${partner.id}`} key={partner.id} className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <img src={partner.avatar} alt={partner.name} className="w-12 h-12 rounded-full object-cover border border-slate-100 dark:border-slate-700" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{partner.name}</h3>
                    <span className="text-xs text-slate-400">{partner.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{partner.phone}</p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      partner.status === '已激活' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {partner.status}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
