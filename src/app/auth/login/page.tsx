'use client'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, LogIn } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submitted:", formData);
        router.push("/dashboard");
    };

    const isFormValid = formData.email && formData.password;

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/50 flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* Pendaran background */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white/50 p-8 sm:p-10 relative overflow-hidden">
                    
                    <div className="relative z-10">
                        
                        {/* 1. IKON BESAR: Diberi gradasi, sedikit transparan, dan efek glow */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400/90 to-blue-600/90 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/40 border border-white/20">
                                <LogIn className="w-8 h-8 text-white drop-shadow-md" />
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Welcome Back</h1>
                            <p className="text-slate-500">Please enter your details to sign in.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            
                            {/* Input Email */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your email address"
                                        // 2. INPUT: Diberi gradasi sangat tipis dari biru ke putih, dan border biru transparan
                                        className="w-full pl-11 pr-4 py-3 border border-blue-100 rounded-xl bg-gradient-to-r from-blue-50/50 to-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm shadow-blue-500/5"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-semibold text-slate-700" htmlFor="password">Password</label>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Your Password"
                                        // 2. INPUT: Sama seperti email, diberi gradasi tipis
                                        className="w-full pl-11 pr-12 py-3 border border-blue-100 rounded-xl bg-gradient-to-r from-blue-50/50 to-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-slate-900 placeholder:text-slate-400 shadow-sm shadow-blue-500/5"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors p-1"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 mt-2 ${
                                    isFormValid
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30 hover:-translate-y-0.5'
                                        : 'bg-slate-300 cursor-not-allowed text-slate-500'
                                }`}
                            >
                                Sign In
                            </button>

                        </form>

                        {/* Footer Link ke Register */}
                        <div className="mt-8 text-center pt-6 border-t border-slate-200/60">
                            <p className="text-sm text-slate-600">
                                Don't have an account?{' '}
                                <a href="/auth/register" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                    Create an account
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}