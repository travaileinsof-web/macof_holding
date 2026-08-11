import axios from 'axios';

export const api = axios.create();

// Request interceptor: attach JWT token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor: handle 401 (expired/invalid token)
// IMPORTANT: We do NOT remove the token immediately. Removing it mid-render causes
// DashboardLayout (which reads the token synchronously) to redirect, making the
// whole page "disappear" whenever a single 401 occurs — even transient ones during
// server restarts. Instead we redirect softly and let the login page clear state.
let hasRedirectedToLogin = false;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401 && !hasRedirectedToLogin) {
      console.warn('Intercepted 401, but redirection is disabled for debugging.');
      /*
      const pathname = window.location.pathname;
      // Only redirect if we are inside the admin area and not already on the login page.
      if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
        hasRedirectedToLogin = true;
        // Clear credentials only right before navigating, after the current render cycle.
        setTimeout(() => {
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_user');
          window.location.href = '/admin/login';
        }, 50);
      }
      */
    }
    return Promise.reject(error);
  }
);
