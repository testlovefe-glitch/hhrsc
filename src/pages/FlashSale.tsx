import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function FlashSale() {
  const navigate = useNavigate();
  
  // Simple countdown timer for Flash Sale
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              clearInterval(timer);
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const products = [
    { id: 1, name: '飞天茅台 53度 500ml', price: 2999, original: 3299, img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop', sold: 85 },
    { id: 2, name: '人参枸杞养生酒 500ml', price: 199, original: 399, img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop', sold: 42 },
    { id: 3, name: '五粮液 普五第八代 52度', price: 999, original: 1499, img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop', sold: 96 },
    { id: 4, name: '奔富 MAX 麦克斯 干红', price: 168, original: 299, img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop', sold: 23 },
    { id: 5, name: '洋河蓝色经典 海之蓝 52度', price: 188, original: 228, img: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=400&auto=format&fit=crop', sold: 65 },
    { id: 6, name: '拉菲传奇 波尔多AOC 干红', price: 128, original: 168, img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop', sold: 78 },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="shrink-0 sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">限时秒杀</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        {/* Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white mb-6 shadow-lg shadow-red-500/20 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-black italic tracking-wider mb-2">限时秒杀狂欢</h2>
          <p className="text-white/90 text-sm mb-4">精选好物，限时低价，手慢无！</p>
          <div className="flex items-center gap-2 text-lg font-mono bg-black/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
            <span>距结束</span>
            <span className="bg-white text-red-600 px-2 py-0.5 rounded font-bold">{formatTime(timeLeft.hours)}</span>
            <span className="font-bold">:</span>
            <span className="bg-white text-red-600 px-2 py-0.5 rounded font-bold">{formatTime(timeLeft.minutes)}</span>
            <span className="font-bold">:</span>
            <span className="bg-white text-red-600 px-2 py-0.5 rounded font-bold">{formatTime(timeLeft.seconds)}</span>
          </div>
        </div>

        {/* Product List */}
        <div className="space-y-4 pb-20">
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="flex bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 p-3 gap-4 relative">
              <div className="w-28 h-28 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">
                  秒杀
                </div>
              </div>
              
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 text-[10px] text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded w-fit border border-red-100 dark:border-red-900/30">
                    <span className="material-symbols-outlined text-[12px]">timer</span>
                    <span>限时 {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-red-500 font-bold text-lg">¥{product.price}</span>
                      <span className="text-xs text-slate-400 line-through">¥{product.original}</span>
                      <span className="text-[10px] text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded border border-red-100 dark:border-red-900/30 ml-1">直降¥{product.original - product.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                      <div className="h-1.5 bg-red-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                          style={{ width: `${product.sold}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">已抢 {product.sold}%</p>
                    </div>
                    <button className="shrink-0 bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-red-500/20 active:scale-95 transition-transform">
                      马上抢
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
