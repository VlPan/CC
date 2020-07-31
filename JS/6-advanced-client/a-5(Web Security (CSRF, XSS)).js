// Web Security (CSRF, XSS)


// TODO: Q1 make scenario where hacker attack by XSS



{ <script>
window.__PRELOADED_STATE__ = $(JSON.stringify(
    {
        user: {
            username: "NodeSecurity",
            bio: "as</script><script>alert('You have an XSS vulnerability!')</script>"
        }
    }
));
</script> }
// XSS vulnerability example
// npm install --save serialize-javascript Yahoo engeneeres
 `JSON.stringify(preloadedState).replace(/</g, ‘\\x3c’);`

 // XSS example with Chat application




// TODO: CSRF: Q2 XSRF What is it and make scenario that will do it?

// carry out unwanted action from user behalf
// How Indtargam knows its me?


<form method="POST" action="https://twitter.com/send_a_tweet">
 <input type="text" name="tweet_content" value="Hello world!">
 <input type=’submit’ value="Submit">
</form>

// to make xsrf attack you can make iframe that will send data with user creddintials by hidden form
// or force use to click button that will send his creds

// CSRF - clickjacking and changing request methods
// CSRF Protection via Tokens
// try send black token or dont send token at all or send your own token


Session fixation
is merely checking that the token in the cookie and the token in the request body is the same.

<meta name=”referrer” content=”no-referrer”>

CSRF token
what is curl?
