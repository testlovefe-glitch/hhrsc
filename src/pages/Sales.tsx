import { useState } from 'react';
import { Link } from 'react-router-dom';

type RecordType = '全部' | '推荐奖励' | '销售提成' | '分红收益';

interface EarningRecord {
  id: string;
  date: string;
  type: RecordType;
  amount: number;
  status: '已结算' | '待结算';
  orderNo: string;
  sourceUser?: string;
  desc?: string;
}

const mockRecords: EarningRecord[] = [
  { id: '1', date: '2023-10-24 14:30', type: '推荐奖励', amount: 50.00, status: '已结算', orderNo: 'ORD20231024001', sourceUser: '张三', desc: '邀请新用户注册并首单' },
  { id: '2', date: '2023-10-23 09:15', type: '分红收益', amount: 120.50, status: '已结算', orderNo: 'DIV20231023001', desc: '合伙人月度分红池奖励' },
  { id: '3', date: '2023-10-22 18:00', type: '销售提成', amount: 35.00, status: '待结算', orderNo: 'ORD20231022005', sourceUser: '李四', desc: '下级用户购买养生套餐' },
  { id: '4', date: '2023-10-20 11:20', type: '推荐奖励', amount: 50.00, status: '已结算', orderNo: 'ORD20231020002', sourceUser: '王五', desc: '邀请新用户注册并首单' },
  { id: '5', date: '2023-10-18 16:45', type: '销售提成', amount: 88.00, status: '已结算', orderNo: 'ORD20231018008', sourceUser: '赵六', desc: '下级用户购买远方厚礼' },
  { id: '6', date: '2023-10-15 10:00', type: '分红收益', amount: 300.00, status: '待结算', orderNo: 'DIV20231015001', desc: '合伙人季度分红池奖励预估' },
];

export default function Sales() {
  const [activeTab, setActiveTab] = useState<RecordType>('全部');
  const [selectedRecord, setSelectedRecord] = useState<EarningRecord | null>(null);

  const tabs: RecordType[] = ['全部', '推荐奖励', '销售提成', '分红收益'];

  const filteredRecords = activeTab === '全部' 
    ? mockRecords 
    : mockRecords.filter(record => record.type === activeTab);

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      <header className="sticky top-0 z-40 flex items-center bg-primary text-white p-4 justify-between">
        <Link to="/profile" className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">收益中心</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        <div className="bg-primary px-6 pt-4 pb-12 text-white relative">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-white/80 text-sm mb-1">可提现收益 (元)</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold">¥</span>
              <span className="text-5xl font-bold tracking-tight">8,540.00</span>
            </div>
            <Link to="/withdraw" className="mt-4 bg-white text-primary font-bold px-8 py-2 rounded-full shadow-lg shadow-black/10 active:scale-95 transition-transform block">
              立即提现
            </Link>
          </div>
        </div>

        <div className="mx-4 -mt-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 relative z-10">
          <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-800 py-4">
            <div className="flex flex-col items-center justify-center">
              <span className="text-slate-500 text-xs mb-1">今日预估收益</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">¥125.50</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-slate-500 text-xs mb-1">本月累计收益</span>
              <span className="text-slate-900 dark:text-slate-100 font-bold text-lg">¥3,240.00</span>
            </div>
          </div>
        </div>

        <div className="mt-4 px-4 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800/50 flex justify-between items-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 border-l-4 border-primary pl-2">收益明细</h3>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-100 dark:border-slate-800">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap relative ${
                    activeTab === tab 
                      ? 'text-primary' 
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Records List */}
            <div className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <div 
                    key={record.id} 
                    onClick={() => setSelectedRecord(record)}
                    className="p-4 flex justify-between items-center active:bg-slate-50 dark:active:bg-slate-800/50 cursor-pointer transition-colors"
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{record.type}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${
                          record.status === '已结算' 
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' 
                            : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'
                        }`}>
                          {record.status}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">{record.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-emerald-500">
                        +{record.amount.toFixed(2)}
                      </span>
                      <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400 text-sm">
                  暂无收益记录
                </div>
              )}
            </div>
            
            {filteredRecords.length > 0 && (
              <div className="p-3 text-center border-t border-slate-50 dark:border-slate-800/50">
                <span className="text-xs text-slate-400">没有更多了</span>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm overflow-hidden shadow-xl animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-lg">收益详情</h3>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="text-center mb-6">
                <div className="text-sm text-slate-500 mb-1">入账金额</div>
                <div className="text-3xl font-bold text-emerald-500">+{selectedRecord.amount.toFixed(2)}</div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">收益类型</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{selectedRecord.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">当前状态</span>
                  <span className={`font-medium ${selectedRecord.status === '已结算' ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {selectedRecord.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">入账时间</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">{selectedRecord.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">关联订单号</span>
                  <span className="font-mono text-slate-900 dark:text-slate-100">{selectedRecord.orderNo}</span>
                </div>
                {selectedRecord.sourceUser && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">来源用户</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100">{selectedRecord.sourceUser}</span>
                  </div>
                )}
                {selectedRecord.desc && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">备注说明</span>
                    <span className="font-medium text-slate-900 dark:text-slate-100 text-right max-w-[150px]">{selectedRecord.desc}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
              <button 
                onClick={() => setSelectedRecord(null)}
                className="w-full py-2.5 bg-primary text-white rounded-xl font-medium active:scale-[0.98] transition-transform"
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
