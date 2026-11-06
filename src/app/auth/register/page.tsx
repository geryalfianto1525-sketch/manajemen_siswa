'use client'

import { useRouter } from "next/navigation"
import { useState } from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert("You must accept the terms and conditions to register.");
            return;
        }

        if (!formData.password || formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Form submitted:", formData);
        router.push("/auth/login");
    };

    const getPasswordStrength = (password: string) => {
        if (password.length >= 12) return { text: "Strong", color: "text-green-600" };
        if (password.length >= 8) return { text: "Medium", color: "text-yellow-600" };
        if (password.length >= 6) return { text: "Weak", color: "text-red-600" };
        return { text: "", color: "" };
    };

    const passwordStrength = getPasswordStrength(formData.password)
    const isFormValid = acceptedTerms && formData.password && (formData.password === formData.confirmPassword)

    return (
        // 1. Background utama: Gradasi halus yang selaras dengan web
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-blue-100/50 flex items-center justify-center p-4 relative overflow-hidden">
            
            {/* Efek Pendaran (Glow) di background agar lebih modern */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                {/* 2. Card: Dibuat lebih transparan (glass) dan bayangan biru tipis */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/10 border border-white/50 p-8 sm:p-10 relative overflow-hidden">
                    
                    <div className="relative z-10">
                        {/* Link Back to Login */}
                        <a href="/auth/login" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </a>

                        {/* Header Icon & Teks */}
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Create Account</h1>
                            <p className="text-slate-500">Join us today! It takes only a few steps.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            
                            {/* Input Name */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
                                <div className="relative group">
                                    <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your full name"
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

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
                                        className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="password">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Your Password"
                                        className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
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
                                {formData.password && (
                                    <div className={`text-xs font-bold mt-1.5 ${passwordStrength.color}`}>
                                        {passwordStrength.text}
                                    </div>
                                )}
                            </div>

                            {/* Input Confirm Password */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-semibold text-slate-700" htmlFor="confirmPassword">Confirm Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"} // Tambahan logika showConfirmPassword dari state kamu
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm password"
                                        className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors p-1"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="flex items-center gap-3 pt-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500/50 cursor-pointer"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-slate-600 cursor-pointer select-none">
                                    I accept the <span className="text-blue-600 font-medium">terms and conditions</span>
                                </label>
                            </div>

                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 mt-2 ${
                                    isFormValid
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5'
                                        : 'bg-slate-300 cursor-not-allowed text-slate-500'
                                }`}
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}