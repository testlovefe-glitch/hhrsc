import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 justify-between gap-4">
          <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <div className="flex-1">
            <label className="flex flex-col w-full h-10">
              <div className="flex w-full flex-1 items-stretch rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="text-slate-500 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-sm placeholder:text-slate-400 outline-none" placeholder="搜索心仪酒款" type="text" />
              </div>
            </label>
          </div>
          <Link to="/cart" className="flex items-center justify-center">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">shopping_cart</span>
          </Link>
        </div>
        <div className="flex gap-2 px-4 pb-3 overflow-x-auto hide-scrollbar">
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-primary/10 text-primary px-3 text-sm font-semibold">
            综合排序
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            分类
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            销量
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center gap-x-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 text-sm font-medium">
            价格
            <span className="material-symbols-outlined text-[18px]">swap_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-24">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">全部商品 (248)</h3>
          <span className="material-symbols-outlined text-slate-400">grid_view</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <Link to="/product/1" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop')" }}></div>
              <div className="absolute top-1 left-1 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">热销</div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">飞天茅台 53度 500ml 酱香型白酒</h4>
                <p className="text-slate-500 text-xs mt-1">酱香突出 | 幽雅细腻</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">2,999</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 2000+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/2" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">人参枸杞养生酒 500ml 礼盒装</h4>
                <p className="text-slate-500 text-xs mt-1">草本精华 | 固本培元</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">299</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 5800+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/3" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop')" }}></div>
              <div className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase">限时抢购</div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">五粮液 普五第八代 52度 500ml</h4>
                <p className="text-slate-500 text-xs mt-1">浓香经典 | 宴请佳品</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">1,099</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 1200+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/4" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=400&auto=format&fit=crop')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">宁夏红 枸杞养生酒 750ml 礼盒装</h4>
                <p className="text-slate-500 text-xs mt-1">中宁枸杞 | 醇厚甘甜</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">358</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 1.5w+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/product/5" className="flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 gap-3">
            <div className="w-32 h-32 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop')" }}></div>
            </div>
            <div className="flex flex-col justify-between flex-1 py-1">
              <div>
                <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base leading-snug line-clamp-2">奔富 MAX 麦克斯 干红葡萄酒 750ml</h4>
                <p className="text-slate-500 text-xs mt-1">澳洲原瓶进口 | 果香浓郁</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-primary text-xs font-bold">¥</span>
                    <span className="text-primary text-xl font-bold">288</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">月销 450+</p>
                </div>
                <Link to="/cart" className="bg-primary text-white size-8 flex items-center justify-center rounded-full shadow-lg shadow-primary/30" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                </Link>
              </div>
            </div>
          </Link>
        </div>

        <div className="py-8 text-center">
          <p className="text-slate-400 text-sm">到底啦，看看别的吧 ~</p>
        </div>
      </main>
    </div>
  );
}
