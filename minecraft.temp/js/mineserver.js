// JavaScript Document
function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var serverObj = JSON.parse(Get("http://api.syfaro.net/server/status?ip=markusclark.us"));

//document.getElementById("onlinex").innerHTML = serverObj.online;

if(serverObj.online){
	document.getElementById("panelx").setAttribute("class","panel panel-default col-md-3 well panel-success");
	document.getElementById("headingx").innerHTML = "Server Online";
}else{
	document.getElementById("panelx").setAttribute("class","panel panel-default col-md-3 well panel-danger");
	document.getElementById("headingx").innerHTML = "Server Offline";
}

document.getElementById("motdx").innerHTML = serverObj.motd;
document.getElementById("playersx").innerHTML = serverObj.players.now+" / "+serverObj.players.max;
document.getElementById("versionx").innerHTML = serverObj.server.name;