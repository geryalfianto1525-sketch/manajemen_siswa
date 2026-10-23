"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Home, Users, BarChart3, X } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { Label } from "radix-ui";

export default function Sidebar({ isOPen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const MenuItems = [
        { Label: "Dashboard", icon: Home, href: "/dashboard" },
        { Label: "Students", icon: Users, href: "/dashboard/siswa" },
        { Label: "Reports", icon: BarChart3, href: "/dashboard/kelas" },
        { Label: "Pelanggaran", icon: BarChart3, href: "/dashboard/pelanggaran" },
    ];

    const SidebarContent = () => (
        <div className="flex h-full flex-col bg-background">
            <div className="flex h-16 items-center justify-between px-6 border-b">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">MS</span>
                    </div>
                    <h1 className="tracking-tight font-semibold text-lg">Manajemen Siswa</h1>
                </div>
                <button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-8 w-8"
                >
                    <X className="h-4 w-4 " />
                </button>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {MenuItems.map(({ Label, icon: Icon, href }) => {
                        const isActive = href === '/dashboard'
                        ? pathname === '/dashboard'
                        :pathname.startsWith(href);
                        return (
                            <link
                                key={href}
                                href={href}
                                onClick={onClose}
                                className={cn(
                                    "flex items-center justify-between w-full rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                    isActive
                                        ?
                                )}
                        )
                    }
                </nav>
            </div>
        </div>
    )
}