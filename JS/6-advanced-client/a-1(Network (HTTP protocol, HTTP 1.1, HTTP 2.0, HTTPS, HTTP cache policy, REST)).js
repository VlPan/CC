// Network (HTTP protocol, HTTP 1.1, HTTP 2.0, HTTPS, HTTP cache policy, REST)

// TODO: HTTP 1 vs HTTP 2
// Request multiplexing
// HTTP/2 can send multiple requests for data in parallel over a single TCP connection.
// it allows you to download web files asynchronously from one server

// Header compression by HPACK algorithm

// Binary protocol
// Browsers using HTTP/2 implementation will convert the same text commands into binary before transmitting it over the network.

// HTTP/2 Server Push
// This capability allows the server to send additional cacheable information 
// to the client that isn’t requested but is anticipated in future requests
// The server can prioritize pushed resources
// The client can decline pushed resources to maintain an effective repository of cached resources or disable Server Push entirely.

// TODO: Cachce policy
// Cache-Control:
// no-store - No cache at all
// no-cache - A cache will send the request to the origin server for validation before releasing a cached copy.
// max-age=31536000


// TODO: REST - representation state transport

// set of constraint
// stateless communication between client and server (sever cant store ui info)
// separation of concerns between client and server (CS)
// defined interface each request type (GET POST) is for it purpose
// 6 principles
// Client-server architecture - seporation of concern
// Cacheability
// Layered system (. If a proxy or load balancer is placed between the client and server, it won't affect their communications and there won't be a need to update the client or server code)
// Uniform interface
// Code on demand (optional)
// Self-descriptive messages