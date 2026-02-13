import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Target, Zap, Users, Calendar } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Navigation */}
            <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Life OS
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <Button variant="ghost">Sign in</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                        Your Life,{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Intelligently Organized
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Life OS is your intelligent task management system that helps you focus on what matters most.
                        Let AI decide your next action while you get things done.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Free Today
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <div className="mt-16 relative">
                    <div className="bg-white rounded-2xl shadow-2xl border p-8 max-w-4xl mx-auto">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Dashboard Preview</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to stay productive
                    </h2>
                    <p className="text-xl text-gray-600">
                        Powerful features designed to help you accomplish more
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Feature 1 */}
                    <Card className="border-2 hover:border-blue-500 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                            <CardTitle>Next Action</CardTitle>
                            <CardDescription>
                                AI-powered recommendations tell you exactly what to work on next
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 2 */}
                    <Card className="border-2 hover:border-purple-500 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            <CardTitle>Smart Prioritization</CardTitle>
                            <CardDescription>
                                Automatically sorts tasks by urgency and importance
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="border-2 hover:border-pink-500 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-pink-600" />
                            </div>
                            <CardTitle>Team Collaboration</CardTitle>
                            <CardDescription>
                                Work together with groups and share tasks seamlessly
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Feature 4 */}
                    <Card className="border-2 hover:border-green-500 transition-colors">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Calendar className="w-6 h-6 text-green-600" />
                            </div>
                            <CardTitle>Flexible Organization</CardTitle>
                            <CardDescription>
                                Create custom lists and organize tasks your way
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Focus on what matters
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Stop wasting time deciding what to do next. Life OS uses intelligent algorithms
                                to surface your most important tasks at the right time.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'AI-powered task recommendations',
                                    'Customizable priority settings',
                                    'Deadline tracking and reminders',
                                    'Beautiful, intuitive interface',
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                            <p className="text-gray-500 text-lg">Feature Illustration</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
                    <CardContent className="p-12 text-center">
                        <h2 className="text-4xl font-bold mb-4">Ready to get organized?</h2>
                        <p className="text-xl mb-8 text-blue-100">
                            Join thousands of users who have transformed their productivity with Life OS
                        </p>
                        <Link href="/register">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                                Start Free Today
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded" />
                            <span className="font-semibold text-gray-900">Life OS</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            © 2026 Life OS. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
