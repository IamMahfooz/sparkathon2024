"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QRScanner from '../components/QRScanner';
import ProductDetails from '../components/ProductDetails';
import UpdateInvoice from '../components/UpdateDetails';
import Head from 'next/head';

export default function WarehouseManager() {
    const [qrCode, setQrCode] = useState<string>('');
    const [product, setProduct] = useState<any>(null);
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [showUpdate, setShowUpdate] = useState<boolean>(false);
    const router = useRouter();

    const handleScan = (code: string) => {
        setQrCode(code);
        fetchProductDetails(code).then((response) => {console.log(response)});
        setShowDetails(false); // Hide product details when a new scan is performed
        setShowUpdate(false); // Hide update form when a new scan is performed
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

    const handleUpdateClick = () => {
        setShowUpdate(true);
        setShowDetails(false);
    };

    const handleDetailsClick = () => {
        if (product) {
            setShowDetails(true);
            setShowUpdate(false);
        }
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
             style={{backgroundImage: `url('/background.jpg')`}}>
            <Head>
                <title>Warehouse Manager - Supply Chain Management System</title>
            </Head>
            <button
                onClick={() => router.push('/')}
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800"
            >
                Home Page
            </button>
            <header
                className="flex flex-col items-center justify-center text-center w-full py-8 px-4"
                style={{ background: 'rgba(0, 0, 0, 0.5)' }}
            >
                <h1 className="text-5xl font-extrabold text-white mb-4">Warehouse Manager</h1>
                <div className="p-8 bg-white shadow-lg rounded-lg flex flex-col items-center w-full max-w-xl">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Scan QR Code</h2>
                    <QRScanner onScan={handleScan}/>
                    {qrCode && (
                        <div className="mt-8 flex flex-col items-center space-y-4 w-full">
                            <button
                                onClick={handleDetailsClick}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 w-full"
                            >
                                Get Product Details
                            </button>
                            <button
                                onClick={handleUpdateClick}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 w-full"
                            >
                                Update Product Details
                            </button>
                        </div>
                    )}
                    <div className="mt-8 w-full max-w-xl">
                        {showDetails && product && <ProductDetails product={product}/>}
                        {showUpdate && <UpdateInvoice qrCode={qrCode}/>}
                    </div>
                </div>
            </header>
        </div>
    );
}
