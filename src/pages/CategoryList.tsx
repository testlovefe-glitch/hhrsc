import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function CategoryList() {
  const navigate = useNavigate();
  const { type } = useParams<{ type: string }>();
  
  const [sortBy, setSortBy] = useState<'comprehensive' | 'sales' | 'price' | 'new'>('comprehensive');
  const [priceOrder, setPriceOrder] = useState<'asc' | 'desc'>('asc');
  const [loading, setLoading] = useState(false);

  // Map route param to title
  const getTitle = () => {
    switch (type) {
      case 'health': return '养生套餐';
      case 'gifts': return '远方厚礼';
      case 'help': return '消费帮扶';
      case 'points': return '积分商城';
      default: return '商品列表';
    }
  };

  // Mock data
  const products = [
    {
      id: 1,
      name: '长白山人参枸杞养生酒礼盒装 500ml',
      price: 299,
      points: type === 'points' ? 2990 : undefined,
      img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=400&auto=format&fit=crop',
      tag: '热销爆款',
      sales: 5800
    },
    {
      id: 2,
      name: '宁夏特级枸杞原浆 50ml*10瓶',
      price: 128,
      points: type === 'points' ? 1280 : undefined,
      img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop',
      tag: '买一送一',
      sales: 3200
    },
    {
      id: 3,
      name: '云南文山三七粉 250g 纯正无添加',
      price: 198,
      points: type === 'points' ? 1980 : undefined,
      img: 'https://images.unsplash.com/photo-1596460107916-430662021049?q=80&w=400&auto=format&fit=crop',
      tag: '产地直供',
      sales: 1500
    },
    {
      id: 4,
      name: '野生黑枸杞 100g 礼盒装',
      price: 88,
      points: type === 'points' ? 880 : undefined,
      img: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=400&auto=format&fit=crop',
      tag: '新品上市',
      sales: 450
    },
    {
      id: 5,
      name: '高丽参切片 50g 滋补佳品',
      price: 350,
      points: type === 'points' ? 3500 : undefined,
      img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=400&auto=format&fit=crop',
      tag: '限时特惠',
      sales: 890
    },
    {
      id: 6,
      name: '阿胶糕手工熬制 500g',
      price: 258,
      points: type === 'points' ? 2580 : undefined,
      img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&auto=format&fit=crop',
      tag: '女性滋补',
      sales: 2100
    }
  ];

  // Simulate loading when sorting changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [sortBy, priceOrder, type]);

  const handleSortPrice = () => {
    if (sortBy === 'price') {
      setPriceOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy('price');
      setPriceOrder('asc');
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-12">
          <button onClick={() => navigate(-1)} className="flex items-center justify-center w-8 h-8 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">arrow_back</span>
          </button>
          <h1 className="flex-1 text-center text-lg font-bold text-slate-900 dark:text-slate-100 pr-6">
            {getTitle()}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-2">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1.5">
            <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
            <input 
              type="text" 
              placeholder={`搜索${getTitle()}商品`} 
              className="flex-1 bg-transparent border-none text-sm focus:ring-0 outline-none px-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Sort Bar */}
        <div className="flex items-center justify-between px-4 h-10 text-sm">
          <button 
            onClick={() => setSortBy('comprehensive')}
            className={`flex-1 text-center font-medium transition-colors ${sortBy === 'comprehensive' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-600 dark:text-slate-400'}`}
          >
            综合
          </button>
          <button 
            onClick={() => setSortBy('sales')}
            className={`flex-1 text-center font-medium transition-colors ${sortBy === 'sales' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-600 dark:text-slate-400'}`}
          >
            销量
          </button>
          <button 
            onClick={handleSortPrice}
            className={`flex-1 flex items-center justify-center gap-0.5 font-medium transition-colors ${sortBy === 'price' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-600 dark:text-slate-400'}`}
          >
            价格
            <div className="flex flex-col -space-y-1">
              <span className={`material-symbols-outlined text-[12px] ${sortBy === 'price' && priceOrder === 'asc' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-300 dark:text-slate-600'}`}>arrow_drop_up</span>
              <span className={`material-symbols-outlined text-[12px] ${sortBy === 'price' && priceOrder === 'desc' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-300 dark:text-slate-600'}`}>arrow_drop_down</span>
            </div>
          </button>
          <button 
            onClick={() => setSortBy('new')}
            className={`flex-1 text-center font-medium transition-colors ${sortBy === 'new' ? 'text-amber-600 dark:text-amber-500' : 'text-slate-600 dark:text-slate-400'}`}
          >
            新品
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-3">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {/* Product Grid (2 columns) */}
            <div className="grid grid-cols-2 gap-3">
              {products.map(product => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col"
                >
                  <div className="aspect-square relative bg-slate-100 dark:bg-slate-800">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                    {product.tag && (
                      <div className="absolute bottom-0 left-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] px-2 py-0.5 rounded-tr-lg font-medium">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-2.5 flex flex-col flex-1 justify-between">
                    <h3 className="text-xs font-medium text-slate-900 dark:text-slate-100 line-clamp-2 leading-snug mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-end justify-between mt-auto">
                      <div className="flex items-baseline text-red-600 dark:text-red-500 font-bold">
                        {type === 'points' ? (
                          <>
                            <span className="text-sm">{product.points}</span>
                            <span className="text-[10px] ml-0.5 font-normal">积分</span>
                          </>
                        ) : (
                          <>
                            <span className="text-[10px] mr-0.5">¥</span>
                            <span className="text-sm">{product.price}</span>
                          </>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400">已售 {product.sales}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* No more data tip */}
            <div className="py-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-slate-200 dark:bg-slate-800"></span>
              没有更多商品了
              <span className="w-8 h-px bg-slate-200 dark:bg-slate-800"></span>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
