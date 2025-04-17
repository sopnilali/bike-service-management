# Bike Servicing Management API

<h2>Project Name: Bike Servicing Management API<h2>
<p>Assalamu Alaikum! My Name is Md Abdul Adud. Project Name: Bike Servicing Management API. I am Develop an Express application with TypeScript, integrating PostgreSQL with Prisma ORM to manage. This project is support CRUD Operation for bikes, customers and services.</p>

<strong>GitHub Repository Link</strong> : https://github.com/sopnilali/bike-service-management

<strong>Backend Live Link<strong> : https://bike-service-management-api.vercel.app/


# 🎯 Project Summery
<p>
Develop a backend API for a Bike Servicing Management System that allows a bike servicing center to manage customers, bikes, and service records. The API will support CRUD operations for bikes, customers, and services.
 </p>

# 🛠 Techonology Used
<li>Node.js</li>
<li>Express.js</li>
<li>TypeScript</li>
<li>Prisma ORM</li>
<li>PostgreSQL</li>

# Folder Structure 📂

<p>I organized the project by creating this folder structure. The folders here are product, order and user. All of them are crated in different files, so that they can be controlled and handled very easily.</p>

<pre>
src/
├── app/
├── modules/
│   ├── Bike/
│   │   ├── bike.controller.ts
│   │   ├── bike.interface.ts
│   │   ├── bike.route.ts
│   │   ├── bike.service.ts
│   │   ├── bike.validation.ts
│   ├── Customer/
│   │   ├── customer.controller.ts
│   │   ├── customer.interface.ts
│   │   ├── customer.route.ts
│   │   ├── customer.service.ts
│   │   ├── customer.validation.ts
│   ├── blog/
│   │   ├── blog.constant.ts
│   │   ├── blog.controller.ts
│   │   ├── blog.interface.ts
│   │   ├── blog.model.ts
│   │   ├── blog.router.ts
│   │   ├── blog.service.ts
├── app.ts
├── server.ts
</pre>

🧱 Database Schema Model
#### 1\. **Customer Prisma Model**
<pre>

model Customer {
  customerId String   @id @default(uuid())
  name       String
  email      String   @unique
  phone      String
  createdAt  DateTime @default(now())
  bike       Bike[]

  @@index([email])
  @@map("customers")
}
</pre>

#### 2\. **Bike Prisma Model**
<pre>

model Customer {
  customerId String   @id @default(uuid())
  name       String
  email      String   @unique
  phone      String
  createdAt  DateTime @default(now())
  bike       Bike[]

  @@index([email])
  @@map("customers")
}
</pre>

#### 2\. **ServiceRecord Prisma Model**
<pre>
model ServiceRecord {
  serviceId      String    @id @default(uuid())
  bikeId         String
  bike           Bike      @relation(fields: [bikeId], references: [bikeId])
  serviceDate    DateTime
  completionDate DateTime?
  description    String
  status         String // "pending", "in-progress", "done"

  @@index([bikeId])
  @@map("servicerecords")
}
</pre>

# Features of Customers

<li>Create Customer (data input : name, email and phone)</li>
<li> Get All Customer</li>
<li> Get specific customer by customerId</li>
<li> update customer by customerId</li>
<li> delete customer by customerId</li>

# Features of Bike

<li>Create Bike</li>
<li> Get All Bike</li>
<li> Get specific Bike by bikeId</li>
<li> update Bike by bikeId</li> <!--extra work -->
<li> delete Bike by bikeId</li> <!--extra work -->

# Features of Service Record

<li>Create Service Record (data input: bikeid, servicedate, description and status)</li>
<li> Get All Bike</li>
<li> Get specific Bike by bikeId</li>
<li> update Bike by bikeId</li> <!--extra work -->
<li> delete Bike by bikeId</li> <!--extra work -->

# Error Handling ⚠️
<li>Error Response Structure. Not found customer</li>
<pre>
{
    "success": false,
    "message": "Customer Not Found!",
    "errorSources": [
        {
            "path": "",
            "message": "Customer Not Found!"
        }
    ],
    "err": {
        "statusCode": 404
    },
    "stack": "Error: Customer Not Found!\n    at Object.getCustomerByIdIntoDB (C:\\projects\\prisma\\bikeService-management-api\\src\\app\\modules\\Customer\\customer.service.ts:27:15)
}
</pre>
<li>I am implement error handling for invalid input, missing data, invalid email and insufficient stock.</li>
<pre>
{
    "success": false,
    "message": "Validation Error",
    "errorSources": [
        {
            "path": "phone",
            "message": "Phone is reqired"
        }
    ],
    "err": {
        "issues": [
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "body",
                    "phone"
                ],
                "message": "Phone is reqired"
            }
        ],
        "name": "ZodError"
    },
    "stack": "ZodError: [\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"undefined\",\n    \"path\": [\n      \"body\",\n      \"phone\"\n    ],\n    \"message\": \"Phone is reqired\"\n  }\n]\n
}
</pre>

<li>Not Found: If you hit a wrong route, it will send a message and tell you your status, and which route you hit.</li>

<pre>
{
    "success": false,
    "message": "API Not Found! /api/love",
    "error": "Error: API Not Found! /api/love\n    at notFound (C:\\projects\\prisma\\bikeService-management-api\\src\\app\\middlewares\\notFound)
}
</pre>
# Thanks you Sir/Mam 💕