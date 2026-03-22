import { useState } from 'react';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">系统设置</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">save</span>
          保存设置
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
            <button 
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'basic' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50 border-r-2 border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[20px]">storefront</span>
              基础设置
            </button>
            <button 
              onClick={() => setActiveTab('partner')}
              className={`px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'partner' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50 border-r-2 border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[20px]">handshake</span>
              合伙人规则
            </button>
            <button 
              onClick={() => setActiveTab('payment')}
              className={`px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'payment' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50 border-r-2 border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[20px]">payments</span>
              支付配置
            </button>
            <button 
              onClick={() => setActiveTab('notification')}
              className={`px-4 py-3 text-left text-sm font-medium transition-colors flex items-center gap-3 ${activeTab === 'notification' ? 'bg-primary/5 text-primary border-r-2 border-primary' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700/50 border-r-2 border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              通知设置
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          
          {/* Basic Settings */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">基础设置</h2>
              
              <div className="grid grid-cols-1 gap-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">商城名称</label>
                  <input type="text" defaultValue="名酒佳酿合伙人商城" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">客服电话</label>
                  <input type="text" defaultValue="400-123-4567" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">商城Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                      <span className="material-symbols-outlined text-slate-400">image</span>
                    </div>
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      上传图片
                    </button>
                    <p className="text-xs text-slate-500">建议尺寸 200x200px，支持 PNG/JPG</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">商城简介</label>
                  <textarea rows={4} defaultValue="专注于高端白酒、红酒及养生酒的社交电商平台。" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors resize-none"></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Partner Rules */}
          {activeTab === 'partner' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">合伙人规则配置</h2>
              
              <div className="grid grid-cols-1 gap-8 max-w-2xl">
                {/* Rule Section */}
                <div className="space-y-4">
                  <h3 className="text-md font-medium text-slate-900 dark:text-white">分销佣金比例</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">直推佣金比例 (%)</label>
                      <input type="number" defaultValue="10" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">间推佣金比例 (%)</label>
                      <input type="number" defaultValue="5" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-md font-medium text-slate-900 dark:text-white">提现设置</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">最低提现金额 (元)</label>
                      <input type="number" defaultValue="100" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-600 dark:text-slate-400 mb-2">提现手续费 (%)</label>
                      <input type="number" defaultValue="1" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-primary dark:focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="autoApprove" className="rounded text-primary focus:ring-primary" />
                    <label htmlFor="autoApprove" className="text-sm text-slate-600 dark:text-slate-400">开启小额自动打款 (低于500元)</label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment Config */}
          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">支付配置</h2>
              
              <div className="grid grid-cols-1 gap-6 max-w-2xl">
                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined">chat</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">微信支付</h3>
                        <p className="text-xs text-slate-500">用于小程序和公众号支付</p>
                      </div>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input type="checkbox" name="toggle" id="wx-toggle" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" style={{ right: 0, borderColor: '#10b981' }}/>
                      <label htmlFor="wx-toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-emerald-500 cursor-pointer"></label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">AppID</label>
                      <input type="text" defaultValue="wx1234567890abcdef" className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">商户号 (MCHID)</label>
                      <input type="text" defaultValue="1600000000" className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-500 mb-1">API 密钥</label>
                      <input type="password" defaultValue="************************" className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none" />
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined">payments</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-900 dark:text-white">支付宝支付</h3>
                        <p className="text-xs text-slate-500">用于H5和App支付</p>
                      </div>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                      <input type="checkbox" name="toggle" id="ali-toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" style={{ right: '1.25rem', borderColor: '#cbd5e1' }}/>
                      <label htmlFor="ali-toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer"></label>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">当前未启用支付宝支付</p>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notification' && (
            <div className="p-8 text-center text-slate-500">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">notifications_active</span>
              <p>通知与短信模板配置开发中...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
