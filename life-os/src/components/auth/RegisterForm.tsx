'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export function RegisterForm() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getPasswordStrength = (pwd: string): { strength: number; label: string; color: string } => {
        if (pwd.length === 0) return { strength: 0, label: '', color: '' };
        if (pwd.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
        if (pwd.length < 10) return { strength: 2, label: 'Medium', color: 'bg-yellow-500' };
        if (pwd.length >= 10 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) {
            return { strength: 3, label: 'Strong', color: 'bg-green-500' };
        }
        return { strength: 2, label: 'Medium', color: 'bg-yellow-500' };
    };

    const passwordStrength = getPasswordStrength(password);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Implement actual registration logic
            console.log('Register attempt:', { name, email, password });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect to login after successful registration
            router.push('/login');
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    autoComplete="name"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    autoComplete="email"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    autoComplete="new-password"
                />

                {/* Password Strength Indicator */}
                {password && (
                    <div className="space-y-1">
                        <div className="flex gap-1">
                            {[1, 2, 3].map((level) => (
                                <div
                                    key={level}
                                    className={`h-1 flex-1 rounded-full transition-colors ${level <= passwordStrength.strength ? passwordStrength.color : 'bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className={`text-xs ${passwordStrength.strength === 3 ? 'text-green-600' : passwordStrength.strength === 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {passwordStrength.label}
                        </p>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                    autoComplete="new-password"
                />
                {confirmPassword && password === confirmPassword && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        Passwords match
                    </p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Create account'}
            </Button>

            <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                    Sign in
                </Link>
            </p>
        </form>
    );
}
