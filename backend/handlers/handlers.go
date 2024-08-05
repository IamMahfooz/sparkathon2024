package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/models"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/utils"
    "go.mongodb.org/mongo-driver/bson"
    // "go.mongodb.org/mongo-driver/bson/primitive"
    // "context"
    "fmt"
)

func GetProductDetails(w http.ResponseWriter, r *http.Request) {
    qrCode := r.URL.Query().Get("qrCode")
    if qrCode == "" {
        http.Error(w, "QR code is required", http.StatusBadRequest)
        return
    }

    collection := utils.DB.Collection("products")
    filter := bson.M{"qrCode": qrCode}

    var product models.Product
    err := collection.FindOne(r.Context(), filter).Decode(&product)
    if err != nil {
        // Define a default product
        defaultProduct := models.Product{
            BuyerName: "Mahfooz Alam",
            Description: "Zebronics max fury gaming console",
            BuyerAddress: "Dhanbad , Jharkhand - 831005",
            DateOfDelivery: "15th Aug 2024",
            PaymentMode: "Cash on Delivery",
            Price: 999,
            Status: "Active",
            CurrentLocation: "Dhanbad",
        }

        // Return the default product
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(defaultProduct)
        return
    }

    // Return the found product
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(product)
}

func UpdateProductDetails(w http.ResponseWriter, r *http.Request) {
    var product models.Product
    err := json.NewDecoder(r.Body).Decode(&product)
    if err != nil {
        http.Error(w, "Invalid input", http.StatusBadRequest)
        return
    }

    collection := utils.DB.Collection("products")
    filter := bson.M{"qrCode": product.QrCode}
    update := bson.M{
        "$set": bson.M{
            "name":          product.BuyerName,
            "description":   product.Description,
            "buyerAddress":  product.BuyerAddress,
            "dateOfDelivery": product.DateOfDelivery,
            "paymentMode":   product.PaymentMode,
            "price":         product.Price,
            "status":        product.Status,
            "currentLocation": product.CurrentLocation,
        },
    }

    _, err = collection.UpdateOne(r.Context(), filter, update)
    if err != nil {
        http.Error(w, "Failed to update product", http.StatusInternalServerError)
        return
    }

    json.NewEncoder(w).Encode(map[string]string{"message": "Product updated successfully"})
    // After updating, check the product status
    checkProductStatus(w, r)
}

func checkProductStatus(w http.ResponseWriter, r *http.Request) {
    var product models.Product
    err := json.NewDecoder(r.Body).Decode(&product)
    if err != nil {
        http.Error(w, "Invalid input", http.StatusBadRequest)
        return
    }

    collection := utils.DB.Collection("products")
    filter := bson.M{"qrCode": product.QrCode}

    err = collection.FindOne(r.Context(), filter).Decode(&product)
    if err != nil {
        http.Error(w, "Product not found", http.StatusNotFound)
        return
    }

    if product.Status == "no current order" {
        shipToNearestWarehouse(product, w, r)
    } else {
        assignNextDestination(w, r)
    }
}

func shipToNearestWarehouse(product models.Product, w http.ResponseWriter, r *http.Request) {
    // Logic to ship the product to the nearest warehouse
    fmt.Fprintf(w, "Product %s is being shipped to the nearest warehouse", product.QrCode)
}

func assignNextDestination(w http.ResponseWriter, r *http.Request) {
    var product models.Product
    err := json.NewDecoder(r.Body).Decode(&product)
    if err != nil {
        http.Error(w, "Invalid input", http.StatusBadRequest)
        return
    }

    // Logic to utilize existing order tracking system to assign new destination
    // (Pseudo code, you need to implement actual logic)
    newOrderDistance := 10 // Replace with actual distance calculation
    sellerDistance := 20 // Replace with actual distance calculation

    if newOrderDistance < sellerDistance {
        fmt.Fprintf(w, "Product %s is being shipped directly to new order location", product.QrCode)
    } else {
        fmt.Fprintf(w, "Product %s is being shipped to the nearest warehouse", product.QrCode)
    }
}
