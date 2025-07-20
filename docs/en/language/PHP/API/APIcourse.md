---
next: 
    text: 'Symfony History'
    link: '/en/language/PHP/Symfony/SymfonyHistory'
prev: 
    text: 'API course'
    link: '/en/language/PHP/API/APIcourse'
---

# APIs

## 1.1 What is an API?
**Definition**: An API (Application Programming Interface) is a set of definitions and protocols that enables different software applications to communicate with each other.

### 1.2 Role of APIs:
- Enable different applications to exchange data
- Facilitate the integration of external functionalities
- Promote modularity in software development

### 1.3 Types of APIs:
- **Local API**: Communication between components on the same machine
- **Web API**: Communication via the web (HTTP/HTTPS)
- **Third-party APIs**: External services (Google Maps, Twitter, etc.)
- **Public APIs**: Accessible to everyone
- **Private APIs**: For internal use within an organization

#### Popular Examples:
- Google Maps API
- Twitter API
- Facebook Graph API
- Stripe API

## 2. Why are APIs Important?

### Reusability:
- Avoids reinventing the wheel
- Allows using existing and proven services

### Interoperability:
- Enables different systems to work together
- Technology independence between systems

### Automation:
- Automates repetitive tasks
- Enables integration of different services

### Use Cases:
- E-commerce (payments, delivery)
- Financial services (transfers, verifications)
- Video games (authentication, leaderboards)
- Social networks (sharing, connections)

## 3. How Does an API Work?
### Basic Cycle:
1. Client sends a request
2. Server processes the request
3. Server sends back a response

### Protocols:
- **HTTP/HTTPS**: Basic web protocol
- **WebSockets**: For real-time communications

### HTTP Methods:
- `GET`: Retrieve data
- `POST`: Create a new resource
- `PUT`: Update an existing resource
- `DELETE`: Delete a resource
- `PATCH`: Partially update a resource

### Data Format (JSON Example):
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

## 4. Web APIs

### 4.1 REST APIs
**Definition**: REST (Representational State Transfer) is an architectural style for distributed systems.

#### REST Principles:
- **Stateless**: Each request contains all necessary information
- **Client-Server**: Clear separation of concerns
- **Cacheable**: Responses can be cached
- **Uniform Interface**: Consistent use of HTTP methods

#### Example REST Endpoints:
```http
GET    /users          # List all users
POST   /users          # Create a new user
GET    /users/1        # Get user details
PUT    /users/1        # Update a user
DELETE /users/1        # Delete a user
```

### 4.2 SOAP APIs
**Definition**: SOAP (Simple Object Access Protocol) is a protocol for exchanging structured information.

#### Key Characteristics:
- Uses XML for message format
- More rigid structure than REST
- Built-in error handling
- Supports multiple protocols (HTTP, SMTP, etc.)

### 4.3 GraphQL
**Definition**: A query language for APIs that enables clients to request exactly the data they need.

#### Advantages:
- Reduces over-fetching of data
- Single request for multiple resources
- Strongly typed schema

## 5. Working with APIs

### 5.1 Making API Requests
#### Using cURL:
```bash
# GET request
curl https://api.example.com/users

# POST request
curl -X POST -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}' \
  https://api.example.com/users
```

#### Using Python (requests library):
```python
import requests

# GET request
response = requests.get('https://api.example.com/users')
users = response.json()

# POST request
new_user = {'name': 'John', 'email': 'john@example.com'}
response = requests.post('https://api.example.com/users', json=new_user)
```

### 5.2 API Authentication Methods
- **API Keys**: Simple token for authentication
- **OAuth 2.0**: Standard for access delegation
- **JWT (JSON Web Tokens)**: Compact, URL-safe tokens
- **Basic Auth**: Username and password (base64 encoded)

## 6. Best Practices

### 6.1 API Design
- Use nouns instead of verbs in endpoint paths
- Use HTTP methods appropriately
- Version your API (e.g., /v1/users)
- Use proper HTTP status codes
- Implement filtering, sorting, and pagination

### 6.2 Security
- Always use HTTPS
- Implement proper authentication and authorization
- Validate all input data
- Implement rate limiting
- Keep sensitive information out of URLs

### 6.3 Documentation
- Document all endpoints with examples
- Include request/response schemas
- Provide sample code in multiple languages
- Document error responses

## 7. Tools for API Development
- **Testing**: Postman, Insomnia
- **Documentation**: Swagger/OpenAPI, ReDoc
- **Monitoring**: New Relic, Datadog
- **Development**: cURL, HTTPie, REST Client extensions

## Conclusion
APIs are the backbone of modern software development, enabling different systems to communicate and share data efficiently. Understanding how to work with APIs is an essential skill for any developer. Whether you're consuming existing APIs or creating your own, following best practices in design, security, and documentation will ensure your API integrations are robust, secure, and maintainable.

Remember that good API design is as much about the developer experience as it is about technical implementation. Always consider how others will use your API and strive to make it as intuitive and reliable as possible.
