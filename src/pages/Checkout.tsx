import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<any>(null);

  const coupons = [
    { id: 1, name: '新人专享券', discount: 50, condition: '满500可用' },
    { id: 2, name: '名酒品鉴满减券', discount: 200, condition: '满2000可用' },
    { id: 3, name: '无门槛立减券', discount: 20, condition: '无门槛' },
  ];

  const subtotal = 3398;
  const discount = selectedCoupon ? selectedCoupon.discount : 0;
  const total = subtotal - discount;

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased relative">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <Link to="/cart" className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">确认订单</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Address Selector Section */}
        <section className="mt-2 mx-0 bg-white dark:bg-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="flex items-center gap-4 px-4 py-6 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 p-3 shrink-0">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <div className="flex flex-1 flex-col justify-center overflow-hidden">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-slate-900 dark:text-slate-100 text-[17px] font-bold">张三 (John Doe)</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">+1 234 567 890</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-snug line-clamp-2">
                美国伊利诺伊州斯普林菲尔德市阳光大道123号405室，邮编 62704
              </p>
            </div>
            <div className="shrink-0 ml-1">
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
            </div>
          </div>
          {/* Decorative mail border */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[repeating-linear-gradient(45deg,#136dec,#136dec_12px,#fff_12px,#fff_24px,#ef4444_24px,#ef4444_36px,#fff_36px,#fff_48px)] dark:opacity-80"></div>
        </section>

        {/* Order Products List */}
        <section className="mt-3 bg-white dark:bg-slate-900 shadow-sm">
          <div className="px-4 py-3.5 border-b border-slate-100 dark:border-slate-800/60">
            <h3 className="text-slate-900 dark:text-slate-100 text-[15px] font-bold">订单商品</h3>
          </div>
          <div className="flex flex-col">
            {/* Item 1 */}
            <div className="flex gap-4 px-4 py-4 border-b border-slate-50 dark:border-slate-800/40 last:border-0">
              <div className="bg-slate-50 dark:bg-slate-800 aspect-square rounded-xl w-22 h-22 bg-cover bg-center overflow-hidden border border-slate-100 dark:border-slate-800 flex-shrink-0" data-alt="Feitian Maotai" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop")' }}>
              </div>
              <div className="flex flex-1 flex-col py-0.5">
                <div className="mb-1">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-tight line-clamp-1">飞天茅台 53度</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium bg-slate-100 dark:bg-slate-800 self-start inline-block px-2 py-0.5 rounded">规格: 500ml</p>
                </div>
                <div className="mt-auto flex justify-between items-baseline">
                  <p className="text-primary text-[17px] font-bold">¥2,999.00</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">x1</p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4 px-4 py-4 border-b border-slate-50 dark:border-slate-800/40 last:border-0">
              <div className="bg-slate-50 dark:bg-slate-800 aspect-square rounded-xl w-22 h-22 bg-cover bg-center overflow-hidden border border-slate-100 dark:border-slate-800 flex-shrink-0" data-alt="Health Wine" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop")' }}>
              </div>
              <div className="flex flex-1 flex-col py-0.5">
                <div className="mb-1">
                  <p className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-tight line-clamp-1">人参枸杞养生酒</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 font-medium bg-slate-100 dark:bg-slate-800 self-start inline-block px-2 py-0.5 rounded">规格: 礼盒装</p>
                </div>
                <div className="mt-auto flex justify-between items-baseline">
                  <p className="text-primary text-[17px] font-bold">¥399.00</p>
                  <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">x1</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options & Coupons */}
        <section className="mt-3 bg-white dark:bg-slate-900 shadow-sm divide-y divide-slate-50 dark:divide-slate-800/40">
          <div className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
            <span className="text-slate-700 dark:text-slate-300 text-[15px]">配送方式</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-900 dark:text-slate-100 text-sm font-medium">标准快递</span>
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">chevron_right</span>
            </div>
          </div>
          <div 
            className="flex justify-between items-center px-4 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
            onClick={() => setIsCouponModalOpen(true)}
          >
            <span className="text-slate-700 dark:text-slate-300 text-[15px]">优惠券</span>
            <div className="flex items-center gap-1.5">
              {selectedCoupon ? (
                <span className="text-primary text-sm font-medium">-¥{selectedCoupon.discount.toFixed(2)}</span>
              ) : (
                <span className="text-slate-400 dark:text-slate-500 text-sm">选择优惠券</span>
              )}
              <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-[20px]">chevron_right</span>
            </div>
          </div>
        </section>

        {/* Order Summary */}
        <section className="mt-3 bg-white dark:bg-slate-900 px-4 py-5 shadow-sm space-y-3.5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">商品总计</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium tracking-tight">¥{subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">运费</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium tracking-tight">¥0.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400 dark:text-slate-500">优惠减免</span>
            <span className="text-emerald-500 font-medium tracking-tight">-¥{discount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex justify-between items-center">
            <span className="text-slate-900 dark:text-slate-100 font-bold">实付款</span>
            <span className="text-primary text-xl font-bold tracking-tight">¥{total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </section>
      </main>

      {/* Bottom Submission Bar */}
      <footer className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex items-center justify-between z-50 shadow-[0_-4px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col">
          <span className="text-slate-400 dark:text-slate-500 text-[11px] font-medium uppercase tracking-wider mb-0.5">实付总额</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-primary text-[24px] font-black tracking-tight">¥{total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
        <Link to="/payment" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-12 rounded-full transition-all active:scale-[0.97] shadow-lg shadow-primary/25 text-base">
          提交订单
        </Link>
      </footer>

      {/* Coupon Modal */}
      {isCouponModalOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsCouponModalOpen(false)}
          ></div>
          <div className="relative bg-slate-50 dark:bg-slate-900 rounded-t-2xl w-full max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-full duration-300">
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-t-2xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">选择优惠券</h3>
              <button onClick={() => setIsCouponModalOpen(false)} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-safe">
              {/* Do not use coupon option */}
              <div 
                className={`flex items-center justify-between p-4 rounded-xl border bg-white dark:bg-slate-950 cursor-pointer transition-colors ${!selectedCoupon ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-800'}`}
                onClick={() => {
                  setSelectedCoupon(null);
                  setIsCouponModalOpen(false);
                }}
              >
                <span className="text-slate-900 dark:text-white font-medium">不使用优惠券</span>
                {!selectedCoupon && <span className="material-symbols-outlined text-primary">check_circle</span>}
              </div>

              {/* Coupon list */}
              {coupons.map(coupon => (
                <div 
                  key={coupon.id}
                  className={`flex items-center p-4 rounded-xl border bg-white dark:bg-slate-950 cursor-pointer transition-colors ${selectedCoupon?.id === coupon.id ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-slate-200 dark:border-slate-800'}`}
                  onClick={() => {
                    setSelectedCoupon(coupon);
                    setIsCouponModalOpen(false);
                  }}
                >
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-20 text-primary border-r border-slate-100 dark:border-slate-800 pr-4">
                      <span className="text-2xl font-bold"><span className="text-sm">¥</span>{coupon.discount}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 dark:text-white font-bold">{coupon.name}</span>
                      <span className="text-slate-500 text-xs mt-1">{coupon.condition}</span>
                    </div>
                  </div>
                  {selectedCoupon?.id === coupon.id && (
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
