function getXMLHttpRequest() {
    try {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e) {
            return new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    catch(e) {
        return new XMLHttpRequest();
    }
}

function doAjax(url, query, callback, reqtype, getxml) {
    var myreq = getXMLHttpRequest();
    var loading = document.createElement("p");
    loading.innerHTML = "Loading...";
    document.body.appendChild(loading);
    myreq.onreadystatechange = function() {
        if(myreq.readyState ==4) {
            if(myreq.status == 200) {
                var item = myreq.responseText;
                if(getxml == 1) item = myreq.responseXML;
                eval(callback + '(item)');
                document.body.removeChild(loading);
            }
        }
    }
    if(reqtype.toUpperCase() == "POST") {
        requestPOST(url, query, myreq);
    }
    else {
        requestGET(url, query, myreq);
    }
}

function requestGET(url, query, req) {
    var myRandom = parseInt(Math.random()*99999999);
    if(query == '') {
        var callURL = url + '?rand=' + myRandom;
    }
    else {
        var callUrl = url + '?' + query + '&rand=' + myRandom;
    }
    req.open("GET", callURL, true);
    req.send(null);
}

function requestPOST(url, query, req) {
    req.open("POST", url, true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.send(query);
}