// Global object window (location, history, navigator, screen, document

// TODO: Question 1 how to gen current hostname?
// TODO: Question 2 What is the interface of location?
// TODO: Question 3 How to navigate to another document? location.assign vs replace vs history.push / replace state. 





/* Location */
window.location.href
window.location.protocol
window.location.host
window.location.hostname
window.location.port
window.location.pathname
Location.search
Location.hash
Location.username

Location.assign() //  method causes the window to load and display the document at the URL specified.
// when script origin !== Location.origin throw secure error
Location.replace() // Same as assign but remove page from SessionHistory (user can not get back)
Location.toString()
Location.reload()

// location vs history

window.location.pathname = '123'

window.location.hash = '123'
window.location.search = 'Artsim=123'
setTimeout(() => {
  window.location.href  = 'http://127.0.0.1:5501/'
}, 2000)

location.assign("http://www.mozilla.org"); // or
location = "http://www.mozilla.org";

location.reload(true);

function reloadPageWithHash() {
  var initialPage = location.pathname;
  location.replace('http://example.com/#' + initialPage);
} 
reloadPageWithHash();


/* history */
History.length // hte number of items in Session history
History.scrollRestoration // auto by default
History.state // Session state (?)

History.back()
History.forward()
History.go()
History.pushState() // can only save state in session history and href in current domain
History.replaceState()

/* navigator */
// browser data like agent name etc
// battery, geoloc, language, premmisons, plugins

/* screen */
// screen dimensions

// Как записать протокол сайта в переменную
// pushState interface
// window.location.protocol