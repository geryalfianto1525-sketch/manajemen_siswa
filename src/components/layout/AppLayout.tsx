"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import path from "path";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter();

    if(pathname === 'auth/register' || pathname === '/auth/login') {
        return children;
    }

    return (
        <div className="min-h-creen bg-background">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="lg:pl">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />
                    <main className="p-6">
                        {children}
                    </main>
            </div>
        </div>
    )
}