package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
    ID             primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
    QrCode         string             `bson:"qrCode" json:"qrCode"`
    BuyerName      string             `bson:"buyerName" json:"buyerName"`
    Description    string             `bson:"description" json:"description"`
    BuyerAddress   string             `bson:"buyerAddress" json:"buyerAddress"`
    DateOfDelivery string             `bson:"dateOfDelivery" json:"dateOfDelivery"`
    PaymentMode    string             `bson:"paymentMode" json:"paymentMode"`
    Price          float64            `bson:"price" json:"price"`
    Status         string             `bson:"status" json:"status"`
    CurrentLocation string            `bson:"currentLocation" json:"currentLocation"` // Add this field
}
