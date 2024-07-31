"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleRoleSelection = (role: string) => {
        router.push(`/${role}`);
    };

    if (!mounted) return null; // Prevents SSR issues

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }}>
            <Head>
                <title>Supply Chain Management System</title>
            </Head>
            <header className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-extrabold text-white mb-4">Dynamic Invoice System</h1>
                <p className="text-2xl text-white mb-8">Efficiently manage returns and reassign packages with ease.</p>
                <div className="flex space-x-6">
                    <button
                        onClick={() => handleRoleSelection('delivery')}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
                    >
                        Delivery Agent
                    </button>
                    <button
                        onClick={() => handleRoleSelection('warehouse')}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
                    >
                        Warehouse Manager
                    </button>
                </div>
            </header>
        </div>
    );
}
