//AJAX (XMLHttpRequest, fetch)
// TODO: XMLHttpReq API
// TODO: fetch API
// TODO: Common headers

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