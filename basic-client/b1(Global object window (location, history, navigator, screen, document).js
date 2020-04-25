// Global object window (location, history, navigator, screen, document
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
History.pushState()
History.replaceState()

/* navigator */
// browser data like agent name etc
// battery, geoloc, language, premmisons, plugins

/* screen */
// screen dimensions

// Как записать протокол сайта в переменную
// pushState interface
// window.location.protocol