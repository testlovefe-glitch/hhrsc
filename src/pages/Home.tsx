import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
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

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between gap-3">
          <div className="flex-1" onClick={() => navigate('/category')}>
            <div className="flex items-center h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-full pl-4 pr-1 gap-2 cursor-text">
              <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
              <div className="text-sm w-full text-slate-500">搜索美酒佳酿...</div>
              <button className="bg-primary text-white text-xs font-bold h-8 px-5 rounded-full whitespace-nowrap">搜索</button>
            </div>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="px-4 py-4 bg-white dark:bg-slate-950">
        <Link to="/products" className="block relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-sm group">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=1000&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-6">
            <span className="text-primary font-bold text-xs tracking-wider uppercase mb-1">名酒品鉴季</span>
            <h2 className="text-white text-xl font-bold leading-tight">高端白酒低至 8 折</h2>
            <button className="mt-3 w-fit bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg">立即选购</button>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            <span className="size-1.5 rounded-full bg-white"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
            <span className="size-1.5 rounded-full bg-white/40"></span>
          </div>
        </Link>
      </div>

      {/* 1st Layer Buttons */}
      <div className="grid gap-4 px-4 py-4 grid-cols-4 bg-white dark:bg-slate-950">
        <Link to="/coupons" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
            <span className="material-symbols-outlined text-2xl">local_activity</span>
          </div>
          <span className="text-xs font-semibold">新人优享</span>
        </Link>
        <Link to="/group-buy" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
            <span className="material-symbols-outlined text-2xl">groups</span>
          </div>
          <span className="text-xs font-semibold">组团免单</span>
        </Link>
        <Link to="/partner-package" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-500">
            <span className="material-symbols-outlined text-2xl">redeem</span>
          </div>
          <span className="text-xs font-semibold">合伙礼包</span>
        </Link>
        <Link to="/sales" className="flex flex-col items-center gap-2">
          <div className="size-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
          <span className="text-xs font-semibold">收益明细</span>
        </Link>
      </div>

      {/* 2nd Layer Buttons */}
      <div className="grid grid-cols-4 gap-2 px-4 py-2 bg-white dark:bg-slate-950 mb-2">
        <Link to="/category-list/health" className="flex flex-col items-center gap-1.5">
          <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-xl">spa</span>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400">养生套餐</span>
        </Link>
        <Link to="/category-list/gifts" className="flex flex-col items-center gap-1.5">
          <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-xl">card_giftcard</span>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400">远方厚礼</span>
        </Link>
        <Link to="/category-list/help" className="flex flex-col items-center gap-1.5">
          <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-xl">volunteer_activism</span>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400">消费帮扶</span>
        </Link>
        <Link to="/category-list/points" className="flex flex-col items-center gap-1.5">
          <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-xl">stars</span>
          </div>
          <span className="text-[11px] text-slate-600 dark:text-slate-400">积分商城</span>
        </Link>
      </div>

      {/* 1. 限时秒杀 Flash Sale */}
      <section className="bg-white dark:bg-slate-950 px-4 py-4 mb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold">限时秒杀</h3>
            <div className="flex items-center gap-1 text-xs font-mono">
              <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-1.5 py-0.5 rounded">{formatTime(timeLeft.hours)}</span>
              <span className="font-bold">:</span>
              <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-1.5 py-0.5 rounded">{formatTime(timeLeft.minutes)}</span>
              <span className="font-bold">:</span>
              <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-1.5 py-0.5 rounded">{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
          <Link to="/flash-sale" className="text-slate-500 text-xs flex items-center">
            更多 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar">
          {[
            { id: 1, name: '飞天茅台 53度 500ml', price: 2999, original: 3299, img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=200&auto=format&fit=crop' },
            { id: 2, name: '人参枸杞养生酒 500ml', price: 199, original: 399, img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=200&auto=format&fit=crop' },
            { id: 3, name: '五粮液 普五第八代 52度', price: 999, original: 1499, img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=200&auto=format&fit=crop' },
            { id: 4, name: '奔富 MAX 麦克斯 干红', price: 168, original: 299, img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=200&auto=format&fit=crop' },
          ].map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="w-[120px] shrink-0 flex flex-col items-center text-center">
              <div className="w-[120px] h-[120px] bg-slate-50 dark:bg-slate-800/50 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                <img src={product.img} alt={product.name} className="w-[80px] h-[80px] object-cover rounded-md shadow-sm" />
              </div>
              <h4 className="text-xs font-medium line-clamp-1 mb-1 w-full">{product.name}</h4>
              <div className="flex flex-col items-center w-full gap-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="text-primary font-bold text-sm">¥{product.price}</span>
                  <span className="text-[10px] text-slate-400 line-through">¥{product.original}</span>
                  <span className="text-[9px] text-primary bg-primary/10 px-1 py-0.5 rounded-sm border border-primary/20">直降¥{product.original - product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. 今日主推专区 Today's Top Picks */}
      <section className="px-4 py-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">今日主推专区</h3>
          <Link to="/category-list/featured" className="text-slate-500 text-xs flex items-center">
            更多 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { id: 7, name: '洋河蓝色经典 海之蓝 52度', price: 188, original: 228, tags: ['满减', '包邮'], img: 'https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=400&auto=format&fit=crop' },
            { id: 8, name: '拉菲传奇 波尔多AOC 干红', price: 128, original: 168, tags: ['热销', '包邮'], img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop' },
            { id: 9, name: '汾酒 青花20 清香型 53度', price: 498, original: 568, tags: ['新品', '满赠'], img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop' },
            { id: 10, name: '马爹利 名士 干邑白兰地', price: 658, original: 798, tags: ['包邮'], img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop' },
          ].map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 relative">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-medium line-clamp-2 mb-2">{product.name}</h4>
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] border border-primary text-primary px-1 rounded-sm">{tag}</span>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-primary font-bold text-sm">¥{product.price}</span>
                      <span className="text-[10px] text-slate-400 line-through">¥{product.original}</span>
                    </div>
                    <span className="text-[9px] text-primary bg-primary/10 px-1 rounded-sm border border-primary/20 w-fit">直降¥{product.original - product.price}</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400 text-sm mb-1">add_shopping_cart</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
