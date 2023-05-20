function getXMLHttpRequest() {
    try {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e) {
            return new ActiveXObject("Msxm12.XMLHTTP");
        }
    }
    catch(e) {
        return new XMLHttpRequest();
    }
}
function callAjax() {
    var url = 'clock.php';
    var myRandom = parseInt(Math.random()*99999999);
    var timer1 = setInterval(responseAjax, 1000);
    myRequest. open("GET", url + "?rand=" + myRandom, true);
    myRequest.onreadystatechange = responseAjax;
    myRequest.send(null);
}
function responseAjax() {
    if(myRequest.readyState == 4) {
        if(myRequest.status == 200) {
            var now = new Date();
            var localTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            var serverTime = myRequest.responseText;
            document.getElementById("clock").innerHTML = "Server: " + serverTime + "<br />Local: " + localTime;
        }
        else {
            alert("An error has occurred: " + myRequest.statusText);
        }
    }
}
var myRequest = getXMLHttpRequest();