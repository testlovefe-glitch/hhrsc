import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Empty from '../../components/Empty';

export default function AdminProducts() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('list');
  const [showTagModal, setShowTagModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const [products, setProducts] = useState([
    { 
      id: 'P1001', 
      name: '飞天茅台 53度 500ml 酱香型白酒', 
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab75035?auto=format&fit=crop&q=80&w=100',
      price: '2999.00', 
      stock: 156, 
      category: '白酒', 
      status: '上架', 
      sales: 1205,
      isMultiSpec: false,
      tags: ['热卖', '秒杀']
    },
    { 
      id: 'P1002', 
      name: '五粮液 普五第八代 52度 浓香型', 
      image: 'https://images.unsplash.com/photo-1582816065535-1f9121703632?auto=format&fit=crop&q=80&w=100',
      price: '1499.00 - 2899.00', 
      stock: 342, 
      category: '白酒', 
      status: '上架', 
      sales: 890,
      isMultiSpec: true,
      tags: ['团购']
    },
    { 
      id: 'P1003', 
      name: '奔富 MAX 麦克斯 干红葡萄酒', 
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=100',
      price: '299.00', 
      stock: 56, 
      category: '红酒', 
      status: '上架', 
      sales: 432,
      isMultiSpec: false,
      tags: []
    },
    { 
      id: 'P1004', 
      name: '人参枸杞养生酒 500ml 礼盒装', 
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab75035?auto=format&fit=crop&q=80&w=100',
      price: '399.00', 
      stock: 0, 
      category: '养生酒', 
      status: '下架', 
      sales: 128,
      isMultiSpec: false,
      tags: []
    },
  ]);

  // Mock Data for Categories
  const [categories, setCategories] = useState([
    { id: 'C1', name: '白酒', level: 1, sort: 1, productCount: 120, children: [
      { id: 'C1-1', name: '酱香型', level: 2, sort: 1, productCount: 45 },
      { id: 'C1-2', name: '浓香型', level: 2, sort: 2, productCount: 50 },
      { id: 'C1-3', name: '清香型', level: 2, sort: 3, productCount: 25 },
    ]},
    { id: 'C2', name: '红酒', level: 1, sort: 2, productCount: 85, children: [
      { id: 'C2-1', name: '干红', level: 2, sort: 1, productCount: 60 },
      { id: 'C2-2', name: '干白', level: 2, sort: 2, productCount: 25 },
    ]},
    { id: 'C3', name: '洋酒', level: 1, sort: 3, productCount: 40, children: []},
    { id: 'C4', name: '养生酒', level: 1, sort: 4, productCount: 15, children: []},
  ]);

  const [tempTags, setTempTags] = useState<string[]>([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryForm, setCategoryForm] = useState({ id: '', name: '', sort: 1, parentId: null as string | null });

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string, type: 'product' | 'category', parentId?: string | null } | null>(null);

  const openTagModal = (product: any) => {
    setSelectedProduct(product);
    setTempTags([...product.tags]);
    setShowTagModal(true);
  };

  const toggleTag = (tag: string) => {
    if (tempTags.includes(tag)) {
      setTempTags(tempTags.filter(t => t !== tag));
    } else {
      setTempTags([...tempTags, tag]);
    }
  };

  const saveTags = () => {
    setProducts(products.map(p => 
      p.id === selectedProduct.id ? { ...p, tags: tempTags } : p
    ));
    setShowTagModal(false);
    showToast('商品标签已更新');
  };

  const toggleStatus = (id: string) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const newStatus = p.status === '上架' ? '下架' : '上架';
        showToast(`商品已${newStatus}`);
        return { ...p, status: newStatus };
      }
      return p;
    }));
  };

  const deleteProduct = (id: string) => {
    setItemToDelete({ id, type: 'product' });
    setShowDeleteModal(true);
  };

  const deleteCategory = (id: string, parentId: string | null = null) => {
    setItemToDelete({ id, type: 'category', parentId });
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === 'product') {
      setProducts(products.filter(p => p.id !== itemToDelete.id));
      showToast('商品已删除');
    } else if (itemToDelete.type === 'category') {
      if (itemToDelete.parentId) {
        setCategories(categories.map(c => 
          c.id === itemToDelete.parentId ? { ...c, children: c.children.filter(child => child.id !== itemToDelete.id) } : c
        ));
      } else {
        setCategories(categories.filter(c => c.id !== itemToDelete.id));
      }
      showToast('分类已删除');
    }
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const openCategoryModal = (category: any = null, parentId: string | null = null) => {
    if (category) {
      setCategoryForm({ id: category.id, name: category.name, sort: category.sort, parentId });
    } else {
      setCategoryForm({ id: '', name: '', sort: 1, parentId });
    }
    setShowCategoryModal(true);
  };

  const saveCategory = () => {
    if (!categoryForm.name) return;
    
    if (categoryForm.id) {
      // Edit
      if (categoryForm.parentId) {
        setCategories(categories.map(c => 
          c.id === categoryForm.parentId 
            ? { ...c, children: c.children.map(child => child.id === categoryForm.id ? { ...child, name: categoryForm.name, sort: categoryForm.sort } : child) }
            : c
        ));
      } else {
        setCategories(categories.map(c => 
          c.id === categoryForm.id ? { ...c, name: categoryForm.name, sort: categoryForm.sort } : c
        ));
      }
    } else {
      // Add
      const newId = `C${Date.now()}`;
      if (categoryForm.parentId) {
        setCategories(categories.map(c => 
          c.id === categoryForm.parentId 
            ? { ...c, children: [...c.children, { id: newId, name: categoryForm.name, level: 2, sort: categoryForm.sort, productCount: 0 }] }
            : c
        ));
      } else {
        setCategories([...categories, { id: newId, name: categoryForm.name, level: 1, sort: categoryForm.sort, productCount: 0, children: [] }]);
      }
    }
    setShowCategoryModal(false);
    showToast(categoryForm.id ? '分类已更新' : '分类已添加');
  };

  const updateCategorySort = (id: string, sort: number, parentId: string | null = null) => {
    if (parentId) {
      setCategories(categories.map(c => 
        c.id === parentId 
          ? { ...c, children: c.children.map(child => child.id === id ? { ...child, sort } : child) }
          : c
      ));
    } else {
      setCategories(categories.map(c => 
        c.id === id ? { ...c, sort } : c
      ));
    }
    showToast('排序已更新');
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.includes(searchQuery) || p.id.includes(searchQuery);
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesStatus = statusFilter ? (statusFilter === 'active' ? p.status === '上架' : p.status === '下架') : true;
    const matchesTag = tagFilter ? p.tags.includes(tagFilter) : true;
    return matchesSearch && matchesCategory && matchesStatus && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">商品管理</h1>
        {activeTab === 'list' ? (
          <button 
            onClick={() => navigate('/admin/products/add')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            添加商品
          </button>
        ) : (
          <button 
            onClick={() => openCategoryModal()}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            添加一级分类
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('list')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'list' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            商品列表
          </button>
          <button 
            onClick={() => setActiveTab('categories')} 
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'categories' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
          >
            商品分类
          </button>
        </div>

        {/* Tab Content: Product List */}
        {activeTab === 'list' && (
          <div>
            {/* Toolbar */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                  <input 
                    type="text" 
                    placeholder="搜索商品名称/ID..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                  />
                </div>
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
                >
                  <option value="">所有分类</option>
                  <option value="白酒">白酒</option>
                  <option value="红酒">红酒</option>
                  <option value="洋酒">洋酒</option>
                  <option value="养生酒">养生酒</option>
                </select>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
                >
                  <option value="">所有状态</option>
                  <option value="active">上架中</option>
                  <option value="inactive">已下架</option>
                </select>
                <select 
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm rounded-lg px-3 py-2 outline-none"
                >
                  <option value="">所有营销标签</option>
                  <option value="秒杀">秒杀</option>
                  <option value="团购">团购</option>
                  <option value="热卖">热卖</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <th className="p-4 font-medium">商品信息</th>
                    <th className="p-4 font-medium">分类</th>
                    <th className="p-4 font-medium">价格</th>
                    <th className="p-4 font-medium">总库存</th>
                    <th className="p-4 font-medium">总销量</th>
                    <th className="p-4 font-medium">营销标签</th>
                    <th className="p-4 font-medium">状态</th>
                    <th className="p-4 font-medium text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover border border-slate-200 dark:border-slate-700 flex-shrink-0" />
                            <div>
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-1" title={product.name}>{product.name}</p>
                                {product.isMultiSpec && (
                                  <span className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] rounded whitespace-nowrap">多规格</span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">ID: {product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.category}</td>
                        <td className="p-4 text-sm font-medium text-slate-900 dark:text-white">¥{product.price}</td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                          <span className={product.stock === 0 ? 'text-red-500 font-medium' : ''}>{product.stock}</span>
                        </td>
                        <td className="p-4 text-sm text-slate-600 dark:text-slate-300">{product.sales}</td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {product.tags.length > 0 ? product.tags.map(tag => (
                              <span key={tag} className={`px-2 py-0.5 rounded text-xs font-medium ${
                                tag === '秒杀' ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400' :
                                tag === '团购' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' :
                                'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'
                              }`}>
                                {tag}
                              </span>
                            )) : <span className="text-xs text-slate-400">-</span>}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                            product.status === '上架' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                            'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => openTagModal(product)} className="text-xs text-primary hover:underline font-medium px-2 py-1">
                              设置标签
                            </button>
                            <button onClick={() => toggleStatus(product.id)} className={`text-xs font-medium px-2 py-1 hover:underline ${product.status === '上架' ? 'text-slate-500' : 'text-emerald-600'}`}>
                              {product.status === '上架' ? '下架' : '上架'}
                            </button>
                            <button onClick={() => navigate(`/admin/products/edit/${product.id}`)} className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-700" title="编辑">
                              <span className="material-symbols-outlined text-[18px]">edit</span>
                            </button>
                            <button onClick={() => deleteProduct(product.id)} className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded hover:bg-slate-100 dark:hover:bg-slate-700" title="删除">
                              <span className="material-symbols-outlined text-[18px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="p-0">
                        <Empty 
                          icon="search_off"
                          title="未找到商品"
                          description="没有找到符合条件的商品，请尝试更改搜索条件"
                          actionText="清除筛选"
                          onAction={() => {
                            setSearchQuery('');
                            setCategoryFilter('');
                            setStatusFilter('');
                            setTagFilter('');
                          }}
                        />
                      </td>
                    </tr>
                  )}
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
        )}

        {/* Tab Content: Categories */}
        {activeTab === 'categories' && (
          <div>
            <div className="p-6">
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <div className="col-span-4">分类名称</div>
                  <div className="col-span-2 text-center">级别</div>
                  <div className="col-span-2 text-center">排序</div>
                  <div className="col-span-2 text-center">商品数量</div>
                  <div className="col-span-2 text-right">操作</div>
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {categories.length > 0 ? (
                    categories.map((category) => (
                      <div key={category.id}>
                        {/* Level 1 */}
                        <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors">
                          <div className="col-span-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-[20px] cursor-pointer">
                              {category.children.length > 0 ? 'expand_more' : 'chevron_right'}
                            </span>
                            <span className="font-medium text-slate-900 dark:text-white">{category.name}</span>
                          </div>
                          <div className="col-span-2 text-center text-sm text-slate-600 dark:text-slate-400">一级</div>
                          <div className="col-span-2 text-center">
                            <input 
                              type="number" 
                              value={category.sort} 
                              onChange={(e) => updateCategorySort(category.id, parseInt(e.target.value) || 0)}
                              className="w-16 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm outline-none focus:border-primary" 
                            />
                          </div>
                          <div className="col-span-2 text-center text-sm text-slate-600 dark:text-slate-400">{category.productCount}</div>
                          <div className="col-span-2 flex items-center justify-end gap-2">
                            <button onClick={() => openCategoryModal(null, category.id)} className="text-xs text-primary hover:underline font-medium">添加子分类</button>
                            <button onClick={() => openCategoryModal(category)} className="text-slate-400 hover:text-primary transition-colors" title="编辑"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                            <button onClick={() => deleteCategory(category.id)} className="text-slate-400 hover:text-red-500 transition-colors" title="删除"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                          </div>
                        </div>
                        
                        {/* Level 2 */}
                        {category.children.map((child) => (
                          <div key={child.id} className="grid grid-cols-12 gap-4 p-4 items-center bg-white dark:bg-slate-800/30 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors border-t border-slate-100 dark:border-slate-800">
                            <div className="col-span-4 flex items-center gap-2 pl-8">
                              <span className="w-4 border-b border-l border-slate-300 dark:border-slate-600 h-4 -mt-4 rounded-bl"></span>
                              <span className="text-sm text-slate-700 dark:text-slate-300">{child.name}</span>
                            </div>
                            <div className="col-span-2 text-center text-sm text-slate-500 dark:text-slate-500">二级</div>
                            <div className="col-span-2 text-center">
                              <input 
                                type="number" 
                                value={child.sort} 
                                onChange={(e) => updateCategorySort(child.id, parseInt(e.target.value) || 0, category.id)}
                                className="w-16 text-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm outline-none focus:border-primary" 
                              />
                            </div>
                            <div className="col-span-2 text-center text-sm text-slate-600 dark:text-slate-400">{child.productCount}</div>
                            <div className="col-span-2 flex items-center justify-end gap-2">
                              <button onClick={() => openCategoryModal(child, category.id)} className="text-slate-400 hover:text-primary transition-colors" title="编辑"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                              <button onClick={() => deleteCategory(child.id, category.id)} className="text-slate-400 hover:text-red-500 transition-colors" title="删除"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))
                  ) : (
                    <div className="p-0">
                      <Empty 
                        icon="category"
                        title="暂无分类"
                        description="还没有添加任何商品分类，请点击右上角添加"
                        actionText="添加一级分类"
                        onAction={() => openCategoryModal()}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tag Modal */}
      {showTagModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">设置营销标签</h3>
              <button onClick={() => setShowTagModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                为商品 <span className="font-medium text-slate-900 dark:text-white">{selectedProduct.name}</span> 设置展示标签：
              </p>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <input type="checkbox" checked={tempTags.includes('热卖')} onChange={() => toggleTag('热卖')} className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">热卖 (Hot Sale)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <input type="checkbox" checked={tempTags.includes('秒杀')} onChange={() => toggleTag('秒杀')} className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">秒杀 (Flash Sale)</span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <input type="checkbox" checked={tempTags.includes('团购')} onChange={() => toggleTag('团购')} className="w-4 h-4 text-primary rounded border-slate-300 focus:ring-primary" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">团购 (Group Buy)</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowTagModal(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={saveTags}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                保存设置
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {categoryForm.id ? '编辑分类' : (categoryForm.parentId ? '添加子分类' : '添加一级分类')}
              </h3>
              <button onClick={() => setShowCategoryModal(false)} className="text-slate-400 hover:text-slate-500">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  分类名称 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                  placeholder="请输入分类名称"
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  排序
                </label>
                <input 
                  type="number" 
                  value={categoryForm.sort}
                  onChange={(e) => setCategoryForm({ ...categoryForm, sort: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowCategoryModal(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={saveCategory}
                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl w-full max-w-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">确认删除</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {itemToDelete?.type === 'product' ? '确定要删除该商品吗？此操作不可恢复。' : '确定要删除该分类吗？此操作不可恢复。'}
              </p>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3">
              <button 
                onClick={() => {
                  setShowDeleteModal(false);
                  setItemToDelete(null);
                }}
                className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
              >
                取消
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
              >
                确认删除
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          <p>{toastMessage}</p>
        </div>
      )}
    </div>
  );
}
