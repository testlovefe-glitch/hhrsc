import { Link, useLocation, Outlet } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'home', label: '首页' },
    { path: '/category', icon: 'category', label: '商品分类' },
    { path: '/cart', icon: 'shopping_cart', label: '购物车' },
    { path: '/partner', icon: 'handshake', label: '合伙人中心' },
    { path: '/profile', icon: 'person', label: '我的' },
  ];

  // Hide bottom nav on certain pages
  const hideNavPaths = ['/order/', '/settings', '/team', '/member/', '/checkout', '/payment', '/addresses', '/login', '/register', '/withdraw', '/coupons', '/my-coupons', '/group-buy', '/partner-package', '/category-list', '/faq/', '/partner/new-today', '/leaderboard', '/my-cellar'];
  const showNav = !hideNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <div className="relative flex min-h-screen flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display shadow-xl">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>

      {showNav && (
        <nav className="shrink-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pb-safe z-50">
          <div className="flex h-[60px]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-1 flex-col items-center justify-center gap-1 transition-colors",
                    isActive ? "text-primary" : "text-slate-400 dark:text-slate-500 hover:text-primary"
                  )}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {item.icon}
                  </span>
                  <span className={cn("text-[10px]", isActive ? "font-bold" : "font-medium")}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
