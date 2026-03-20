import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../components/Layout';

export default function Payment() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('wechat');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden max-w-md mx-auto shadow-xl">
      {/* Top Navigation */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-12">支付订单</h2>
      </div>

      {/* Countdown Section */}
      <div className="flex flex-col items-center py-8 px-4 bg-white dark:bg-background-dark">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">支付剩余时间</p>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
              <p className="text-primary text-xl font-bold">14</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs">分</p>
          </div>
          <div className="flex h-12 items-center justify-center text-primary font-bold text-xl">:</div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-16 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
              <p className="text-primary text-xl font-bold">59</p>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs">秒</p>
          </div>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="mx-4 mt-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">订单总额</p>
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-extrabold py-3">¥678.00</h1>
          <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wider font-bold">订单号: 8239471203</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="px-4 mt-8">
        <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">选择支付方式</h3>
        <div className="space-y-3">
          {/* WeChat Pay */}
          <label 
            className={cn(
              "flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl cursor-pointer transition-colors",
              selectedPayment === 'wechat' ? "border-2 border-primary" : "border border-slate-100 dark:border-slate-800 hover:border-primary/50"
            )}
            onClick={() => setSelectedPayment('wechat')}
          >
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-lg bg-[#07C160]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#07C160]">account_balance_wallet</span>
              </div>
              <div>
                <p className="text-slate-900 dark:text-slate-100 font-semibold">微信支付</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">推荐使用的快捷支付</p>
              </div>
            </div>
            {selectedPayment === 'wechat' ? (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
            ) : (
              <div className="size-6 border-2 border-slate-200 dark:border-slate-700 rounded-full"></div>
            )}
            <input type="radio" name="payment" className="hidden" checked={selectedPayment === 'wechat'} readOnly />
          </label>
        </div>
      </div>

      {/* Security Info */}
      <div className="flex items-center justify-center gap-2 mt-8 text-slate-400">
        <span className="material-symbols-outlined text-sm">lock</span>
        <span className="text-xs uppercase tracking-widest font-bold">安全加密支付</span>
      </div>

      {/* Footer Button */}
      <div className="mt-auto p-4 pt-8 bg-background-light dark:bg-background-dark">
        <button 
          onClick={() => navigate('/share-group-buy')}
          className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform"
        >
          立即支付 ¥678.00
        </button>
        <p className="text-center text-slate-400 text-[10px] mt-4 pb-4 leading-relaxed">
          点击“立即支付”即代表您同意我们的《服务条款》和《退款政策》。
        </p>
      </div>
    </div>
  );
}
