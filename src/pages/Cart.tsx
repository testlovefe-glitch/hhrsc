import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">购物车 (3)</h1>
        <div className="flex w-10 items-center justify-end"></div>
      </header>

      {/* Cart Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Store Section 1 */}
        <section className="mt-2 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800">
            <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            <span className="material-symbols-outlined text-slate-500">store</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">茅台官方旗舰店</h2>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>

          {/* Product Item 1 */}
          <div className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="flex items-center">
              <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="Feitian Maotai" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2">飞天茅台 53度 500ml 酱香型白酒</p>
                <div className="mt-1 inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">规格: 500ml单瓶装</span>
                  <span className="material-symbols-outlined text-xs ml-1">expand_more</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥2,999.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Item 2 */}
          <div className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0">
            <div className="flex items-center">
              <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="Health Wine" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div>
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2">人参枸杞养生酒 500ml 礼盒装</p>
                <div className="mt-1 inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">规格: 礼盒装</span>
                  <span className="material-symbols-outlined text-xs ml-1">expand_more</span>
                </div>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥399.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Section 2 */}
        <section className="mt-2 bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800">
            <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            <span className="material-symbols-outlined text-slate-500">store</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">全球名酒速递</h2>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </div>

          <div className="flex gap-3 px-4 py-4">
            <div className="flex items-center">
              <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100" data-alt="Penfolds Red Wine" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop")' }}></div>
            <div className="flex flex-1 flex-col justify-between min-w-0">
              <div className="flex justify-between items-start gap-2">
                <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2 flex-1">奔富 MAX 麦克斯 干红葡萄酒 750ml</p>
                <button className="text-slate-400 hover:text-red-500 shrink-0">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
              <div className="mt-1 inline-flex items-center self-start rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                <span className="text-slate-500 dark:text-slate-400 text-xs">规格: 750ml单瓶</span>
              </div>
              <div className="flex items-end justify-between mt-2">
                <p className="text-primary text-lg font-bold">¥450.00</p>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">-</button>
                  <input className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" type="number" defaultValue="1" />
                  <button className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">+</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations / Empty Space */}
        <div className="p-8 text-center text-slate-400">
          <p className="text-xs">已经到底了</p>
        </div>
      </main>

      {/* Checkout Bottom Bar */}
      <div className="shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
          <input className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" type="checkbox" />
          <span className="text-slate-600 dark:text-slate-400 text-sm">全选</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-slate-500">合计:</p>
            <p className="text-primary text-lg font-bold leading-none">¥3,398.00</p>
          </div>
          <Link to="/checkout" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/30 transition-all active:scale-95 text-center">
            去结算
          </Link>
        </div>
      </div>
    </div>
  );
}
