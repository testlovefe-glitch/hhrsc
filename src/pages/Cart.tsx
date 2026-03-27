import { useState } from 'react';
import { Link } from 'react-router-dom';
import Empty from '../components/Empty';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      storeName: '茅台官方旗舰店',
      name: '飞天茅台 53度 500ml 酱香型白酒',
      spec: '500ml单瓶装',
      price: 2999.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop',
      status: 'active',
      selected: true
    },
    {
      id: 2,
      storeName: '茅台官方旗舰店',
      name: '人参枸杞养生酒 500ml 礼盒装',
      spec: '礼盒装',
      price: 399.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop',
      status: 'inactive', // 模拟已下架商品
      selected: false
    },
    {
      id: 3,
      storeName: '全球名酒速递',
      name: '奔富 MAX 麦克斯 干红葡萄酒 750ml',
      spec: '750ml单瓶',
      price: 450.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop',
      status: 'active',
      selected: false
    }
  ]);

  const toggleSelect = (id: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id && item.status === 'active') {
        return { ...item, selected: !item.selected };
      }
      return item;
    }));
  };

  const toggleStoreSelect = (storeName: string) => {
    const storeItems = cartItems.filter(item => item.storeName === storeName && item.status === 'active');
    const allSelected = storeItems.length > 0 && storeItems.every(item => item.selected);
    
    setCartItems(items => items.map(item => {
      if (item.storeName === storeName && item.status === 'active') {
        return { ...item, selected: !allSelected };
      }
      return item;
    }));
  };

  const toggleAllSelect = () => {
    const activeItems = cartItems.filter(item => item.status === 'active');
    const allSelected = activeItems.length > 0 && activeItems.every(item => item.selected);
    
    setCartItems(items => items.map(item => {
      if (item.status === 'active') {
        return { ...item, selected: !allSelected };
      }
      return item;
    }));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id && item.status === 'active') {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const clearInactiveItems = () => {
    setCartItems(items => items.filter(item => item.status === 'active'));
  };

  const activeItems = cartItems.filter(item => item.status === 'active');
  const inactiveItems = cartItems.filter(item => item.status === 'inactive');
  const allActiveSelected = activeItems.length > 0 && activeItems.every(item => item.selected);
  const totalPrice = activeItems.filter(item => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Group items by store
  const stores = Array.from(new Set(cartItems.map(item => item.storeName)));

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="shrink-0 sticky top-0 z-10 flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-800 justify-between">
        <Link to="/" className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 text-center">购物车 ({cartItems.length})</h1>
        <div className="flex w-10 items-center justify-end"></div>
      </header>

      {/* Cart Content */}
      <main className="flex-1 overflow-y-auto pb-safe">
        {cartItems.length === 0 ? (
          <Empty 
            icon="shopping_cart"
            title="购物车是空的"
            description="再去逛逛吧，挑选一些心仪的商品"
            actionText="去逛逛"
            actionLink="/"
            className="mt-20"
          />
        ) : (
          <>
            {stores.map(storeName => {
              const storeItems = cartItems.filter(item => item.storeName === storeName);
              const activeStoreItems = storeItems.filter(item => item.status === 'active');
              const storeAllSelected = activeStoreItems.length > 0 && activeStoreItems.every(item => item.selected);
              
              // Don't render store section if it only has inactive items and we are rendering inactive items separately at the bottom
              // Actually, let's render active items grouped by store, and inactive items in a separate section at the bottom.
              if (activeStoreItems.length === 0) return null;

              return (
                <section key={storeName} className="mt-2 bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-50 dark:border-slate-800">
                    <input 
                      checked={storeAllSelected} 
                      onChange={() => toggleStoreSelect(storeName)}
                      className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" 
                      type="checkbox" 
                    />
                    <span className="material-symbols-outlined text-slate-500">store</span>
                    <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">{storeName}</h2>
                    <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                  </div>

                  {activeStoreItems.map(item => (
                    <div key={item.id} className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0">
                      <div className="flex items-center">
                        <input 
                          checked={item.selected} 
                          onChange={() => toggleSelect(item.id)}
                          className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" 
                          type="checkbox" 
                        />
                      </div>
                      <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: `url("${item.image}")` }}></div>
                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2 flex-1">{item.name}</p>
                          <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 shrink-0">
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>
                        <div className="mt-1 inline-flex items-center self-start rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                          <span className="text-slate-500 dark:text-slate-400 text-xs">规格: {item.spec}</span>
                          <span className="material-symbols-outlined text-xs ml-1">expand_more</span>
                        </div>
                        <div className="flex items-end justify-between mt-2">
                          <p className="text-primary text-lg font-bold">¥{item.price.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
                          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-8">
                            <button onClick={() => updateQuantity(item.id, -1)} className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:bg-slate-200 dark:active:bg-slate-700">-</button>
                            <input 
                              className="w-10 text-center text-sm border-x border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none" 
                              type="number" 
                              value={item.quantity} 
                              readOnly 
                            />
                            <button onClick={() => updateQuantity(item.id, 1)} className="px-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:bg-slate-200 dark:active:bg-slate-700">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </section>
              );
            })}

            {/* Inactive Items Section */}
            {inactiveItems.length > 0 && (
              <section className="mt-4 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-50 dark:border-slate-800">
                  <h2 className="text-slate-900 dark:text-slate-100 text-sm font-bold">失效商品 ({inactiveItems.length})</h2>
                  <button onClick={clearInactiveItems} className="text-primary text-sm font-medium">清空失效商品</button>
                </div>

                {inactiveItems.map(item => (
                  <div key={item.id} className="flex gap-3 px-4 py-4 border-b border-slate-50 dark:border-slate-800 last:border-0 opacity-60 grayscale">
                    <div className="flex items-center">
                      <div className="bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] px-1.5 py-0.5 rounded">失效</div>
                    </div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-slate-100 dark:bg-slate-800" style={{ backgroundImage: `url("${item.image}")` }}></div>
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <p className="text-slate-900 dark:text-slate-100 text-sm font-medium line-clamp-2 flex-1">{item.name}</p>
                        <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 shrink-0">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                      <div className="mt-1 inline-flex items-center self-start rounded bg-slate-100 dark:bg-slate-800 px-2 py-0.5">
                        <span className="text-slate-500 dark:text-slate-400 text-xs">规格: {item.spec}</span>
                      </div>
                      <div className="flex items-end justify-between mt-2">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">商品已下架或售罄</p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Recommendations / Empty Space */}
            <div className="p-8 text-center text-slate-400">
              <p className="text-xs">已经到底了</p>
            </div>
          </>
        )}
      </main>

      {/* Checkout Bottom Bar */}
      <div className="shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-2">
          <input 
            checked={allActiveSelected}
            onChange={toggleAllSelect}
            className="rounded border-slate-300 text-primary focus:ring-primary h-5 w-5" 
            type="checkbox" 
            disabled={activeItems.length === 0}
          />
          <span className="text-slate-600 dark:text-slate-400 text-sm">全选</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-slate-500">合计:</p>
            <p className="text-primary text-lg font-bold leading-none">¥{totalPrice.toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</p>
          </div>
          <Link 
            to={totalPrice > 0 ? "/checkout" : "#"} 
            className={`${totalPrice > 0 ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 active:scale-95' : 'bg-slate-300 dark:bg-slate-700 text-slate-500 cursor-not-allowed'} text-white font-bold py-3 px-8 rounded-full transition-all text-center`}
            onClick={(e) => {
              if (totalPrice === 0) e.preventDefault();
            }}
          >
            去结算
          </Link>
        </div>
      </div>
    </div>
  );
}
