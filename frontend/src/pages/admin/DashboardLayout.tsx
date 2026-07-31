import React, { useState, useEffect } from 'react';
import { Outlet, Navigate, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LogOut,
  LayoutDashboard,
  Mail,
  Building2,
  Image,
  FileText,
  FileEdit,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import axios from 'axios';

interface AdminUser {
  name?: string;
  email?: string;
  nom?: string;
}

interface NavBadge {
  path: string;
  count: number;
}

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
  { label: 'Demandes', icon: Mail, path: '/admin/demandes' },
  { label: 'Filiales', icon: Building2, path: '/admin/filiales' },
  { label: 'Galerie', icon: Image, path: '/admin/galerie' },
  { label: 'Catalogues', icon: FileText, path: '/admin/catalogues' },
  { label: 'Contenus', icon: FileEdit, path: '/admin/pages' },
  { label: 'Paramètres', icon: Settings, path: '/admin/settings' },
];

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/demandes': 'Demandes',
  '/admin/filiales': 'Filiales',
  '/admin/galerie': 'Galerie',
  '/admin/catalogues': 'Catalogues',
  '/admin/pages': 'Contenus',
  '/admin/settings': 'Paramètres',
};

export default function DashboardLayout() {
  const token = localStorage.getItem('admin_token');
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser>({});
  const [badges, setBadges] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('admin_user');
      if (stored) {
        setAdminUser(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    const fetchBadgeCounts = async () => {
      try {
        const response = await axios.get('/api/v1/admin/demandes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.success) {
          const demandes: Array<{ statut: string }> = response.data.data || [];
          const nouveauCount = demandes.filter((d) => d.statut === 'nouveau').length;
          setBadges({ '/admin/demandes': nouveauCount });
        }
      } catch {
        // ignore
      }
    };
    fetchBadgeCounts();
    const interval = setInterval(fetchBadgeCounts, 15000);
    return () => clearInterval(interval);
  }, [token]);

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  const adminName = adminUser.name || adminUser.nom || adminUser.email || 'Admin';
  const currentPageTitle = pageTitles[location.pathname] || 'Dashboard';

  return (
    <div className="min-h-screen bg-[#0f172a] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1e293b] flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-700">
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-serif text-white tracking-widest uppercase">
              <span className="text-[#cda434]">M</span>ACOF
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            const badgeCount = badges[item.path] || 0;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#cda434]/10 text-[#cda434]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                }`}
              >
                <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-[#cda434]' : ''}`} />
                <span className="flex-1">{item.label}</span>
                {badgeCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                    {badgeCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 w-full text-left text-sm font-medium rounded-lg text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="h-16 bg-[#1e293b] border-b border-slate-700 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold text-slate-200">{currentPageTitle}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#cda434]/20 flex items-center justify-center text-[#cda434] text-sm font-bold">
              {adminName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-slate-400 hidden sm:inline">{adminName}</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
