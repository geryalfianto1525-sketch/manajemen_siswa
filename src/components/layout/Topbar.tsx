'use client';

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "radix-ui/dropdown-menu";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
    const pathname = usePathname();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const MenuMap: Record<string, string> = {}

    const title = MenuMap[pathname] || "SMK Telekomunikasi Tunas Harapan";
    
    const handleLogout = () => {
        setLoading(true);
        router.push("/auth/login");
    }
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-15 items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                    <Button 
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={onMenuClick}
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                    <div className="flex items-center space-x-2">
                        <h2 className="text-x1 font-semibold tracking-tight">(title)</h2>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar>
                                    <AvatarImage src="/avatar.png" alt="User avatar" />
                                    <AvatarFallback>BH</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 " align="end" forceMount> 
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Jery Alfianto
                                    </p>
                                    <p className="text-sm leading-none text-muted-foreground">
                                        geryalfianto152516@gmail.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-red-600 focus:text-red-600 focus:bg-red-50"
                                onClick={handleLogout}
                            >
                                <Logout className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}