**Dynamic Invoice System Using QR Codes for Supply Chain Management**  
Effeciently manage returns and reassign packages with ease
![image](https://github.com/user-attachments/assets/7af57dec-5cd6-4b18-a57e-c0773ea2909e)

## Overview

The Dynamic Invoice System aims to revolutionize supply chain management by leveraging QR codes to streamline processes, enhance inventory management, and improve customer satisfaction. This system addresses several key issues in logistics and warehouse management, including efficient handling of returns, dynamic reassignment, enhanced inventory management, and cost reduction.

## Key Features

### Efficient Handling of Returns
- **Current Problem:** Handling returns is labor-intensive, requiring new invoices and re-labeling of packages.
- **Solution:** The system updates the QR code's associated information in real-time, reducing manual work and errors.

### Dynamic Reassignment
- **Current Problem:** Returned products need to be manually reassigned, often involving significant paperwork and delays.
- **Solution:** Instant reassignment of products to new buyers, speeding up the process and improving efficiency.

### Enhanced Inventory Management
- **Current Problem:** Managing inventory, especially with returned items and stock across multiple warehouses, is challenging.
- **Solution:** Accurate, real-time updates of inventory levels and locations, facilitating better management.

### Improved Customer Experience
- **Current Problem:** Customers face delays in receiving products due to inefficient inventory management and handling of returns.
- **Solution:** Faster access to products from nearby warehouses, leading to quicker delivery times and increased customer satisfaction.

### Cost Reduction
- **Current Problem:** Manual handling of returns and reassignment leads to higher operational costs.
- **Solution:** Automation and streamlined processes significantly reduce labor costs and other associated expenses.

## Market Relevance

- **Scalability:** The system can be scaled across different warehouses and companies, making it a versatile solution.
- **Technological Feasibility:** With advancements in QR code technology, mobile computing, and real-time data processing, this idea is technologically feasible.
- **Competitive Edge:** Companies adopting this system can gain a competitive edge by improving supply chain efficiency and customer satisfaction.

## Potential Challenges

- **Integration:** Integrating with existing warehouse management systems might require significant effort.
- **Data Security:** Ensuring the security of the data associated with the QR codes is crucial.
- **Adoption:** Convincing companies to adopt a new system might be challenging, requiring a clear demonstration of the benefits.

## Project Structure

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

