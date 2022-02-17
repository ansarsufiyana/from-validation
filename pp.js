document.querySelector('.img-btn').addEventListener('click', function () {
	document.querySelector('.cont').classList.toggle('s-signup')
}
);

document.getElementById('submit').addEventListener('click', function (event){
	event.preventDefault();
	
	validationAll();
})

var email = document.getElementById('email')
var password = document.getElementById('password')
// create validation function
function validationAll(){
	var emailValue = email.value.trim();
	var passValue = password.value.trim();
// checks if the email is empty
	if(emailValue == ''){
		document.getElementById('eror').innerHTML = "**fill the email";
		return false;
	}else{
		document.getElementById('eror').innerHTML = "";
	
	};
	if (emailValue.search(/[@]/) == -1) {
		document.getElementById("eror").innerHTML = "**@ is missing ";
		return false;
	};

  //check empty password field  
  if(passValue == "") {  
     document.getElementById("passerror").innerHTML = "**Fill the password please!";  
     return false;  
    };
   
 //minimum password length validation  
  if(passValue.length < 8) {  
     document.getElementById("passerror").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
    }; 
  
//maximum length of password validation  
  if(passValue.length > 15) {  
     document.getElementById("passerror").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
    };
// password must contain uppercase letter
  if (passValue.search(/[A-Z]/) == -1) {
	document.getElementById("passerror").innerHTML = "**Your password needs at least one upper case letter. ";
	return false;
    };
// passwrod must contain lowercase letter
  if (passValue.search(/[a-z]/) == -1) {
	document.getElementById("passerror").innerHTML = "**Your password needs at least one lower case letter. ";
	return false;
  };
	
};

document.getElementById('submit-signup').addEventListener('click', function (event){
	event.preventDefault();
	
	validationSignup();
})

var namesignup = document.getElementById('name');
var eamilsignup = document.getElementById('email-signup');
var passwordsignup = document.getElementById('password-signup');
var passwordMatch = document.getElementById('password-match')


function validationSignup(){
	var nameSignup = namesignup.value.trim();
	var eamilSignup = eamilsignup.value.trim();
	var passSignup = passwordsignup.value.trim();
	var passMatch= passwordMatch.value.trim();
	
// checks if the name is empty
	if(nameSignup == ''){
		document.getElementById('name-error').innerHTML = "**name must not be empty"
		return false
	};

// checks if the email is empty
	if(eamilSignup == ''){
		document.getElementById('email-signup-error').innerHTML = "**fill the email";
		return false;
	};
	if (eamilSignup.search(/[@]/) == -1) {
		document.getElementById("email-signup-error").innerHTML = "**@ is missing ";
		return false;
	};

  //check empty password field  
  if(passSignup == "") {  
     document.getElementById("pass-Signup-error").innerHTML = "**Fill the password please!";  
     return false;  
    };
   
 //minimum password length validation  
  if(passSignup.length < 8) {  
     document.getElementById("pass-Signup-error").innerHTML = "**atleast 8 characters";  
     return false;  
    }; 
  
//maximum length of password validation  
  if(passSignup.length > 15) {  
     document.getElementById("pass-Signup-error").innerHTML = "**don't exceed 15 characters";  
     return false;  
    };
// password must contain uppercase letter
  if (passSignup.search(/[A-Z]/) == -1) {
	document.getElementById("pass-Signup-error").innerHTML = "**least one uppercase letter. ";
	return false;
  }
// passwrod must contain lowercase letter
  if (passSignup.search(/[a-z]/) == -1) {
	document.getElementById("pass-Signup-error").innerHTML = "**one lowercase letter. ";
	return false;
  };
  if (password-match !== passSignup){
	document.getElementById("pass-match-error").innerHTML = "**password not matching. ";
  }
};