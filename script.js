function validate()
{
var p=document.getElementById("password");
var u=document.getElementById("username");
if(p.value=="1234"&& u.value=="admin")
{
    
    return true;
}
else if(ip.value!="1234"&& u.value!="admin")

{
    
   alert("ENTER THE CORRECT PASSWORD");
   return false;
}
}