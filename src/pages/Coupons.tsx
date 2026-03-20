import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Coupons() {
  const navigate = useNavigate();
  // 模拟已领取的优惠券ID，例如ID为1的优惠券已领取
  const [claimedIds, setClaimedIds] = useState<number[]>([1]);

  const handleClaim = (id: number) => {
    if (!claimedIds.includes(id)) {
      setClaimedIds([...claimedIds, id]);
    }
  };

  const couponGroups = [
    {
      type: 'new_user',
      title: '新人专享券',
      subtitle: '仅限新注册用户领取，每人限领1次',
      coupons: [
        { id: 1, amount: 50, threshold: '无门槛', validUntil: '领取后7天有效', scope: '全场通用' },
        { id: 2, amount: 100, threshold: '满500元可用', validUntil: '领取后7天有效', scope: '全场通用' },
      ]
    },
    {
      type: 'general',
      title: '平台通用券',
      subtitle: '全场商品适用，可与部分活动叠加',
      coupons: [
        { id: 3, amount: 200, threshold: '满2000元可用', validUntil: '2026-12-31 23:59', scope: '全场通用' },
        { id: 4, amount: 30, threshold: '满300元可用', validUntil: '2026-12-31 23:59', scope: '全场通用' },
      ]
    },
    {
      type: 'product',
      title: '商品券',
      subtitle: '指定商品或品类可用',
      coupons: [
        { id: 5, amount: 300, threshold: '满1000元可用', validUntil: '2026-06-30 23:59', scope: '仅限酱香型白酒可用' },
        { id: 6, amount: 150, threshold: '满500元可用', validUntil: '2026-06-30 23:59', scope: '仅限进口红酒可用' },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">新人优享</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-safe">
        {/* Top Banner */}
        <div className="px-4 pt-4 pb-2">
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-rose-500 p-6 shadow-lg shadow-red-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm backdrop-blur-sm">官方补贴</span>
              </div>
              <h1 className="text-3xl font-black text-white mb-1 tracking-tight drop-shadow-sm">
                新人专享福利
              </h1>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="text-red-100 text-sm">最高可领</span>
                <span className="text-white font-bold text-3xl tracking-tighter">¥300</span>
                <span className="text-red-100 text-sm">大额神券</span>
              </div>
            </div>
            <span className="absolute -bottom-4 -right-2 text-8xl opacity-20 rotate-12">
              🧧
            </span>
          </div>
        </div>

        {/* Coupon Groups */}
        <div className="px-4 py-4 space-y-6">
          {couponGroups.map((group, groupIdx) => (
            <section key={groupIdx}>
              <div className="mb-3">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1 h-4 bg-primary rounded-full"></span>
                  {group.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-3">{group.subtitle}</p>
              </div>
              
              <div className="space-y-3">
                {group.coupons.map(coupon => {
                  const isClaimed = claimedIds.includes(coupon.id);
                  return (
                    <div key={coupon.id} className={`flex bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border ${isClaimed ? 'border-slate-200 dark:border-slate-800 opacity-70' : 'border-primary/20'}`}>
                      {/* Left side: Amount & Threshold */}
                      <div className={`w-28 flex flex-col items-center justify-center p-3 border-r border-dashed ${isClaimed ? 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400' : 'bg-primary/5 border-primary/20 text-primary'}`}>
                        <div className="flex items-baseline font-bold">
                          <span className="text-sm">¥</span>
                          <span className="text-3xl tracking-tighter">{coupon.amount}</span>
                        </div>
                        <span className="text-[10px] mt-1 font-medium text-center leading-tight">{coupon.threshold}</span>
                      </div>
                      
                      {/* Right side: Details & Action */}
                      <div className="flex-1 p-3 flex flex-col justify-between relative">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-medium shrink-0 ${isClaimed ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-primary/10 text-primary'}`}>
                              {group.title.replace('券', '')}
                            </span>
                            <h3 className={`text-sm font-bold line-clamp-1 ${isClaimed ? 'text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-slate-100'}`}>
                              {coupon.scope}
                            </h3>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5">
                            有效期: {coupon.validUntil}
                          </p>
                        </div>
                        
                        <div className="flex justify-end mt-2">
                          <button 
                            onClick={() => handleClaim(coupon.id)}
                            disabled={isClaimed}
                            className={`text-[11px] font-bold px-4 py-1.5 rounded-full transition-all ${
                              isClaimed 
                                ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed' 
                                : 'bg-primary text-white active:scale-95 shadow-sm shadow-primary/20'
                            }`}
                          >
                            {isClaimed ? '已领取' : '立即领取'}
                          </button>
                        </div>
                        
                        {/* Decorative cutouts */}
                        <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-slate-50 dark:bg-slate-950 rounded-full"></div>
                        <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 bg-slate-50 dark:bg-slate-950 rounded-full"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>


      </main>
    </div>
  );
}
