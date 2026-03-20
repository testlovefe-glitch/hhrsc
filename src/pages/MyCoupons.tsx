import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type CouponStatus = '未使用' | '已使用' | '已过期';

interface Coupon {
  id: string;
  amount: number;
  threshold: string;
  title: string;
  scope: string;
  validUntil: string;
  status: CouponStatus;
}

const mockCoupons: Coupon[] = [
  { id: '1', amount: 50, threshold: '无门槛', title: '新人专享券', scope: '全场通用', validUntil: '2026-12-31 23:59', status: '未使用' },
  { id: '2', amount: 200, threshold: '满2000元可用', title: '平台通用券', scope: '全场通用', validUntil: '2026-12-31 23:59', status: '未使用' },
  { id: '3', amount: 300, threshold: '满1000元可用', title: '商品券', scope: '仅限酱香型白酒可用', validUntil: '2026-06-30 23:59', status: '未使用' },
  { id: '4', amount: 100, threshold: '满500元可用', title: '新人专享券', scope: '全场通用', validUntil: '2023-10-01 23:59', status: '已使用' },
  { id: '5', amount: 30, threshold: '满300元可用', title: '平台通用券', scope: '全场通用', validUntil: '2023-09-15 23:59', status: '已使用' },
  { id: '6', amount: 150, threshold: '满500元可用', title: '商品券', scope: '仅限进口红酒可用', validUntil: '2023-01-01 23:59', status: '已过期' },
];

export default function MyCoupons() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CouponStatus>('未使用');

  const tabs: CouponStatus[] = ['未使用', '已使用', '已过期'];

  const filteredCoupons = mockCoupons.filter(coupon => coupon.status === activeTab);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">我的优惠券</h1>
      </header>

      {/* Tabs */}
      <div className="flex bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[53px] z-40">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium relative ${
              activeTab === tab 
                ? 'text-primary' 
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <main className="flex-1 overflow-y-auto p-4 space-y-3">
        {filteredCoupons.length > 0 ? (
          filteredCoupons.map(coupon => {
            const isInactive = coupon.status !== '未使用';
            return (
              <div key={coupon.id} className={`flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border ${isInactive ? 'border-slate-200 dark:border-slate-800 opacity-70' : 'border-primary/20'}`}>
                {/* Left side: Amount & Threshold */}
                <div className={`w-28 flex flex-col items-center justify-center p-3 border-r border-dashed ${isInactive ? 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400' : 'bg-primary/5 border-primary/20 text-primary'}`}>
                  <div className="flex items-baseline font-bold">
                    <span className="text-sm">¥</span>
                    <span className="text-3xl tracking-tighter">{coupon.amount}</span>
                  </div>
                  <span className="text-[10px] mt-1 font-medium text-center leading-tight">{coupon.threshold}</span>
                </div>
                
                {/* Right side: Details */}
                <div className="flex-1 p-3 flex flex-col justify-between relative">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-medium shrink-0 ${isInactive ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-primary/10 text-primary'}`}>
                        {coupon.title}
                      </span>
                      <h3 className={`text-sm font-bold line-clamp-1 ${isInactive ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                        {coupon.scope}
                      </h3>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5">
                      有效期至: {coupon.validUntil}
                    </p>
                  </div>
                  
                  <div className="flex justify-end mt-2">
                    {coupon.status === '未使用' ? (
                      <button className="text-[11px] font-bold px-4 py-1.5 rounded-full transition-all bg-primary text-white active:scale-95 shadow-sm shadow-primary/20">
                        去使用
                      </button>
                    ) : (
                      <div className="absolute right-2 bottom-2 w-12 h-12 border-2 border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center rotate-[-15deg] opacity-60">
                        <span className="text-slate-300 dark:text-slate-600 font-bold text-xs">{coupon.status}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative cutouts */}
                  <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-slate-50 dark:bg-slate-950 rounded-full"></div>
                  <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 bg-slate-50 dark:bg-slate-950 rounded-full"></div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-20">confirmation_number</span>
            <p className="text-sm">暂无{activeTab}的优惠券</p>
          </div>
        )}
      </main>
    </div>
  );
}
