function validate()
{
var p=document.getElementById("password");
var u=document.getElementById("username");
if(p.value=="1234"&& u.value=="admin")
{
    
    return true;
}
else 
{
    
   return false;
}
}