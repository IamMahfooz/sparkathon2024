**Dynamic Invoice System Using QR Codes for Supply Chain Management**  
Effeciently manage returns and reassign packages with ease
![image](https://github.com/user-attachments/assets/7af57dec-5cd6-4b18-a57e-c0773ea2909e)

## Overview

The Dynamic Invoice System aims to revolutionize supply chain management by leveraging QR codes to streamline processes, enhance inventory management, and improve customer satisfaction. The system addresses several key issues in logistics and warehouse management, focusing on efficient handling of returns, dynamic reassignment, enhanced inventory management, and cost reduction.

### Problem Statement

In traditional supply chain and warehouse management systems, two types of invoices are commonly used:

1. **Package Invoice:** Attached to the package to track basic delivery details.
2. **Product Invoice:** Provided to the customer, detailing the product information and transaction.

Current challenges include:

- **Handling Returns:** When an order is canceled before delivery, the outer package often needs to be re-labeled and re-invoiced, resulting in increased labor and costs.
- **Dynamic Reassignment:** Returned products require manual reassignment, which involves paperwork and delays.
- **Inventory Management:** Managing inventory, especially returned items, across multiple warehouses is complex and prone to errors.
- **Customer Experience:** Inefficient inventory management and return handling lead to delivery delays and decreased customer satisfaction.
- **Operational Costs:** Manual processes in handling returns and reassignment increase labor costs and operational expenses.

### Proposed Solution

The Dynamic Invoice System offers the following solutions:

1. **QR Code for Package Invoice:** 
    - Replace the traditional package invoice with a QR code that tracks delivery details.
    - This allows updates to the QR code's associated information in the system, eliminating the need to change the outer packaging if an order is canceled before delivery, thus saving labor and costs.

2. **Soft Copy for Product Invoice:** 
    - Provide the product invoice as a soft copy to the customer's account.
    - This ensures customers have access to their product information and transaction details without requiring physical documentation.

3. **Efficient Handling of Returns:** 
    - Streamline the returns process by updating the QR code information in real-time, reducing manual work and errors.

4. **Dynamic Reassignment:** 
    - Allow instant reassignment of products to new buyers through the dynamic system, speeding up the process and improving efficiency.

5. **Enhanced Inventory Management:** 
    - Maintain accurate, real-time updates of inventory levels and locations, facilitating better management of stock, especially returned items.

6. **Improved Customer Experience:** 
    - Enhance delivery times and customer satisfaction by enabling faster access to products from nearby warehouses.

7. **Cost Reduction:** 
    - Automate and streamline processes to significantly reduce labor costs and other associated expenses.

## Market Relevance

- **Scalability:** The system can be scaled across different warehouses and companies, making it a versatile solution.
- **Technological Feasibility:** With advancements in QR code technology, mobile computing, and real-time data processing, this idea is technologically feasible.
- **Competitive Edge:** Companies adopting this system can gain a competitive edge by improving supply chain efficiency and customer satisfaction.

## Potential Challenges

- **Integration:** Integrating with existing warehouse management systems might require significant effort.
- **Data Security:** Ensuring the security of the data associated with the QR codes is crucial.
- **Adoption:** Convincing companies to adopt a new system might be challenging, requiring a clear demonstration of the benefits.

## Project Structure :

```plaintext
├── src
│   ├── backend         # Backend code for the system
|          |-- getProductsDetails()
|          |-- updateProductDetails()
|          |-- getProductStatus()
|          |-- assingNextDestination()
│   ├── frontend           # Frontend code for the system
|          |-- Delivery Agent (/getProuctDetails() endpoint)
|          |-- Warehouse Manager (/updateProductDetails() endpoints => rest part is done by walmart existing package allotment tool)
└── README.md              # Project overview
```
## Techstack :
**Frontend** : Next.Js , Typescript , TailwindCss .  
**Backend** : Golang  
**Database** : MongoDB  

## TRY IT OUT !! :
clone the repo and follow the given process.  

**Frontend** : 
```
1. In frontend folder run the following commands
npm install && npm run dev
```
**Backend** :
Install mongoDB and Go from the official sources to get started , then follow the give process.
```
In the backend folder run the following commands
sudo service mongod start && go run main.go
```


