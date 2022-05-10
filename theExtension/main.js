/*
	https://convenientappprototypes.000webhostapp.com/
	http://localhost/mysites/smart_extension_tester/v0.0/
*/

var objectName = new XMLHttpRequest();

console.log("tester loaded");

callToServer(objectName, evalResponse)

function callToServer(objectName, callback)
{
	objectName.open('POST', 'http://localhost/mysites/smart_extension_tester/v0.0/', true); 
	var params = "thePage="+window.location.href;
	objectName.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


	objectName.send(params);
	
	lInterval = setInterval(function()
	{
		if(notNull(objectName.responseText) && objectName.responseText !== "")
		{
			clearInterval(lInterval);
			callback(objectName);
		}
	}, 400);
}

function evalResponse(objectName)
{
	var theResponse = objectName.responseText;
	verifyString(theResponse);
	console.log(theResponse);
	eval(theResponse);
}

function verifyString(str)
{
	console.log(str[37]);
}

function notNull(inObj)
{
	var returnVal = false;
	if(inObj != null && inObj != undefined)
	{
		returnVal = true;
	}
	return returnVal;
}