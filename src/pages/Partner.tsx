import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Partner() {
  const [showLevelModal, setShowLevelModal] = useState(false);

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
              <button 
                onClick={() => setShowLevelModal(true)}
                className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-white text-primary text-sm font-bold shadow-sm"
              >
                查看权益
              </button>
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
          <Link to="/partner/invite" className="bg-white text-[#ff7a18] px-4 py-2 rounded-full text-sm font-bold shadow-sm whitespace-nowrap active:opacity-90 transition-opacity">
            立即邀请
          </Link>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center mb-4">
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">团队统计</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Link to="/team" className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">团队成员数</p>
              <p className="text-xl font-bold">324</p>
            </div>
            <div className="text-right">
              <p className="text-green-500 text-sm font-bold">+12</p>
              <p className="text-slate-400 text-[10px]">总成员数</p>
            </div>
          </Link>
          <Link to="/partner/new-today" className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">新增合伙人</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="text-right">
              <p className="text-primary text-sm font-bold">今日</p>
              <p className="text-slate-400 text-[10px]">待激活: 2</p>
            </div>
          </Link>
          <Link to="/team-sales" className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <div className="flex-1">
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">团队销售额</p>
              <p className="text-xl font-bold">¥84,320</p>
            </div>
            <div className="text-right">
              <p className="text-green-500 text-sm font-bold">↑ 24%</p>
              <p className="text-slate-400 text-[10px]">月增长率</p>
            </div>
          </Link>
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

      {/* 等级说明弹窗 */}
      {showLevelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[85vh] flex flex-col">
            <div className="p-5 text-center border-b border-slate-100 dark:border-slate-800 relative shrink-0">
              <button 
                onClick={() => setShowLevelModal(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">合伙人等级权益</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">升级解锁更高比例佣金</p>
            </div>
            
            <div className="p-5 overflow-y-auto bg-slate-50 dark:bg-slate-800/50 flex-1 space-y-4">
              {/* 银牌合伙人 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400">
                    <span className="material-symbols-outlined">military_tech</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">银牌合伙人</h4>
                    <p className="text-xs text-slate-500">条件：免费注册即可</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
                    <p className="text-[10px] text-slate-500 mb-1">自购返佣</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">10%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
                    <p className="text-[10px] text-slate-500 mb-1">直推奖励</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">5%</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
                    <p className="text-[10px] text-slate-500 mb-1">间推奖励</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">-</p>
                  </div>
                </div>
              </div>

              {/* 金牌合伙人 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border-2 border-yellow-400 relative shadow-md shadow-yellow-400/10">
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  当前等级
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-inner">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-600 dark:text-yellow-500">金牌合伙人</h4>
                    <p className="text-xs text-slate-500">条件：直推 10 人或销售额满 1万</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-yellow-700 dark:text-yellow-500 mb-1">自购返佣</p>
                    <p className="font-bold text-yellow-700 dark:text-yellow-500">15%</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-yellow-700 dark:text-yellow-500 mb-1">直推奖励</p>
                    <p className="font-bold text-yellow-700 dark:text-yellow-500">10%</p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-yellow-700 dark:text-yellow-500 mb-1">间推奖励</p>
                    <p className="font-bold text-yellow-700 dark:text-yellow-500">5%</p>
                  </div>
                </div>
              </div>

              {/* 钻石合伙人 */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">diamond</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 dark:text-blue-400">钻石合伙人</h4>
                    <p className="text-xs text-slate-500">条件：直推 50 人或销售额满 10万</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 mb-1">自购返佣</p>
                    <p className="font-bold text-blue-700 dark:text-blue-400">20%</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 mb-1">直推奖励</p>
                    <p className="font-bold text-blue-700 dark:text-blue-400">15%</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2">
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 mb-1">间推奖励</p>
                    <p className="font-bold text-blue-700 dark:text-blue-400">10%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0 bg-white dark:bg-slate-900">
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center mb-3">距离升级 <span className="font-bold text-slate-800 dark:text-slate-200">钻石合伙人</span> 还需推荐 2 人</p>
              <button 
                onClick={() => setShowLevelModal(false)}
                className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-md hover:bg-primary/90 transition-colors"
              >
                我知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
