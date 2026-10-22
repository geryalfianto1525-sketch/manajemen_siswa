'use client'

import {useRouter} from "next/navigation"
import {useState} from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, Key } from "lucide-react";

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
        if (password.length >=12) return {text: "Strong", color: "text-green-600"};
        if (password.length >= 8) return {text: "Medium", color: "text-yellow-600"};
        if (password.length >= 6) return {text: "Weak", color: "text-red-600"};
        return {text: "", color: ""};
    };

    const passwordStrength = getPasswordStrength(formData.password)
    const isFormValid = acceptedTerms && formData.password && (formData.password === formData.confirmPassword)
    
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
                    <div className="relative z-10" >
                        <a href="/auth/login" className="flex items-center gap-2 text-gray-600 hover:text-blue-800 mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </a>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                            <p className="text-gray-600">Join us today! It takes only a few steps.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your full name"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                         </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your email address"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                         </div>

                         <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"} 
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Your Password"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:border-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                                </button>
                            </div>
                            {formData.password && (
                                <div className={`text-sm font-medium mt-1 ${passwordStrength.color}`}>
                                    {passwordStrength.text}
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm password"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-none focus:border-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={acceptedTerms}
                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I accept the terms and conditions
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
                                isFormValid 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg' 
                                : 'bg-gray-300 cursor-not-allowed'
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