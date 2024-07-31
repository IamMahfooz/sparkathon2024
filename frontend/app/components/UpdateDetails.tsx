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
            <h2 className="text-2xl font-semibold mb-4">Update Invoice</h2>
            <input
                type="text"
                value={newBuyer}
                onChange={(e) => setNewBuyer(e.target.value)}
                placeholder="Enter new buyer ID"
                className="border p-2 rounded-lg w-full mb-4"
            />
            <button
                onClick={handleUpdateClick}
                className="p-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
            >
                Update
            </button>
        </div>
    );
};

export default UpdateInvoice;
