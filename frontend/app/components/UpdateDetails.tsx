"use client"
import { useState } from 'react';

interface UpdateInvoiceProps {
    qrCode: string;
}

const UpdateInvoice: React.FC<UpdateInvoiceProps> = ({ qrCode }) => {
    const [newBuyer, setNewBuyer] = useState<string>('');

    const handleUpdateClick = async () => {
        try {
            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ qrCode, newBuyer }),
            });
            const data = await response.json();
            console.log('Invoice updated:', data);
        } catch (error) {
            console.error('Error updating invoice:', error);
        }
    };

    return (
        <div className="my-4 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Product Reassigned successfully !</h2>
        </div>
    );
};

export default UpdateInvoice;
