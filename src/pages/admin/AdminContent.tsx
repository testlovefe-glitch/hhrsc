import React, { useState } from 'react';

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState<'banner' | 'announcement' | 'recruit'>('banner');

  // Mock Data
  const [banners, setBanners] = useState([
    { id: 1, title: '春季新品上市', type: 'carousel', imageUrl: 'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?auto=format&fit=crop&q=80&w=800', link: '/products', status: 'active', sort: 1 },
    { id: 2, title: '新人注册礼', type: 'popup', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', link: '/register', status: 'inactive', sort: 2 },
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, title: '系统升级维护通知', content: '为了提供更好的服务，系统将于本周日凌晨2点进行升级维护。', status: 'published', publishTime: '2026-03-20 10:00:00' },
    { id: 2, title: '五一劳动节放假安排', content: '五一期间发货时间调整公告...', status: 'draft', publishTime: '-' },
  ]);

  const [recruitConfig, setRecruitConfig] = useState({
    title: '成为我们的合伙人',
    description: '加入我们，共享财富盛宴。名酒商城为您提供优质的货源、丰厚的佣金和全方位的支持。',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1200',
    benefits: [
      '高额佣金回报',
      '专属客服支持',
      '定期培训指导',
      '一件代发，零库存压力'
    ]
  });

  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">内容管理</h1>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-1">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('banner')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'banner'
                ? 'bg-primary text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            Banner管理
          </button>
          <button
            onClick={() => setActiveTab('announcement')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'announcement'
                ? 'bg-primary text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            公告管理
          </button>
          <button
            onClick={() => setActiveTab('recruit')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'recruit'
                ? 'bg-primary text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            合伙人招募页配置
          </button>
        </div>
      </div>

      {/* Banner Management */}
      {activeTab === 'banner' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Banner列表</h2>
            <button 
              onClick={() => setShowBannerModal(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              添加Banner
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">图片</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">标题</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">类型</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">跳转链接</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">排序</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">状态</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <img src={banner.imageUrl} alt={banner.title} className="w-24 h-12 object-cover rounded-lg border border-slate-200 dark:border-slate-700" />
                    </td>
                    <td className="p-4 text-sm text-slate-900 dark:text-white font-medium">{banner.title}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                      {banner.type === 'carousel' ? '首页轮播' : '弹窗广告'}
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{banner.link}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{banner.sort}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        banner.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-500/20 dark:text-slate-400'
                      }`}>
                        {banner.status === 'active' ? '显示中' : '已隐藏'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Announcement Management */}
      {activeTab === 'announcement' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">公告列表</h2>
            <button 
              onClick={() => setShowAnnouncementModal(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              发布公告
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">标题</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">内容摘要</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">发布时间</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">状态</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {announcements.map((announcement) => (
                  <tr key={announcement.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4 text-sm text-slate-900 dark:text-white font-medium">{announcement.title}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">{announcement.content}</td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{announcement.publishTime}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        announcement.status === 'published' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400'
                      }`}>
                        {announcement.status === 'published' ? '已发布' : '草稿'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button className="p-1 text-slate-400 hover:text-red-500 transition-colors">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Recruit Page Config */}
      {activeTab === 'recruit' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">合伙人招募页配置</h2>
          
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                主标题
              </label>
              <input
                type="text"
                value={recruitConfig.title}
                onChange={(e) => setRecruitConfig({ ...recruitConfig, title: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                招募说明文案
              </label>
              <textarea
                rows={4}
                value={recruitConfig.description}
                onChange={(e) => setRecruitConfig({ ...recruitConfig, description: e.target.value })}
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                招募海报/头图
              </label>
              <div className="flex items-start gap-4">
                <img 
                  src={recruitConfig.imageUrl} 
                  alt="Recruit Poster" 
                  className="w-64 h-32 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                />
                <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
                  更换图片
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                核心优势 (每行一个)
              </label>
              <textarea
                rows={5}
                value={recruitConfig.benefits.join('\n')}
                onChange={(e) => setRecruitConfig({ ...recruitConfig, benefits: e.target.value.split('\n') })}
                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
              />
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                保存配置
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Banner Modal (Placeholder) */}
      {showBannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">添加Banner</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">标题</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" placeholder="如：春季促销" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">类型</label>
                <select className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent">
                  <option value="carousel">首页轮播</option>
                  <option value="popup">弹窗广告</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">跳转链接</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" placeholder="如：/products" />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button 
                onClick={() => setShowBannerModal(false)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setShowBannerModal(false)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Announcement Modal (Placeholder) */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">发布公告</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">公告标题</label>
                <input type="text" className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent" placeholder="输入公告标题" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">公告内容</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent resize-none" placeholder="输入公告详细内容"></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="publishNow" className="rounded border-slate-300 text-primary focus:ring-primary" />
                <label htmlFor="publishNow" className="text-sm text-slate-700 dark:text-slate-300">立即发布</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button 
                onClick={() => setShowAnnouncementModal(false)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setShowAnnouncementModal(false)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
