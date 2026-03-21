import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function GroupBuy() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'hot' | 'mine'>('hot');

  const hotProducts = [
    {
      id: 1,
      title: '飞天茅台 53度 500ml 酱香型白酒 优质纯粮酿造',
      originalPrice: 3299,
      groupPrice: 2999,
      targetSize: 3,
      currentParticipants: 2,
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 2,
      title: '五粮液 普五第八代 52度 浓香型白酒 经典传承',
      originalPrice: 1499,
      groupPrice: 1099,
      targetSize: 3,
      currentParticipants: 1,
      img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 3,
      title: '国窖1573 52度 浓香型白酒 500ml',
      originalPrice: 1299,
      groupPrice: 999,
      targetSize: 3,
      currentParticipants: 0,
      img: 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?q=80&w=400&auto=format&fit=crop'
    },
    {
      id: 4,
      title: '奔富 MAX 麦克斯 干红葡萄酒 澳洲原瓶进口',
      originalPrice: 299,
      groupPrice: 168,
      targetSize: 3,
      currentParticipants: 2,
      img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const myGroups = [
    {
      id: 1,
      title: '飞天茅台 53度 500ml 酱香型白酒',
      originalPrice: 3299,
      groupPrice: 2999,
      targetSize: 3,
      currentParticipants: 2,
      status: '拼团中',
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">组团免单</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-safe">
        {/* Rules Banner */}
        <div className="px-4 pt-4 pb-2">
          <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-4 text-white shadow-lg shadow-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
            
            <h2 className="text-lg font-black mb-2 flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined">groups</span>
              参团返利规则
            </h2>
            
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/20 relative z-10">
              <p className="text-sm font-medium leading-relaxed">
                推荐第1人参与返 <span className="text-yellow-300 font-bold text-base">20%</span><br/>
                推荐第2人返 <span className="text-yellow-300 font-bold text-base">20%</span><br/>
                推荐第3人返 <span className="text-yellow-300 font-bold text-base">60%</span> 且 <span className="bg-yellow-300 text-red-600 px-1 rounded font-bold">订单免单</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-4 mt-2 mb-3 border-b border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('hot')}
            className={`flex-1 py-3 text-sm font-bold relative transition-colors ${
              activeTab === 'hot' ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            热门团购
            {activeTab === 'hot' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-500 rounded-t-full"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('mine')}
            className={`flex-1 py-3 text-sm font-bold relative transition-colors ${
              activeTab === 'mine' ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            我的团购
            {activeTab === 'mine' && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-500 rounded-t-full"></div>
            )}
          </button>
        </div>

        {/* Product Grid */}
        {activeTab === 'hot' ? (
          <div className="grid grid-cols-2 gap-3 px-4 pb-6">
            {hotProducts.map(p => (
              <div key={p.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col">
                <Link to={`/product/${p.id}`} className="relative aspect-square bg-slate-100 dark:bg-slate-800 block">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg z-10">
                    {p.targetSize}人团免单
                  </div>
                  {/* Progress bar overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm px-2 py-1.5 flex items-center gap-1.5">
                    <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-red-500 rounded-full" 
                        style={{ width: `${(p.currentParticipants / p.targetSize) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[9px] text-white font-medium whitespace-nowrap">
                      已参团 {p.currentParticipants}/{p.targetSize}
                    </span>
                  </div>
                </Link>
                
                <div className="p-2.5 flex flex-col flex-1">
                  <Link to={`/product/${p.id}`}>
                    <h3 className="text-[13px] font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 mb-2">
                      {p.title}
                    </h3>
                  </Link>
                  
                  <div className="mt-auto">
                    <div className="flex items-center flex-wrap gap-1 mb-2">
                      <span className="text-red-500 font-bold text-sm">¥{p.groupPrice}</span>
                      <span className="text-slate-400 text-[10px] line-through">¥{p.originalPrice}</span>
                      <span className="text-red-500 text-[10px] bg-red-50 dark:bg-red-900/20 px-1 rounded">立省¥{p.originalPrice - p.groupPrice}</span>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/checkout');
                      }}
                      className="w-full bg-gradient-to-r from-red-600 to-rose-500 text-white text-xs font-bold py-2 rounded-full shadow-sm shadow-red-500/20 active:scale-95 transition-transform"
                    >
                      {p.currentParticipants > 0 ? '去参团' : '发起团购'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 pb-6 space-y-3">
            {myGroups.length > 0 ? myGroups.map(g => (
              <div key={g.id} className="bg-white dark:bg-slate-900 rounded-xl p-3 flex gap-3 shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-20 h-20 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-2 pr-2">
                      {g.title}
                    </h3>
                    <span className="text-red-500 text-[10px] font-bold shrink-0 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">
                      {g.status}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mb-2">
                    进度: {g.currentParticipants}/{g.targetSize}人
                  </div>
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-red-500 font-bold text-sm">¥{g.groupPrice}</span>
                        <span className="text-slate-400 text-[10px] line-through">¥{g.originalPrice}</span>
                      </div>
                      <span className="text-red-500 text-[10px] bg-red-50 dark:bg-red-900/20 px-1 rounded w-fit mt-0.5">立省¥{g.originalPrice - g.groupPrice}</span>
                    </div>
                    <button onClick={() => navigate('/share-group-buy')} className="bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm shadow-red-500/20 active:scale-95 transition-transform">
                      邀请好友
                    </button>
                  </div>
                </div>
              </div>
            )) : (
              <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                <span className="material-symbols-outlined text-4xl mb-2 opacity-50">group_off</span>
                <p className="text-sm">暂无参与的团购</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
