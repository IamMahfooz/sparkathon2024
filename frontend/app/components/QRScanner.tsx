"use client"
import { useState } from 'react';
import Webcam from 'react-webcam';

interface QRScannerProps {
    onScan: (code: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleCapture = () => {
        // Add QR code capture logic here
        const scannedCode = "exampleQRCode"; // Replace this with actual scanned code
        onScan(scannedCode);
    };

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setFile(file);
            // Add file processing logic here
            const scannedCode = "exampleQRCodeFromFile"; // Replace this with actual scanned code
            onScan(scannedCode);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <Webcam className="mb-4" />
            <button onClick={handleCapture} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
                Capture QR Code
            </button>
            <input type="file" onChange={handleUpload} className="mb-4" />
        </div>
    );
};

export default QRScanner;
