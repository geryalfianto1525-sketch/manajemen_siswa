"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    if (pathname === '/auth/register' || pathname === '/auth/login') {
        return children;
    }

    return (
        <div className="min-h-screen bg-background flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col w-full lg:pl-64 transition-all duration-300">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />
                <main className="p-6 flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}