import { Link } from 'react-router-dom';

export default function OrderDetails() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 h-14">
        <Link to="/orders" className="text-slate-900 dark:text-slate-100 flex items-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight mr-6">订单详情</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-32">
        <div className="bg-primary px-6 py-8 flex items-center justify-between text-white">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-bold">待收货</p>
            <p className="text-white/80 text-sm">您的包裹正在路上，请注意查收</p>
          </div>
          <span className="material-symbols-outlined text-6xl opacity-80">local_shipping</span>
        </div>

        <div className="mx-4 -mt-4 bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm flex items-start gap-3 border border-slate-100 dark:border-slate-800 relative z-10">
          <div className="bg-primary/10 text-primary rounded-full p-2 mt-1">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base">张三</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">13800138000</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              广东省广州市天河区某某街道某某大厦101室
            </p>
          </div>
        </div>

        <div className="mt-4 px-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold mb-3 px-1">商品信息</h3>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 flex gap-4 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-24 h-24 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop" alt="Product" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <p className="text-slate-900 dark:text-slate-100 font-medium line-clamp-2 text-sm">飞天茅台 53度 500ml 酱香型白酒</p>
                  <p className="text-slate-400 text-xs mt-1">规格: 500ml单瓶装</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-slate-900 dark:text-slate-100 font-bold">¥2,999.00</p>
                  <p className="text-slate-400 text-sm">x1</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl p-3 flex gap-4 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-24 h-24 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop" alt="Health Wine" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <p className="text-slate-900 dark:text-slate-100 font-medium line-clamp-2 text-sm">人参枸杞养生酒 500ml 礼盒装</p>
                  <p className="text-slate-400 text-xs mt-1">规格: 礼盒装</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-slate-900 dark:text-slate-100 font-bold">¥399.00</p>
                  <p className="text-slate-400 text-sm">x1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold mb-4">订单信息</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">订单号</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 dark:text-slate-100">2023102488889999</span>
                  <span className="material-symbols-outlined text-primary text-base">content_copy</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">下单时间</span>
                <span className="text-slate-900 dark:text-slate-100">2023-10-24 14:30:45</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">支付时间</span>
                <span className="text-slate-900 dark:text-slate-100">2023-10-24 14:31:12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">支付方式</span>
                <span className="text-slate-900 dark:text-slate-100">微信支付</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 px-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="space-y-3 pb-3 border-b border-slate-50 dark:border-slate-800">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">商品总额</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">¥3,398.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">运费</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">¥0.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">优惠金额</span>
                <span className="text-red-500 font-medium">-¥200.00</span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-slate-900 dark:text-slate-100 font-bold">实付款</span>
              <span className="text-primary text-xl font-bold">¥3,198.00</span>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 py-3 flex justify-end gap-3 z-40 pb-safe">
        <button className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium">
          申请退款
        </button>
        <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg shadow-primary/20">
          确认收货
        </button>
      </div>
    </div>
  );
}
