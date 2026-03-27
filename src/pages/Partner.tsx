import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Partner() {
  // 模拟用户状态，实际应从全局状态或 API 获取
  const [userStatus] = useState<'正常' | '冻结'>('冻结');

  return (
    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pb-24">
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 justify-between">
        <div className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <Link to="/" className="material-symbols-outlined cursor-pointer">arrow_back</Link>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">合伙人中心</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center text-slate-900 dark:text-slate-100">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </div>

      {userStatus === '冻结' && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 text-sm flex items-start gap-2 border-b border-red-100 dark:border-red-900/30">
          <span className="material-symbols-outlined text-base mt-0.5">block</span>
          <div className="flex-1">
            <p className="font-bold">账号已冻结</p>
            <p className="text-xs mt-0.5 opacity-90">您的合伙人权限已被冻结，提现和邀请功能暂时受限。如有疑问请联系客服。</p>
          </div>
        </div>
      )}

      <div className="p-4">
        <div className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-gradient-to-br from-primary to-blue-700 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-6xl">workspace_premium</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 rounded-full border-2 border-white/50 bg-white/20 flex items-center justify-center overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCov-1IBDjVasO4ATENK1JG1phJT6MQjLfN8KjmD6bxQjPkZnGpakbEr34-uj2nSPxjsyv8-DU01ght5qvmiZ-o1Y14DJCupPcMUZeml3BEJaA7K2YIF1Z756jKtVklHiMG5H2ake1L1gA56328p5jn9veOZZpA0oKjb9nycdwfZxCxnzIv23sM3um9cMmcTXH9ZFzToIBhL9ZSbkjbqyeUHZD6P7OG0tb-DR_bIMBk4usNGpCV1Izr_rr8zVkiBTpPw4Dm0sxDcIA" alt="User avatar" />
              </div>
              <div>
                <p className="text-white/80 text-xs font-normal">合伙人 ID: 88291</p>
                <p className="text-xl font-bold leading-tight tracking-tight">金牌合伙人</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link to="/sales/details" className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 block hover:bg-white/20 transition-colors">
                <p className="text-white/70 text-xs mb-1">个人销售额</p>
                <p className="text-lg font-bold">¥12,450.00</p>
                <p className="text-green-300 text-[10px] font-medium">本月 +12%</p>
              </Link>
              <Link to="/sales" className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 block hover:bg-white/20 transition-colors">
                <p className="text-white/70 text-xs mb-1">个人收益</p>
                <p className="text-lg font-bold">¥2,180.50</p>
                <p className="text-green-300 text-[10px] font-medium">本月 +¥320</p>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">当前等级进度</p>
                <div className="w-32 h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-white rounded-full"></div>
                </div>
              </div>
              <Link 
                to="/privileges"
                className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-white text-primary text-sm font-bold shadow-sm"
              >
                查看权益
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-gradient-to-r from-[#ff7a18] to-[#ffb347] rounded-xl p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-white/20 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-3xl">person_add</span>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold leading-tight">邀请合伙人</h3>
              <p className="text-white/90 text-xs mt-1">邀请好友加入，享二级返佣加成</p>
            </div>
          </div>
          {userStatus === '冻结' ? (
            <button disabled className="bg-white/50 text-[#ff7a18]/50 px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap cursor-not-allowed">
              不可用
            </button>
          ) : (
            <Link to="/partner/invite" className="bg-white text-[#ff7a18] px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap active:opacity-90 transition-opacity">
              立即邀请
            </Link>
          )}
        </div>
      </div>

      {/* 收益明细 */}
      <div className="px-4 mb-6">
        <div className="flex items-center mb-4">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">收益明细</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                <span className="material-symbols-outlined text-sm">card_giftcard</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">推荐奖励</p>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">¥1,250.00</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined text-sm">payments</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">销售提成</p>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">¥8,420.50</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500">
                <span className="material-symbols-outlined text-sm">pie_chart</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">销售分红</p>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">¥3,200.00</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">预估平台分红</p>
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">¥850.00</p>
          </div>
        </div>
      </div>



      {/* 常见问题 */}
      <div className="px-4 mb-8">
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4">合伙人指南</h2>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <Link to="/faq/commission" className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">help</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">佣金如何结算与提现？</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </Link>
          <Link to="/faq/upgrade" className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">trending_up</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">如何升级合伙人等级？</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </Link>
          <Link to="/faq/invite" className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">group_add</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">邀请好友有什么奖励？</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
