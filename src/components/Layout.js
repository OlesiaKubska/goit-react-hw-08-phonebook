import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppNav } from './Navigations/AppNav';
import { Suspense } from 'react';

export const Layout = () => {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <AppNav />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};
