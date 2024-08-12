# Shop Backend

## Overview
This is a backend system to manage inventory and sales for a small shop. It is built with Node.js, Express.js, and MongoDB.

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install
   npm start
### API endpoints
```bash
## Getting all items
http://localhost:3000/api/items ---GET
## Adding a new item
http://localhost:3000/api/items ---POST 
Body:{
  "name": "Item Name",
  "quantity": 10,
  "price": 100
}
## Update an Item
http://localhost:3000/api/items/:itemId ---PUT
Body:{
"price": 250
}
## Delete an Item
http://localhost:3000/api/items/:itemId ---DELETE

## Create Bill
http://localhost:3000/api/bills ---POST
Body:{
  "items": [
    {
      "itemId": "item_id_1",
      "quantity": 2
    }
  ]
}
## Get bill
http://localhost:3000/api/bills/:billId? ---GET billId is optional
## DELETE bill
http://localhost:3000/api/bills/:billId ---DELETE
## Update bill
http://localhost:3000/api/bills/:billId ---PUT
Body:{
  "items": [
    {
      "itemId": "123",
      "quantity": 4
    },
   "totalAmount":1000,
  ]
}

