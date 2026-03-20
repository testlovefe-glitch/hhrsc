import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 justify-between sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
        <div className="flex size-10 shrink-0 items-center justify-center">
          <Link to="/" className="material-symbols-outlined text-slate-600 dark:text-slate-400">arrow_back_ios</Link>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">个人中心</h2>
        <div className="flex w-10 items-center justify-end">
          <Link to="/settings" className="flex items-center justify-center bg-transparent text-slate-900 dark:text-slate-100 p-0">
            <span className="material-symbols-outlined">settings</span>
          </Link>
        </div>
      </div>

      <div className="p-6 pb-8 bg-white dark:bg-slate-900">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdy8D0Tm0tqHEC6KzhuEl3_J0l0Don29BFMWfydHHOJD-CdsA_IVuUMPBU_35E19V_8Db7DhE2NJK7lKAh3axsLINeyBCK5bEsq8pfHwBcDqVFd163S8HfNzBGih1nifv9BubNEH4kOtBhXpQ82HC2Q01O2nIccQK2D1-1cJUmAEHWmumXQKq22bhNsA9e8M9Jbvnt9W7-dDZSKD3VecNfXXRY1YitTp25zJ2IWm02xQAEowV-BPb-HdH68QP91-G4ZVryD5XnqGs')" }}>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold border-2 border-white dark:border-slate-900">
              LV.5
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">亚历克斯·汤普森</p>
            <div className="flex items-center mt-1 gap-1">
              <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <p className="text-primary text-sm font-semibold">金牌合伙人</p>
            </div>
            {/* 经验值进度条 */}
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-primary rounded-full"></div>
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">距 LV.6 差 200 经验</span>
            </div>
          </div>
        </div>

      </div>

      {/* 合伙人专属卡片 */}
      <div className="px-4 mb-2 -mt-6 relative z-10">
        <Link to="/partner" className="block bg-gradient-to-r from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 rounded-xl p-4 shadow-lg border border-slate-700/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white shadow-inner">
                <span className="material-symbols-outlined">wine_bar</span>
              </div>
              <div>
                <h3 className="text-yellow-500 font-bold text-base">酒业合伙人</h3>
                <p className="text-slate-400 text-xs mt-0.5">查看团队收益与专属酒款权益</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-full p-1.5 text-yellow-500 backdrop-blur-md group-hover:bg-white/20 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 mb-2">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold">我的订单</h3>
          <Link to="/orders" className="text-slate-400 text-xs flex items-center gap-1">查看全部 <span className="material-symbols-outlined text-sm">chevron_right</span></Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Link to="/orders" className="flex flex-col items-center gap-2">
            <div className="relative text-slate-700 dark:text-slate-300 p-2 rounded-xl bg-primary/5">
              <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs">待付款</p>
          </Link>
          <Link to="/orders" className="flex flex-col items-center gap-2">
            <div className="text-slate-700 dark:text-slate-300 p-2 rounded-xl bg-primary/5">
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs">待发货</p>
          </Link>
          <Link to="/orders" className="flex flex-col items-center gap-2">
            <div className="text-slate-700 dark:text-slate-300 p-2 rounded-xl bg-primary/5">
              <span className="material-symbols-outlined text-2xl">package_2</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs">待收货</p>
          </Link>
          <Link to="/orders?tab=review" className="flex flex-col items-center gap-2">
            <div className="text-slate-700 dark:text-slate-300 p-2 rounded-xl bg-primary/5">
              <span className="material-symbols-outlined text-2xl">rate_review</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs">待评价</p>
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 px-4 py-2">
        <div className="flex flex-col">
          <Link to="/team" className="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500 text-xl">group</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">我的团队</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
          <Link to="/sales" className="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-500 text-xl">payments</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">我的收益</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
          <Link to="/my-coupons" className="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-amber-500 text-xl">confirmation_number</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">我的优惠券</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
          <Link to="/addresses" className="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-500 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">收货地址</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
          <Link to="/partner/invite" className="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-500 text-xl">redeem</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">邀请码</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
          <Link to="/settings" className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-500 text-xl">tune</span>
              </div>
              <span className="text-slate-800 dark:text-slate-200 font-medium">设置</span>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
