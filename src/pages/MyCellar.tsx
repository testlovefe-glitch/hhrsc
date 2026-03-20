import { Link } from 'react-router-dom';

export default function MyCellar() {
  const cellarItems = [
    {
      id: 1,
      name: '奔富 Bin 389 赤霞珠设拉子红葡萄酒',
      vintage: '2019',
      quantity: 6,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80',
      price: '¥588.00',
      addedDate: '2023-10-15'
    },
    {
      id: 2,
      name: '拉菲传奇波尔多红葡萄酒',
      vintage: '2020',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=400&q=80',
      price: '¥128.00',
      addedDate: '2023-11-02'
    },
    {
      id: 3,
      name: '黄尾袋鼠 西拉红葡萄酒',
      vintage: '2021',
      quantity: 12,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&q=80',
      price: '¥68.00',
      addedDate: '2023-12-20'
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/profile" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">我的酒窖</h1>
        <div className="flex w-10 items-center justify-end">
          <span className="material-symbols-outlined">search</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300">藏酒列表 ({cellarItems.reduce((acc, item) => acc + item.quantity, 0)} 瓶)</h2>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>按添加时间</span>
            <span className="material-symbols-outlined text-[14px]">swap_vert</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {cellarItems.map(item => (
            <div key={item.id} className="bg-white dark:bg-slate-900 rounded-xl p-3 flex gap-4 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-20 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded">年份: {item.vintage}</span>
                  </div>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <div className="text-primary font-bold">{item.price}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">数量: <span className="font-bold text-slate-700 dark:text-slate-300">{item.quantity}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
