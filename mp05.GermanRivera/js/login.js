
var password;
function validateForm(){
  var usrNameInput = document.getElementById('username').value;
  var passNameInput = document.getElementById('password').value;
  
  var root = new RegExp("root");
  var admin = new RegExp("admin");

  if(root.test(usrNameInput)==true && root.test(passNameInput)==true){
    console.log("username root valid");
    location = 'dashboard.html';
    return true;
  }
  if(admin.test(usrNameInput)==true && admin.test(passNameInput)==true){
    console.log("username admin valid");
    return true;
  }
  alert("invalid username or password");
return false;
}
