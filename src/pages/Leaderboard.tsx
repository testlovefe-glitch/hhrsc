import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const leaderboardData = [
    { id: 1, rank: 1, name: '李四', sales: 32500, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80' },
    { id: 2, rank: 2, name: '王五', sales: 28300, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80' },
    { id: 3, rank: 3, name: '赵六', sales: 19800, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
    { id: 4, rank: 4, name: '孙七', sales: 15600, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
    { id: 5, rank: 5, name: '周八', sales: 12400, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80' },
    { id: 6, rank: 6, name: '吴九', sales: 9800, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { id: 7, rank: 7, name: '郑十', sales: 8500, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80' },
    { id: 8, rank: 8, name: '钱十一', sales: 7200, avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&q=80' },
    { id: 9, rank: 9, name: '陈十二', sales: 6500, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80' },
    { id: 10, rank: 10, name: '林十三', sales: 5400, avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80' },
  ];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-500';
      case 2: return 'text-slate-400';
      case 3: return 'text-amber-700';
      default: return 'text-slate-500 dark:text-slate-400';
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      return (
        <div className={`font-black text-2xl italic w-8 text-center ${getRankColor(rank)}`}>
          {rank}
        </div>
      );
    }
    return (
      <div className={`font-bold text-lg w-8 text-center ${getRankColor(rank)}`}>
        {rank}
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/partner" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">本月销售龙虎榜</h1>
        <div className="flex w-10 items-center justify-end"></div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">排名</span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">销售额</span>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {leaderboardData.map((user) => (
              <Link 
                to={`/member/${user.id}`} 
                key={user.id} 
                className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                {getRankBadge(user.rank)}
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover border border-slate-100 dark:border-slate-700" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{user.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold text-primary">¥{user.sales.toLocaleString()}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-sm ml-1">chevron_right</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
