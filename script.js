function submit()
{
var username = document.getElementById("u1").value;
var password = document.getElementById("p1").value;
if(username =="" && password=="")
{
    alert("Enter Username and password");
}
else if(username =="hubby" && password=="papa"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
    alert ("Refresh the page and enter username and password same");
document.getElementById("u1").disabled = true;
document.getElementById("p1").disabled = true;
return false;
}
}