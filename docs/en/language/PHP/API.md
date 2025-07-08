---
next: 
    text: 'History of Symfony'
    link: '/en/language/PHP/Symfony/SymfonyHistory'
prev: 
    text: 'Laravel'
    link: '/en/language/PHP/Laravel/Laravel'
---

# APIs
API or "Application Programming Interface" is a communication interface that allows data transmission between 2 applications. To illustrate, let's say the database is a kitchen. It contains all the resources to satisfy the client. Then let's say a web application represents the clients, but who handles the transmission between the kitchen and the clients? Well, the servers!

## History of APIs
### Emergence of early forms of APIs (1960s-1980s)
The first APIs appeared in the 1960s-1980s. They were software interfaces that allowed applications to use operating system functionalities.

### The era of web APIs! 1990-2000
With the arrival of the Internet and the growth of the WWW in the 90s, our developer friends quickly understood the potential of this new mode of communication.

- 1999: Salesforce launched one of the first Web APIs (via XML-RPC)
- 2000: The term ***Web Services*** emerged, referring to APIs that allow applications to communicate via the internet, often using protocols like SOAP (Simple Object Access Protocol) and WSDL (Web Services Description Language).

However, SOAP was relatively heavy and complex, which led to the search for lighter and simpler solutions.

### The rise of REST and modern APIs: 2000-2010
In the 2000s, with the rise of REST (Representational State Transfer) architecture, a major change occurred in how APIs were designed. During his doctorate, a certain Roy Fielding proposed a new architectural model even simpler than SOAP: ***the RESTful model***. This model is based on principles of using standardized HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs.

- 2004: Amazon Web Services (AWS) launched its REST APIs to allow developers to manipulate cloud resources via the Internet. This facilitated the rise of Web APIs as a means of integrating cloud services.
- 2006: Twitter opened its API, allowing developers to interact with the service, send tweets, retrieve information, and build third-party applications around the platform.
These changes enabled the rise of open APIs, accessible to third parties for simple integration into external applications. RESTful APIs facilitated the adoption of APIs in web applications, mobile apps, and other distributed systems.

### API as a product: 2010-present
In recent years, APIs have become a key element of software development and digital services. Many companies, like Google, Facebook, Stripe, and Twilio, have understood the value of APIs as a means of offering services at scale. They have opened public APIs to allow external developers to access their data or perform specific actions (for example, sending messages with Twilio, integrating maps with Google Maps, or online payments with Stripe).

Recent major trends:
- GraphQL: Introduced by Facebook in 2012, GraphQL is an alternative to REST that allows more flexible API request management, enabling developers to request exactly the data they need, not just an entire resource.
- Microservices: The emergence of microservices in modern software architectures has also accelerated the use of APIs. Microservices are small, autonomous applications that communicate with each other via APIs, allowing for greater flexibility and scalability in complex systems. 