//AJAX (XMLHttpRequest, fetch)



// TODO: Q1 where fetch will trigger catch
// internet network connection
// cors failed
// TODO: Q2 Why after reseving the response from fetch we still need to wait for body?

(async() => {
  let res = await getData();
  let body = await res.json();
})



// make req without page reloading
function reqListener () {
    console.log(this.responseText);
  }

  
var myRequest = new XMLHttpRequest();
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true); // async true, sync false
oReq.send();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

oReq.open(); // if open called before handlers added this wont work

function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
      var percentComplete = oEvent.loaded / oEvent.total;
      // ...
    } else {
      // Невозможно вычислить состояние загрузки, так как размер неизвестен
    }
  }


// WHEN catch in fetch will be triggered
// A: no internet connection
// CORS failed

// A: cors req (XMLHttpReq) | fetch will be done without cookies (if not configured properly),
// if you want to make it with the server should return 
// Access-Control-Allow-Credentials and server must provide Access-Control-Allow-Origin with specific origin not "*"



// TODO: XMLHttpReq API
// TODO: fetch API
// TODO: Common headers
