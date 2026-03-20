import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PartnerPackage() {
  const navigate = useNavigate();
  const [selectedPackageId, setSelectedPackageId] = useState(1);
  const [benefitsExpanded, setBenefitsExpanded] = useState(false);

  const packages = [
    {
      id: 1,
      name: '尊享酱香套餐',
      price: 3300,
      originalPrice: 4599,
      desc: '飞天茅台53度500ml × 1 + 奔富MAX干红葡萄酒 × 2',
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: '经典浓香套餐',
      price: 3500,
      originalPrice: 4899,
      desc: '五粮液普五第八代52度 × 2 + 景德镇高端酒具套装 × 1',
      img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: '红酒品鉴套餐',
      price: 3300,
      originalPrice: 4200,
      desc: '拉菲传奇波尔多红酒 × 6 + 进口水晶醒酒器 × 1',
      img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const selectedPackage = packages.find(p => p.id === selectedPackageId) || packages[0];

  const handleBuy = () => {
    // In a real app, check auth status here.
    // If not logged in: navigate('/login?redirect=/checkout')
    navigate('/checkout');
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-90">
          <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight mr-8">合伙人礼包</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {/* Product Image */}
        <div className="w-full aspect-square bg-white dark:bg-slate-900 relative">
          <img 
            src={selectedPackage.img} 
            alt={selectedPackage.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-gradient-to-r from-amber-200 to-yellow-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                合伙人专属
              </span>
            </div>
            <h2 className="text-xl font-bold leading-tight drop-shadow-md">
              {selectedPackage.name}
            </h2>
          </div>
        </div>

        {/* Price & Summary */}
        <div className="bg-white dark:bg-slate-900 px-4 py-4 mb-2">
          <div className="flex items-end justify-between mb-2">
            <div className="flex items-baseline text-red-600 dark:text-red-500 font-bold">
              <span className="text-sm mr-1">¥</span>
              <span className="text-3xl tracking-tight leading-none">{selectedPackage.price}</span>
              <span className="text-xs text-slate-400 font-normal line-through ml-2">¥{selectedPackage.originalPrice}</span>
            </div>
            <span className="text-xs text-slate-500">已售 1.2w+</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug">
            {selectedPackage.desc}
          </p>
          
          <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-amber-500">verified</span>
              <span>正品保障</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-amber-500">local_shipping</span>
              <span>顺丰包邮</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-amber-500">workspace_premium</span>
              <span>升级合伙人</span>
            </div>
          </div>
        </div>

        {/* Package Selection */}
        <div className="bg-white dark:bg-slate-900 px-4 py-4 mb-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">选择套餐</h3>
          <div className="flex flex-col gap-3">
            {packages.map(pkg => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`flex items-center p-3 rounded-xl border-2 text-left transition-all ${
                  selectedPackageId === pkg.id 
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/10' 
                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
                }`}
              >
                <img src={pkg.img} alt={pkg.name} className="w-12 h-12 rounded-lg object-cover mr-3" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{pkg.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">{pkg.desc}</div>
                </div>
                <div className="ml-3 text-right shrink-0">
                  <div className="text-sm font-bold text-red-600 dark:text-red-500">¥{pkg.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white dark:bg-slate-900 px-4 py-4 mb-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500">stars</span>
              合伙人专属权益
            </h3>
            <button 
              onClick={() => setBenefitsExpanded(!benefitsExpanded)}
              className="text-xs text-slate-500 flex items-center"
            >
              {benefitsExpanded ? '收起' : '查看完整权益'}
              <span className={`material-symbols-outlined text-[16px] transition-transform ${benefitsExpanded ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">高额推荐奖励</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">直推合伙人可获得丰厚现金奖励，团队裂变收益无上限。</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                <span className="material-symbols-outlined">pie_chart</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">平台分红池权益</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">参与平台整体利润分红，每月按贡献值自动结算至余额。</p>
              </div>
            </div>

            {benefitsExpanded && (
              <>
                <div className="flex gap-3 animate-in fade-in slide-in-from-top-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                    <span className="material-symbols-outlined">local_mall</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">自购省钱特权</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">商城全场商品享受合伙人专属内部拿货价，最高可省50%。</p>
                  </div>
                </div>
                <div className="flex gap-3 animate-in fade-in slide-in-from-top-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 shrink-0">
                    <span className="material-symbols-outlined">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">一对一专属客服</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">配备专属大客户经理，7x24小时优先响应售后及业务咨询。</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Bottom padding for fixed bar */}
        <div className="h-6"></div>
      </main>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 pb-safe z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-amber-600 dark:text-amber-500 font-medium bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
            提示：购买成功后自动成为合伙人，可享受权益
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500">合计实付</span>
            <div className="flex items-baseline text-red-600 dark:text-red-500 font-bold">
              <span className="text-sm">¥</span>
              <span className="text-2xl tracking-tight leading-none">{selectedPackage.price}</span>
            </div>
          </div>
          <button 
            onClick={handleBuy}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 rounded-full shadow-lg shadow-amber-500/30 active:scale-[0.98] transition-all text-center"
          >
            立即购买 ￥{selectedPackage.price}起
          </button>
        </div>
      </div>
    </div>
  );
}
