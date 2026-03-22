import { useNavigate } from 'react-router-dom';

export default function AdminProducts() {
  const navigate = useNavigate();

  const products = [
    { id: 'P1001', name: '飞天茅台 53度 500ml 酱香型白酒', price: 2999.00, originalPrice: 3299.00, groupPrice: 2899.00, flashPrice: 2799.00, stock: 156, category: '白酒', status: '上架', sales: 1205 },
    { id: 'P1002', name: '五粮液 普五第八代 52度 浓香型', price: 1499.00, originalPrice: 1699.00, groupPrice: 1399.00, flashPrice: null, stock: 342, category: '白酒', status: '上架', sales: 890 },
    { id: 'P1003', name: '奔富 MAX 麦克斯 干红葡萄酒', price: 299.00, originalPrice: 399.00, groupPrice: null, flashPrice: 199.00, stock: 56, category: '红酒', status: '上架', sales: 432 },
    { id: 'P1004', name: '人参枸杞养生酒 500ml 礼盒装', price: 399.00, originalPrice: 599.00, groupPrice: 299.00, flashPrice: 199.00, stock: 0, category: '养生酒', status: '售罄', sales: 128 },
    { id: 'P1005', name: '马爹利 蓝带 干邑白兰地 700ml', price: 1899.00, originalPrice: 2199.00, groupPrice: null, flashPrice: null, stock: 45, category: '洋酒', status: '下架', sales: 67 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">商品管理</h1>
        <button 
          onClick={() => navigate('/admin/products/add')}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          添加商品
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input 
                type="text" 
                placeholder="搜索商品名称/ID..." 
                className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
              />
            </div>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有分类</option>
              <option value="baijiu">白酒</option>
              <option value="redwine">红酒</option>
              <option value="yangjiu">洋酒</option>
            </select>
            <select className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none">
              <option value="">所有状态</option>
              <option value="active">上架中</option>
              <option value="inactive">已下架</option>
              <option value="soldout">售罄</option>
            </select>
          </div>
          <button className="text-slate-500 hover:text-primary text-sm font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            更多筛选
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                <th className="p-4 font-medium">商品信息</th>
                <th className="p-4 font-medium">分类</th>
                <th className="p-4 font-medium">销售价</th>
                <th className="p-4 font-medium">原价</th>
                <th className="p-4 font-medium">团购价</th>
                <th className="p-4 font-medium">秒杀价</th>
                <th className="p-4 font-medium">库存</th>
                <th className="p-4 font-medium">总销量</th>
                <th className="p-4 font-medium">状态</th>
                <th className="p-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded bg-slate-100 dark:bg-slate-700 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1">{product.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5">ID: {product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.category}</td>
                  <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">¥{product.price.toFixed(2)}</td>
                  <td className="p-4 text-sm text-slate-400 line-through">{product.originalPrice ? `¥${product.originalPrice.toFixed(2)}` : '-'}</td>
                  <td className="p-4 text-sm text-amber-600 dark:text-amber-500">{product.groupPrice ? `¥${product.groupPrice.toFixed(2)}` : '-'}</td>
                  <td className="p-4 text-sm text-red-600 dark:text-red-500">{product.flashPrice ? `¥${product.flashPrice.toFixed(2)}` : '-'}</td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className={product.stock === 0 ? 'text-red-500 font-medium' : ''}>{product.stock}</span>
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.sales}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                      product.status === '上架' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      product.status === '售罄' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => navigate(`/admin/products/edit/${product.id}`)} className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-700" title="编辑">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-700" title="删除">
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
          <span className="text-slate-500">共 128 条记录，当前 1/13 页</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">上一页</button>
            <button className="px-3 py-1.5 border border-primary bg-primary text-white rounded">1</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">2</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">3</button>
            <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
