package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/models"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/utils"
    "go.mongodb.org/mongo-driver/bson"
    // "go.mongodb.org/mongo-driver/bson/primitive"
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
            QrCode:      "default-qr-code",
            Name:        "Mahfooz Alam",
            Description: "Gaming Console",
            Price:       999,
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
            "name":        product.Name,
            "description": product.Description,
            "price":       product.Price,
        },
    }

    _, err = collection.UpdateOne(r.Context(), filter, update)
    if err != nil {
        http.Error(w, "Failed to update product", http.StatusInternalServerError)
        return
    }

    json.NewEncoder(w).Encode(map[string]string{"message": "Product updated successfully"})
}




