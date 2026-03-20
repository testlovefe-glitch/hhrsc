import { Link } from 'react-router-dom';

export default function Orders() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/profile" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">我的订单</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <div className="sticky top-[73px] z-40 bg-white dark:bg-slate-900 overflow-x-auto hide-scrollbar border-b border-slate-200 dark:border-slate-800">
        <div className="flex px-4 min-w-max">
          {['全部', '待付款', '待发货', '待收货', '已完成', '退款/售后'].map((tab, i) => (
            <button key={i} className={`flex flex-col items-center justify-center border-b-2 px-4 py-3 ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-500 dark:text-slate-400'}`}>
              <span className={`text-sm ${i === 0 ? 'font-bold' : 'font-medium'}`}>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        <Link to="/order/1" className="block rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-slate-400">订单号: 827391029</span>
            <span className="text-sm font-semibold text-orange-500">待付款</span>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold truncate">飞天茅台 53度</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">500ml, 酱香型白酒</p>
              <div className="flex items-end justify-between mt-auto">
                <p className="text-slate-900 dark:text-slate-100 text-base font-bold">¥2999.00</p>
                <p className="text-slate-400 text-xs">x1</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">取消订单</button>
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary shadow-sm shadow-primary/20">去支付</button>
          </div>
        </Link>

        <Link to="/order/2" className="block rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-slate-400">订单号: 827391035</span>
            <span className="text-sm font-semibold text-primary">待收货</span>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold truncate">人参枸杞养生酒</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">500ml, 礼盒装</p>
              <div className="flex items-end justify-between mt-auto">
                <p className="text-slate-900 dark:text-slate-100 text-base font-bold">¥399.00</p>
                <p className="text-slate-400 text-xs">x1</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              查看物流
            </button>
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary shadow-sm shadow-primary/20">确认收货</button>
          </div>
        </Link>

        <Link to="/order/3" className="block rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-100 dark:border-slate-800 opacity-90">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-slate-400">订单号: 827390981</span>
            <span className="text-sm font-semibold text-slate-500">已完成</span>
          </div>
          <div className="flex gap-4">
            <div className="h-20 w-20 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold truncate">奔富 MAX 麦克斯干红</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">750ml / 单瓶</p>
              <div className="flex items-end justify-between mt-auto">
                <p className="text-slate-900 dark:text-slate-100 text-base font-bold">¥450.00</p>
                <p className="text-slate-400 text-xs">x1</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">申请退款</button>
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">再次购买</button>
            <button className="px-4 py-1.5 rounded-lg text-xs font-semibold text-primary border border-primary/30 bg-primary/5">评价商品</button>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center py-8 text-slate-400">
          <span className="text-xs">没有更多订单了</span>
        </div>
      </main>
    </div>
  );
}
