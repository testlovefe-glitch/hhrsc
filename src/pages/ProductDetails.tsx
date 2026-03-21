import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ProductDetails() {
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Buy Modal State
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSpec, setSelectedSpec] = useState('500ml');
  const [orderNote, setOrderNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('wechat');

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <nav className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 border-b border-slate-200 dark:border-slate-800 relative">
        <Link to="/products" className="flex size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-lg font-bold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">商品详情</h2>
      </nav>

      <main className="flex-1 overflow-y-auto">
        <div className="relative w-full aspect-square bg-white dark:bg-slate-900 overflow-hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full">
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="snap-center shrink-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
          <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
            1 / 3
          </div>
        </div>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-primary text-3xl font-bold">¥</span>
              <span className="text-primary text-4xl font-bold">2,999</span>
              <span className="text-slate-400 dark:text-slate-500 line-through ml-2 text-sm">¥3,299</span>
            </div>
            <button onClick={() => setShowShareModal(true)} className="flex flex-col items-center text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-primary">share</span>
              <span className="text-[10px] mt-0.5">分享</span>
            </button>
          </div>
          <h1 className="text-xl font-bold leading-snug mb-3">飞天茅台 53度 500ml 酱香型白酒 - 酱香突出 幽雅细腻</h1>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>专业防破损包装发货</span>
            <span>月销: 1.2w+</span>
            <span>发货地: 贵州</span>
          </div>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">优惠</span>
            <div className="flex gap-2">
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-sm border border-primary/20">满1000减100</span>
              <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-sm border border-primary/20">新用户首单立减</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400">chevron_right</span>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 shrink-0">选择</span>
            <p className="text-sm truncate">已选：53度, 500ml, 1瓶</p>
          </div>
          <span className="material-symbols-outlined text-slate-400">keyboard_arrow_down</span>
        </section>

        <section className="p-4 bg-white dark:bg-slate-900 mb-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">verified</span>
              <span>正品保障</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">local_shipping</span>
              <span>极速退款</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-primary text-sm">7mp</span>
              <span>七天无理由</span>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center p-4 bg-transparent">
          <div className="h-[1px] w-12 bg-slate-300 dark:bg-slate-700"></div>
          <span className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">商品详情</span>
          <div className="h-[1px] w-12 bg-slate-300 dark:bg-slate-700"></div>
        </div>

        <section className="bg-white dark:bg-slate-900 mb-10 pb-10">
          <div className="p-4 space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              茅台酒独产于中国贵州省遵义市仁怀市茅台镇，是与苏格兰威士忌、法国科涅克白兰地齐名的世界三大蒸馏名酒之一，是大曲酱香型白酒的鼻祖，更是中国的国酒。
            </p>
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop')" }}></div>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              其酒体微黄透明，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。无论是商务宴请、节日送礼还是个人收藏，都是绝佳的选择。
            </p>
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
        </section>
      </main>

      <div className="shrink-0 z-40 px-4 py-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <div className="flex-1 flex gap-3">
          <button onClick={handleAddToCart} className="flex-1 h-12 bg-primary/10 text-primary font-bold rounded-full text-base transition-colors hover:bg-primary/20">加入购物车</button>
          <button onClick={() => setShowBuyModal(true)} className="flex-1 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full text-base shadow-lg shadow-primary/20 transition-transform active:scale-95">立即购买</button>
        </div>
      </div>

      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowBuyModal(false)}>
          <div 
            className="w-full max-h-[85vh] bg-white dark:bg-slate-900 rounded-t-2xl p-4 pb-0 animate-in slide-in-from-bottom-full duration-300 flex flex-col relative"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 shrink-0">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">确认订单</h3>
              <button onClick={() => setShowBuyModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-5 pb-24 hide-scrollbar">
              {/* Address */}
              <button 
                onClick={() => navigate('/addresses')}
                className="w-full text-left bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex items-center justify-between border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">张三</span>
                      <span className="text-xs text-slate-500">138****8888</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">广东省 深圳市 南山区 科技园中区 某某大厦 888室</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </button>

              {/* Product Info */}
              <div className="flex gap-3">
                <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=200&auto=format&fit=crop" alt="Product" className="w-20 h-20 rounded-lg object-cover bg-slate-100 dark:bg-slate-800 shrink-0" />
                <div className="flex flex-col justify-between py-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2">飞天茅台 53度 500ml 酱香型白酒</h4>
                  <div className="text-primary font-bold text-lg">¥2,999</div>
                </div>
              </div>

              {/* Specs */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">商品规格</h4>
                <div className="flex flex-wrap gap-2">
                  {['500ml', '1000ml', '礼盒装'].map(spec => (
                    <button 
                      key={spec}
                      onClick={() => setSelectedSpec(spec)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedSpec === spec 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">购买数量</h4>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-full px-1 py-1 border border-slate-100 dark:border-slate-700">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-6 h-6 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>

              {/* Order Notes */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">订单备注</h4>
                <input 
                  type="text" 
                  value={orderNote}
                  onChange={e => setOrderNote(e.target.value)}
                  placeholder="选填，请先和商家协商一致" 
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-primary/50 transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Payment Method */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">支付方式</h4>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#09B83E]">wechat</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">微信支付</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'wechat' ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                      {paymentMethod === 'wechat' && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                    </div>
                    <input type="radio" name="payment" value="wechat" checked={paymentMethod === 'wechat'} onChange={() => setPaymentMethod('wechat')} className="hidden" />
                  </label>
                  
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#1677FF]">payments</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">支付宝支付</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'alipay' ? 'border-primary bg-primary' : 'border-slate-300 dark:border-slate-600'}`}>
                      {paymentMethod === 'alipay' && <span className="material-symbols-outlined text-white text-[14px]">check</span>}
                    </div>
                    <input type="radio" name="payment" value="alipay" checked={paymentMethod === 'alipay'} onChange={() => setPaymentMethod('alipay')} className="hidden" />
                  </label>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between pb-safe">
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-slate-500">合计:</span>
                <span className="text-primary font-bold text-xl">¥{(2999 * quantity).toLocaleString()}</span>
              </div>
              <button 
                onClick={() => {
                  setShowBuyModal(false);
                  navigate('/payment');
                }}
                className="bg-primary text-white font-bold px-8 py-2.5 rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform"
              >
                立即支付
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowShareModal(false)}>
          <div 
            className="w-full bg-white dark:bg-slate-900 rounded-t-2xl p-6 pb-10 animate-in slide-in-from-bottom-full duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">分享商品</h3>
              <button onClick={() => setShowShareModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button className="flex flex-col items-center gap-2" onClick={() => { alert('海报已生成并保存到相册'); setShowShareModal(false); }}>
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                  <span className="material-symbols-outlined">image</span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">生成海报</span>
              </button>
              <button className="flex flex-col items-center gap-2" onClick={() => { alert('链接已复制到剪贴板'); setShowShareModal(false); }}>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">复制链接</span>
              </button>
              <button className="flex flex-col items-center gap-2" onClick={() => setShowShareModal(false)}>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">微信好友</span>
              </button>
              <button className="flex flex-col items-center gap-2" onClick={() => setShowShareModal(false)}>
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
                  <span className="material-symbols-outlined">data_usage</span>
                </div>
                <span className="text-xs text-slate-600 dark:text-slate-400">朋友圈</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] bg-black/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 animate-in fade-in zoom-in duration-200">
          <span className="material-symbols-outlined text-green-400">check_circle</span>
          <span className="text-sm font-medium">已添加到购物车</span>
        </div>
      )}
    </div>
  );
}
