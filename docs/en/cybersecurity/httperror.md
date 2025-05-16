---
next: 
    text: 'IT Services'
    link: '/en/cybersecurity/ITServices'
prev: 
    text: 'OWASP'
    link: '/en/cybersecurity/OWASP'
---

# HTTP Errors

"Arrrgh... I hit a 404 again!" This is what someone says when trying to access a resource that doesn't exist. Errors can be visible to us users or to developers, but how do HTTP errors occur and what are they? Let's find out 😉

## Understanding How Network Requests Work

<img src="https://media.discordapp.net/attachments/1130139700510867587/1298428633148293200/httpnetwork.png?ex=67198765&is=671835e5&hm=7d8f8bce388ad4fbfb0271c7a3561e71670adc4c3d26bc79f55100fd43ccc82b&=&format=webp&quality=lossless&width=640&height=166" alt="network requests image">

Let's take an example: you're an internet user looking for an apple pie recipe. So you go to your browser and click on the first link. Once on the page, you navigate through the site. Each click actually represents a network request sent from your computer to the server where the website is hosted. The server will process your request (we say you're querying the server) and send you back either a positive or negative response depending on the availability of that resource. It's from this response that we'll receive the HTTP code.

## HTTP Status Categories

There are 5 categories of HTTP status in total:

::: info HTTP
**`1xx (Informational)`**: These codes indicate that the request has been received and the process is ongoing.<br><br>
**`2xx (Success)`**: These codes indicate that the request has been received, understood, and successfully accepted.<br><br>
**`3xx (Redirection)`**: These codes indicate that the client must take additional action for the request to be completed.<br><br>
**`4xx (Client Error)`**: These codes indicate that an error occurred on the client side (for example, a bad request).<br><br>
**`5xx (Server Error)`**: These codes indicate that an error occurred on the server side while trying to process the request.<br><br>
:::

## Most Common HTTP Error Codes
### 2xx: Success
>1. `200 OK`: The request succeeded, and the server responded with the requested resource.

---
### 3xx: Redirection
>1. `301 Moved Permanently`: The requested resource has been permanently moved to a new URL.
>2. `302 Found`: The requested resource was found, but at a different URL than requested.

---
### 4xx: Client Errors
>1. `400 Bad Request`: The server cannot process the request due to incorrect syntax.
>2. `401 Unauthorized`: Authentication is required to access the resource.
>3. `403 Forbidden`: The server understood the request but refuses to execute it.
>4. `404 Not Found`: The server did not find the requested resource at the specified URL.
>5. `405 Method Not Allowed`: The HTTP method used is not allowed for this resource.

---
### 5xx: Server Errors
>1. `500 Internal Server Error`: The server encountered an unexpected condition that prevents it from fulfilling the request.
>2. `502 Bad Gateway`: The server received an invalid response while acting as a gateway or proxy.
>3. `503 Service Unavailable`: The server is not available to handle the request, often due to overload or maintenance.
>4. `504 Gateway Timeout`: The server, acting as a gateway or proxy, did not receive a timely response from the upstream server.

## Conclusion
HTTP errors provide essential information about the state of communication between client and server. Understanding these codes and knowing how to handle them is fundamental for developing and maintaining robust and performant web applications. Good error handling contributes to a better user experience and a more reliable application. 