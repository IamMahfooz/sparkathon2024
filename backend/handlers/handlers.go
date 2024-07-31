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
    // check for product status
    // checkPructStatus(w,r)
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
func checkProductStatus(w http.ResponseWriter, r *http.Request) {
    // utilise the already implemented order tracking system of walmart
    // if product status is in no current order category ==> ship to nearest warehouse
    // else call assignNextDestination(w,r)
}
func assingNextDestination(w http.ResponseWriter,r * http.Request){
    // utilise existing order tracking system to assing new destination
    // ||--- if a same order place => if (distance of (new order - seller location) > distance of (new order - current location)){
    //                                                ship directly to new location
    //                                                }else{ ship to nearest warehouse }
    //
    // ||--- if not => return to nearest warehouse
}




