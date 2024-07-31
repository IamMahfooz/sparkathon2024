package main

import (
    "log"
    "net/http"
    "github.com/gorilla/mux"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/handlers"
    "github.com/IamMahfooz/walmart-dynamic-invoice-backend/utils"
)

// CORS middleware function
func enableCORS(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        if r.Method == http.MethodOptions {
            return
        }
        next.ServeHTTP(w, r)
    })
}

func main() {
    router := mux.NewRouter()

    // Define your routes
    router.HandleFunc("/api/product", handlers.GetProductDetails).Methods("GET")
    router.HandleFunc("/api/product", handlers.UpdateProductDetails).Methods("PUT")

    // Connect to the database
    utils.ConnectDB()

    // Wrap the router with the CORS middleware
    handler := enableCORS(router)

    log.Println("Server started on: http://localhost:8000")
    log.Fatal(http.ListenAndServe(":8000", handler))
}
