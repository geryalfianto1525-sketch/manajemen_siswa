'use client'

import {useRouter} from "next/navigation"
import {useState} from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, Key } from "lucide-react";
import {text} from "stream/consumers";

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

        if (!formData.password) {
            alert("Passwords is required.");
            return;
        }

        // Submit the form data 
        console.log("Form submitted:", formData);
        router.push("/dashboard");
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl" />
                    <div className="relative z-10" >
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-500/5 to-blue-600/100 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <User className="w-15 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                            <p className="text-gray-600">Sign in to your account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}