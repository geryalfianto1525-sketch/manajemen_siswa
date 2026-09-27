'use client'

import {useRouter} from "next/navigation"
import {useState} from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, Key } from "lucide-react";
import {text} from "stream/consumers";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert('You must accept the terms and conditions to register.');
            return;
        }

        if (!formData.password || formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        console.log('Form submitted:', formData);
        router.push('/auth/login');
    };

    const getPasswordStrength = (password: string) => {
        if (password.length >=12) return {text: 'Strong', color: 'text-green-600'};
        if (password.length >= 8) return {text: 'Medium', color: 'text-yellow-600'};
        if (password.length >= 6) return {text: 'Weak', color: 'text-red-600'};
        return {text: "", color: ""};
    };

    const passwordStrength = getPasswordStrength(formData.password)
    const isFormValid = acceptedTerms && formData.password && (formData.password === formData.confirmPassword)
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
                    <div className="relative z-10" >
                        <a href="/auth/login" className="flex items-center gap-2 text-grey-600 hover:text-blue-800 mb-6">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </a>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-500/5 to-blue-600/100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <User className="w-15 h-8 text-white" />
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
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl rounded-x1 bg-white/70 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                         </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}