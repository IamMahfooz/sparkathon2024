"use client"
interface ProductDetailsProps {
    product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
        <div className="my-4 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <p className="mb-2"><strong>Name:</strong> {product.buyerName}</p>
            <p className="mb-2"><strong>Buyer Address:</strong> {product.buyerAddress}</p>
            <p className="mb-2"><strong>Date of Delivery:</strong> {product.dateOfDelivery}</p>
            <p className="mb-2"><strong>Payment Mode:</strong> {product.paymentMode}</p>
            <p className="mb-2"><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );
};

export default ProductDetails;
