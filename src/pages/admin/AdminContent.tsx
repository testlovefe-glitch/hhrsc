import React, { useState } from 'react';
import Empty from '../../components/Empty';
import { ContentStatus } from '../../types';

export default function AdminContent() {
  const [activeTab, setActiveTab] = useState<'banner' | 'announcement' | 'recruit' | 'faq'>('banner');

  // Mock Data
  const [banners, setBanners] = useState([
    { id: 1, title: '春季新品上市', type: 'carousel', imageUrl: 'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?auto=format&fit=crop&q=80&w=800', link: '/products', status: ContentStatus.PUBLISHED, sort: 1 },
    { id: 2, title: '新人注册礼', type: 'popup', imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800', link: '/register', status: ContentStatus.HIDDEN, sort: 2 },
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, title: '系统升级维护通知', content: '为了提供更好的服务，系统将于本周日凌晨2点进行升级维护。', status: ContentStatus.PUBLISHED, publishTime: '2026-03-20 10:00:00' },
    { id: 2, title: '五一劳动节放假安排', content: '五一期间发货时间调整公告...', status: ContentStatus.DRAFT, publishTime: '-' },
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

  const [faqs, setFaqs] = useState([
    { id: 1, category: '佣金规则', question: '佣金如何结算与提现？', answer: '佣金在订单完成后7天结算到账，满100元即可申请提现，提现通常在1-3个工作日内到账。', status: ContentStatus.PUBLISHED, sort: 1 },
    { id: 2, category: '升级规则', question: '如何升级合伙人等级？', answer: '合伙人等级根据您的累计销售额和直推人数自动升级，具体条件请参考合伙人权益说明。', status: ContentStatus.PUBLISHED, sort: 2 },
    { id: 3, category: '邀请规则', question: '邀请好友有什么奖励？', answer: '邀请好友注册并成为合伙人，您将获得其销售额一定比例的间推奖励。', status: ContentStatus.HIDDEN, sort: 3 },
  ]);

  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);
  
  // Search States
  const [bannerSearch, setBannerSearch] = useState('');
  const [announcementSearch, setAnnouncementSearch] = useState('');
  const [faqSearch, setFaqSearch] = useState('');

  // New Banner State
  const [newBanner, setNewBanner] = useState({
    title: '',
    type: 'carousel',
    link: '',
    imageUrl: 'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?auto=format&fit=crop&q=80&w=800'
  });

  // New Announcement State
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    publishNow: false
  });

  // New FAQ State
  const [newFaq, setNewFaq] = useState({
    category: '佣金规则',
    question: '',
    answer: '',
    status: ContentStatus.PUBLISHED
  });

  // Toast State
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success'
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleSaveBanner = () => {
    if (!newBanner.title.trim()) {
      showToast('请输入Banner标题', 'error');
      return;
    }
    
    const banner = {
      id: Date.now(),
      ...newBanner,
      status: ContentStatus.PUBLISHED,
      sort: banners.length + 1
    };
    
    setBanners([...banners, banner]);
    setShowBannerModal(false);
    setNewBanner({ title: '', type: 'carousel', link: '', imageUrl: 'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?auto=format&fit=crop&q=80&w=800' });
    showToast('Banner添加成功');
  };

  const handleSaveAnnouncement = () => {
    if (!newAnnouncement.title.trim()) {
      showToast('请输入公告标题', 'error');
      return;
    }
    if (!newAnnouncement.content.trim()) {
      showToast('请输入公告内容', 'error');
      return;
    }

    const announcement = {
      id: Date.now(),
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      status: newAnnouncement.publishNow ? ContentStatus.PUBLISHED : ContentStatus.DRAFT,
      publishTime: newAnnouncement.publishNow ? new Date().toLocaleString() : '-'
    };

    setAnnouncements([announcement, ...announcements]);
    setShowAnnouncementModal(false);
    setNewAnnouncement({ title: '', content: '', publishNow: false });
    showToast(newAnnouncement.publishNow ? '公告发布成功' : '公告已保存为草稿');
  };

  const handleSaveRecruitConfig = () => {
    if (!recruitConfig.title.trim()) {
      showToast('请输入招募页主标题', 'error');
      return;
    }
    showToast('招募页配置保存成功');
  };

  const handleSaveFaq = () => {
    if (!newFaq.question.trim()) {
      showToast('请输入问题', 'error');
      return;
    }
    if (!newFaq.answer.trim()) {
      showToast('请输入回答', 'error');
      return;
    }

    const faq = {
      id: Date.now(),
      ...newFaq,
      sort: faqs.length + 1
    };

    setFaqs([...faqs, faq]);
    setShowFaqModal(false);
    setNewFaq({ category: '佣金规则', question: '', answer: '', status: ContentStatus.PUBLISHED });
    showToast('FAQ添加成功');
  };

  const filteredBanners = banners.filter(banner => 
    banner.title.includes(bannerSearch)
  );

  const filteredAnnouncements = announcements.filter(ann => 
    ann.title.includes(announcementSearch) || ann.content.includes(announcementSearch)
  );

  const filteredFaqs = faqs.filter(faq => 
    faq.question.includes(faqSearch) || faq.answer.includes(faqSearch) || faq.category.includes(faqSearch)
  );

  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} animate-in fade-in slide-in-from-top-4`}>
          <span className="material-symbols-outlined text-xl">
            {toast.type === 'success' ? 'check_circle' : 'error'}
          </span>
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

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
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              activeTab === 'faq'
                ? 'bg-primary text-white shadow'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            规则与FAQ
          </button>
        </div>
      </div>

      {/* Banner Management */}
      {activeTab === 'banner' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Banner列表</h2>
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="搜索Banner标题" 
                value={bannerSearch}
                onChange={(e) => setBannerSearch(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
              <button 
                onClick={() => setShowBannerModal(true)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                添加Banner
              </button>
            </div>
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
                {filteredBanners.length > 0 ? (
                  filteredBanners.map((banner) => (
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
                          banner.status === ContentStatus.PUBLISHED 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-800 dark:bg-slate-500/20 dark:text-slate-400'
                        }`}>
                          {banner.status}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-0">
                      <Empty 
                        icon="view_carousel"
                        title="未找到Banner"
                        description="没有找到符合条件的Banner，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => setBannerSearch('')}
                      />
                    </td>
                  </tr>
                )}
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
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="搜索公告标题/内容" 
                value={announcementSearch}
                onChange={(e) => setAnnouncementSearch(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
              <button 
                onClick={() => setShowAnnouncementModal(true)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                发布公告
              </button>
            </div>
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
                {filteredAnnouncements.length > 0 ? (
                  filteredAnnouncements.map((announcement) => (
                    <tr key={announcement.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white font-medium">{announcement.title}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">{announcement.content}</td>
                      <td className="p-4 text-sm text-slate-600 dark:text-slate-400">{announcement.publishTime}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          announcement.status === ContentStatus.PUBLISHED 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400'
                        }`}>
                          {announcement.status}
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-0">
                      <Empty 
                        icon="campaign"
                        title="未找到公告"
                        description="没有找到符合条件的公告，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => setAnnouncementSearch('')}
                      />
                    </td>
                  </tr>
                )}
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
              <button 
                onClick={handleSaveRecruitConfig}
                className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                保存配置
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Management */}
      {activeTab === 'faq' && (
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">规则与FAQ列表</h2>
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="搜索问题或分类" 
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none w-64"
              />
              <button 
                onClick={() => setShowFaqModal(true)}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                添加FAQ
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">排序</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">分类</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">问题</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">状态</th>
                  <th className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <tr key={faq.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 text-sm text-slate-900 dark:text-white">{faq.sort}</td>
                      <td className="p-4 text-sm text-slate-900 dark:text-white">
                        <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs font-medium">
                          {faq.category}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-900 dark:text-white max-w-md">
                        <p className="font-medium truncate">{faq.question}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-1">{faq.answer}</p>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          faq.status === ContentStatus.PUBLISHED ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                          {faq.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-primary hover:text-primary/80 font-medium text-sm mr-4 transition-colors">编辑</button>
                        <button className="text-red-500 hover:text-red-600 font-medium text-sm transition-colors">删除</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-0">
                      <Empty 
                        icon="help"
                        title="未找到规则与FAQ"
                        description="没有找到符合条件的规则与FAQ，请尝试更改搜索条件"
                        actionText="清除筛选"
                        onAction={() => setFaqSearch('')}
                      />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Banner Modal */}
      {showBannerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-md p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">添加Banner</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">标题 <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newBanner.title}
                  onChange={(e) => setNewBanner({...newBanner, title: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="如：春季促销" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">类型</label>
                <select 
                  value={newBanner.type}
                  onChange={(e) => setNewBanner({...newBanner, type: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none appearance-none"
                >
                  <option value="carousel">首页轮播</option>
                  <option value="popup">弹窗广告</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">跳转链接</label>
                <input 
                  type="text" 
                  value={newBanner.link}
                  onChange={(e) => setNewBanner({...newBanner, link: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="如：/products" 
                />
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
                onClick={handleSaveBanner}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">发布公告</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">公告标题 <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="输入公告标题" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">公告内容 <span className="text-red-500">*</span></label>
                <textarea 
                  rows={4} 
                  value={newAnnouncement.content}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent resize-none focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="输入公告详细内容"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="publishNow" 
                  checked={newAnnouncement.publishNow}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, publishNow: e.target.checked})}
                  className="rounded border-slate-300 text-primary focus:ring-primary" 
                />
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
                onClick={handleSaveAnnouncement}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Add FAQ Modal */}
      {showFaqModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">添加FAQ</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">分类</label>
                <select 
                  value={newFaq.category}
                  onChange={(e) => setNewFaq({...newFaq, category: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none appearance-none"
                >
                  <option value="佣金规则">佣金规则</option>
                  <option value="升级规则">升级规则</option>
                  <option value="邀请规则">邀请规则</option>
                  <option value="其他问题">其他问题</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">问题 <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({...newFaq, question: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="输入常见问题" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">回答 <span className="text-red-500">*</span></label>
                <textarea 
                  rows={4} 
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({...newFaq, answer: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent resize-none focus:ring-2 focus:ring-primary/50 outline-none" 
                  placeholder="输入详细解答"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">状态</label>
                <select 
                  value={newFaq.status}
                  onChange={(e) => setNewFaq({...newFaq, status: e.target.value as ContentStatus})}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-2 focus:ring-primary/50 outline-none appearance-none"
                >
                  <option value={ContentStatus.PUBLISHED}>{ContentStatus.PUBLISHED}</option>
                  <option value={ContentStatus.HIDDEN}>{ContentStatus.HIDDEN}</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button 
                onClick={() => setShowFaqModal(false)}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={handleSaveFaq}
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
