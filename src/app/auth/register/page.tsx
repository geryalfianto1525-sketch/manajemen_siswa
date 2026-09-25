'use client'

import {useRouter} from 'next/navigation'
import {useState} from 'react'
import { Eye, EyeOff, User, Mail, Lock, ArrowLeft, Check, Key } from 'lucide-react'

export default function HomePage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);;
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert('You must accept the terms and conditions to register.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        console.log('Form submitted:', formData);
        router.push('/auth/login');
    };

    const getPasswordStrength = (password: string) => {
        if (password.length >=12) return {text: 'Strong', color: 'text-green-600'};
