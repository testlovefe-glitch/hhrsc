import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Address {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
  bgImage: string;
}

export default function Addresses() {
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      name: '张三',
      phone: '+86 138 0013 8000',
      address: '广东省深圳市南山区粤海街道 腾讯滨海大厦',
      isDefault: true,
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKdRt0ACELRo62k2aOqAoHVVe5zX7VBkbw9_lMbFfa_hoxavd5BDv-ZCFF3d8WFWg7p1sREqXvBpEkStsNFgAtc4l-w_sNpWrk5X1c263sAM-Uh-k_nvfoRJnU00mUjoXASMGRUshvYGuL21ExFRfqNeFOCNvQzQdW0XHVAuSY-Nwu8T3IEGls2Kaf4ShPO34GLz1ipQwjGLvz9XyajL_q6uZdJm3icSJMimAbYGMjMOt3E6JCqnMcdahkBtGFz1OYiM1vV1HIpv0'
    },
    {
      id: '2',
      name: '李四',
      phone: '+86 139 1234 5678',
      address: '北京市朝阳区建国门外大街1号 国贸大厦',
      isDefault: false,
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYqbjC3WxzrZA8F9AeFLOklO_kM4ri7SHmXczIVgY6GPsFi2zxt9biA6CNl4A93yrYc80b3v6wfAzU8wknbIB62xwQ3SErSjGtWaOGv2CgubLboo7Gnad3_gzY-T1Cno_s35l1qiRiAffUs2zekv_luf4AqjbIhOmSzO91CQzeCSvQH6Tzkumv4zBx5fxQApG8xcBChsW2DK00YHCwRJOS87G2FwNcMo1F7d30MGWcuhL84QsAhTtcD7ov7e53fg-1y98x6SwURwM'
    },
    {
      id: '3',
      name: '王五',
      phone: '+86 137 6677 8899',
      address: '上海市浦东新区世纪大道1号 东方明珠塔',
      isDefault: false,
      bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjoYfrB3wI0NOmuQH_ZiWttD3choucRvLNbIbQnVFM7BFZcrNVW5BURT2jErJ1oRWaD63oO4tKXFqFF_9JocKXBgvTRP3XgiddRQeC4asQ0V-OUqhrIoCjljUKSIBnqL50dOdiv_19t7pB5PdJpsLYwBBoJgbDOpkLUxN0tjfZ_pIf6EExqMkXg0vCoLELMClR-U5m4v7kNL76ixMxgYilpz2JZHsgiTMbTdbooxsUrxmMFkC5nKkHO57v7yp9BQrxUYWJAoNBIv4'
    }
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  const handleEditClick = (address: Address) => {
    setEditingAddress({ ...address });
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? editingAddress : addr
      ));
      setIsEditModalOpen(false);
      setEditingAddress(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (editingAddress) {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;
      setEditingAddress({
        ...editingAddress,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  return (
    <div className="relative flex h-screen max-w-md mx-auto flex-col bg-white dark:bg-slate-900 overflow-hidden shadow-xl">
      {/* Top App Bar */}
      <div className="flex items-center bg-white dark:bg-slate-900 p-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight flex-1 ml-2">我的收货地址</h2>
      </div>

      {/* Address List Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {addresses.map((address) => (
          <div key={address.id} className={`bg-white dark:bg-slate-800 border ${address.isDefault ? 'border-primary/20' : 'border-slate-100 dark:border-slate-700'} rounded-lg p-5 shadow-sm relative`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <span className="text-slate-900 dark:text-slate-100 font-bold text-base">{address.name}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">{address.phone}</span>
              </div>
              {address.isDefault && (
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm">默认</span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {address.address}
            </p>
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
              <div className="flex gap-6">
                <button onClick={() => handleEditClick(address)} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-lg">edit</span>
                  编辑
                </button>
                <button className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-red-500 transition-colors">
                  <span className="material-symbols-outlined text-lg">delete</span>
                  删除
                </button>
              </div>
              <div className="w-16 h-10 bg-slate-100 dark:bg-slate-700 rounded overflow-hidden" style={{ backgroundImage: `url("${address.bgImage}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]">
          <span className="material-symbols-outlined">add</span>
          添加新地址
        </button>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && editingAddress && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setIsEditModalOpen(false)}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">编辑地址</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">收货人</label>
                <input 
                  type="text" 
                  name="name"
                  value={editingAddress.name} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">手机号码</label>
                <input 
                  type="text" 
                  name="phone"
                  value={editingAddress.phone} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">详细地址</label>
                <textarea 
                  name="address"
                  value={editingAddress.address} 
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">设为默认地址</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="isDefault"
                    checked={editingAddress.isDefault} 
                    onChange={handleInputChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
              <button onClick={() => setIsEditModalOpen(false)} className="flex-1 py-2.5 rounded-lg font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                取消
              </button>
              <button onClick={handleSave} className="flex-1 py-2.5 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
