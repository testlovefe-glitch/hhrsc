import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AdminEditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock fetching product data
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    // Simulate API call
    setProduct({
      id: id,
      name: '飞天茅台 53度 500ml 酱香型白酒',
      category: 'baijiu',
      brand: '茅台',
      price: 2999.00,
      originalPrice: 3299.00,
      groupPrice: 2899.00,
      flashPrice: 2799.00,
      stock: 156,
      status: 'active'
    });
  }, [id]);

  if (!product) return <div className="p-8 text-center text-slate-500">加载中...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate('/admin/products')}
          className="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">编辑商品</h1>
      </div>

      {/* Form Content */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        
        {/* Basic Info Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">基本信息</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                商品名称 <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                defaultValue={product.name}
                placeholder="请输入商品名称，建议包含品牌、品类、规格等信息"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  商品分类 <span className="text-red-500">*</span>
                </label>
                <select defaultValue={product.category} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white appearance-none">
                  <option value="">请选择分类</option>
                  <option value="baijiu">白酒</option>
                  <option value="redwine">红酒</option>
                  <option value="yangjiu">洋酒</option>
                  <option value="health">养生酒</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  商品品牌
                </label>
                <input 
                  type="text" 
                  defaultValue={product.brand}
                  placeholder="例如：茅台、五粮液"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Price & Stock Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">价格与库存</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  销售价 (元) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  min="0"
                  step="0.01"
                  defaultValue={product.price}
                  placeholder="0.00"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  原价 (元)
                </label>
                <input 
                  type="number" 
                  min="0"
                  step="0.01"
                  defaultValue={product.originalPrice}
                  placeholder="0.00"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  团购价 (元)
                </label>
                <input 
                  type="number" 
                  min="0"
                  step="0.01"
                  defaultValue={product.groupPrice}
                  placeholder="选填，参与团购时的价格"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  秒杀价 (元)
                </label>
                <input 
                  type="number" 
                  min="0"
                  step="0.01"
                  defaultValue={product.flashPrice}
                  placeholder="选填，参与秒杀时的价格"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  库存数量 <span className="text-red-500">*</span>
                </label>
                <input 
                  type="number" 
                  min="0"
                  defaultValue={product.stock}
                  placeholder="0"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Media Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">商品图片</h2>
            <p className="text-xs text-slate-500 mt-1">建议尺寸 800x800 像素，支持 jpg、png 格式，最多上传 5 张</p>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 relative group">
                <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=200&auto=format&fit=crop" alt="product" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button type="button" className="text-white hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
                </div>
              </div>
              {/* Upload Button Placeholder */}
              <button 
                type="button"
                className="w-24 h-24 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl mb-1">add_photo_alternate</span>
                <span className="text-xs">上传图片</span>
              </button>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">商品详情</h2>
          </div>
          <div className="p-6">
            {/* Rich Text Editor Placeholder */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-2 flex gap-2">
                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-[18px]">format_bold</span></button>
                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-[18px]">format_italic</span></button>
                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
                <button type="button" className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded hover:bg-slate-200 dark:hover:bg-slate-800"><span className="material-symbols-outlined text-[18px]">image</span></button>
              </div>
              <textarea 
                rows={8}
                defaultValue="优质纯粮酿造，酱香突出，幽雅细腻，酒体醇厚，回味悠长，空杯留香持久。"
                placeholder="请输入商品详细描述..."
                className="w-full p-4 bg-white dark:bg-slate-800 text-sm focus:outline-none text-slate-900 dark:text-white resize-y"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">上架设置</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" value="active" defaultChecked={product.status === 'active'} className="text-primary focus:ring-primary" />
                <span className="text-sm text-slate-700 dark:text-slate-300">立即上架</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" value="inactive" defaultChecked={product.status === 'inactive'} className="text-primary focus:ring-primary" />
                <span className="text-sm text-slate-700 dark:text-slate-300">暂不上架 (放入仓库)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button 
            type="button"
            onClick={() => navigate('/admin/products')}
            className="px-6 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            取消
          </button>
          <button 
            type="submit"
            onClick={() => {
              // Mock save action
              navigate('/admin/products');
            }}
            className="px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            保存修改
          </button>
        </div>
      </form>
    </div>
  );
}
