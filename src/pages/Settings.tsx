import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 h-14">
        <Link to="/profile" className="text-slate-900 dark:text-slate-100 flex items-center">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold leading-tight tracking-tight mr-6">设置</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-8">
        <div className="mt-4 px-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
            <Link to="/settings/profile" className="px-4 py-3 flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">个人信息</span>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8k3hJ6U4vX0p-I7n_9F9w1e4kY2M89K596tqW8a_kFp1T2O5i9f564p_P0r0E_A442vX9W6i04M859n-J9L1X9195Z3-9_5T0L2I9w9989X1E9p4_1p0x2V9q9H9t9k9Y9n9Z9e9p9R9u9M9c9a9A9i9S9j9U9w9G9n9Z9e9p9R9u9M9c9a9A9i9S9j9U9w" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
              </div>
            </Link>
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">账号与安全</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">密码/绑定/注销</span>
                <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">支付设置</span>
              <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">消息通知</span>
              <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">隐私设置</span>
              <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
            </div>
            <div className="px-4 py-3 flex items-center justify-between active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">通用设置</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">清除缓存/深色模式</span>
                <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="px-4 py-3 flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">关于我们</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">v1.0.0</span>
                <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
              </div>
            </div>
            <div className="px-4 py-3 flex items-center justify-between active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors cursor-pointer">
              <span className="text-slate-900 dark:text-slate-100 text-base">帮助与客服</span>
              <span className="material-symbols-outlined text-slate-400 text-xl">chevron_right</span>
            </div>
          </div>

          <button onClick={() => window.location.href = '/login'} className="w-full mt-6 bg-white dark:bg-slate-900 text-red-500 font-bold text-base py-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm active:bg-slate-50 dark:active:bg-slate-800/50 transition-colors">
            退出登录
          </button>
        </div>
      </main>
    </div>
  );
}
