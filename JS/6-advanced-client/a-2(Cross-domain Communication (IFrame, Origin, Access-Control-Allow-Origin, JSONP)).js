// Cross-domain Communication (IFrame, Origin, Access-Control-Allow-Origin, JSONP)


// TODO: IFrame
// TODO: Origin
// TODO: Access-Control-Allow-Origin
// TODO: JSONP

// OPTIONS
// SIMPLE REQUEST
// OPTIONS WITH SERVER REDIRECTION
// A: NO all browsers supports it and redirectiob for OPTION can trigger error
// Cookie with cors calls and access-control-allow-credentials
// A: cors req (XMLHttpReq) | fetch will be done without cookies (if not configured properly),
// if you want to make it with the server should return 
// Access-Control-Allow-Credentials and server must provide Access-Control-Allow-Origin with specific origin not "*"
