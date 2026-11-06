"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <div className="flex-1 flex flex-col w-full lg:pl-64 transition-all duration-300">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />
                
                <main className="p-6 flex-1 overflow-y-auto relative z-0">
                   {children}
                </main>
            </div>
        </div>
    )
}