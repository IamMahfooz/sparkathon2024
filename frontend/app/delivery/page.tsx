"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QRScanner from '../components/QRScanner';
import ProductDetails from '../components/ProductDetails';
import Head from 'next/head';

export default function DeliveryAgent() {
    const [qrCode, setQrCode] = useState<string>('');
    const [product, setProduct] = useState<any>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const router = useRouter();

    const handleScan = (code: string) => {
        setQrCode(code);
        setShowDetails(false); // Hide details when a new QR code is scanned
        fetchProductDetails(code);
    };

    const fetchProductDetails = async (code: string) => {
        try {
            const response = await fetch(`http://localhost:8000/api/product?qrCode=${code}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const handleShowDetailsClick = () => {
        if (product) {
            setShowDetails(true);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }}>
            <Head>
                <title>Delivery Agent - Supply Chain Management System</title>
            </Head>
            <header
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
                <button
                    onClick={() => router.push('/')}
                    className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800"
                >
                    Home Page
                </button>
                <h1 className="text-5xl font-extrabold text-white mb-4">Delivery Agent</h1>
                <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center w-full max-w-xl">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Scan QR Code</h2>
                    <QRScanner onScan={handleScan}/>
                    {qrCode && (
                        <button
                            onClick={handleShowDetailsClick}
                            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 w-full"
                        >
                            Get Product Details
                        </button>
                    )}
                    {showDetails && product && <ProductDetails product={product}/>}
                </div>
            </header>
        </div>
    );
}
