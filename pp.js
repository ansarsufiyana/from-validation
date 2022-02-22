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

	document.getElementById('eror').innerHTML = "";
	document.getElementById("passerror").innerHTML = "";
// checks if the email is empty
	if(emailValue == ''){
		document.getElementById('eror').innerHTML = "**fill the email";
		return false;
	}else if (emailValue.search(/[@]/) == -1) {
		document.getElementById("eror").innerHTML = "**@ is missing ";
		return false;
	};

  //check empty password field  
  //minimum password length validation  
  //maximum length of password validation  
  // password must contain uppercase letter
  // passwrod must contain lowercase letter
  if(passValue == "") {  
     document.getElementById("passerror").innerHTML = "**Fill the password please!";  
     return false;  
    }else if(passValue.length < 8) {  
     document.getElementById("passerror").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
    }else if(passValue.length > 15) {  
     document.getElementById("passerror").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
    }else if (passValue.search(/[A-Z]/) == -1) {
	document.getElementById("passerror").innerHTML = "**Your password needs at least one upper case letter. ";
	return false;
    }else if (passValue.search(/[a-z]/) == -1) {
	document.getElementById("passerror").innerHTML = "**Your password needs at least one lower case letter. ";
	return false;
  };


//   {nameSignup: "asdf", eamilSignup: "asdf@gmail.com", passSignup: "asdfasdfA"}

  const allUsers  = JSON.parse(localStorage.getItem('allUsers'))

  const findUser = allUsers.find(item => {
	  return  ((emailValue == item.eamilSignup) && (passValue == item.passSignup))
  })
  if(findUser) alert('welcome' + ' ' + allUsers[0].nameSignup)
//   console.log(allUsers[0].nameSignup)
  if(!findUser) alert('not a user')
};

document.getElementById('submit-signup').addEventListener('click', function (event){
	event.preventDefault();
	
	validationSignup();
})
const allUsers = []

var namesignup = document.getElementById('name');
var eamilsignup = document.getElementById('email-signup');
var passwordsignup = document.getElementById('password-signup');
var passwordMatch = document.getElementById('password-match')


function validationSignup(){

	var nameSignup = namesignup.value.trim();
	var eamilSignup = eamilsignup.value.trim();
	var passSignup = passwordsignup.value.trim();
	var passMatch= passwordMatch.value.trim();
	document.getElementById('name-error').innerHTML = "";
	document.getElementById("email-signup-error").innerHTML = "";
	document.getElementById('pass-Signup-error').innerHTML = "";
	document.getElementById("pass-match-error").innerHTML = "";
	
	// checks if the name is empty
	if(nameSignup == ''){
		document.getElementById('name-error').innerHTML = "**name must not be empty"
		return false
	};
	// checks if the email is empty
	
	if(eamilSignup == ''){
		document.getElementById('email-signup-error').innerHTML = "**fill the email";
		return false;
	}
	if (eamilSignup.search(/[@]/) == -1) {
		document.getElementById("email-signup-error").innerHTML = "**@ is missing ";
		return false;
	};
	
	//check empty password field  
	//minimum password length validation  
  //maximum length of password validation  
  // password must contain uppercase letter
  // passwrod must contain lowercase letter
  if(passSignup == "") {  
     document.getElementById("pass-Signup-error").innerHTML = "**Fill the password please!";  
     return false;  
    }else if(passSignup.length < 8) {  
		document.getElementById("pass-Signup-error").innerHTML = "**atleast 8 characters";  
		return false;  
    }else if(passSignup.length > 15) {  
		document.getElementById("pass-Signup-error").innerHTML = "**don't exceed 15 characters";  
		return false;  
    }else if (passSignup.search(/[A-Z]/) == -1) {
		document.getElementById("pass-Signup-error").innerHTML = "**least one uppercase letter. ";
		return false;
	}else if (passSignup.search(/[a-z]/) == -1) {
		document.getElementById("pass-Signup-error").innerHTML = "**one lowercase letter. ";
		return false;
  };
alert('welcome to smoking,' + ' ' + nameSignup + ' ' + 'lets light up a joint')
// confroms   if the password is same or not

  	if(passMatch !== passSignup){
		  document.getElementById("pass-match-error").innerHTML = "**password not matching. ";
		  return false;
	}

	allUsers.push({ nameSignup, eamilSignup, passSignup})
	const strings = JSON.stringify(allUsers)
	localStorage.setItem('allUsers',strings)
	console.log(localStorage.getItem('allUsers'))

 document.getElementById('name').value = ""
 document.getElementById('email-signup').value = ""
 document.getElementById('password-signup').value = ""
 document.getElementById('password-match').value = ""
	};
	//lets update it on github