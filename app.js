function logIn(username, password){

  // if the user does not input a username OR password, the function should return false, otherwise should return true if both values have SOME information inside 
  if(username.length===0 || password.length===0) {
      return false
  } else if (username==="trent" && password==="pass"){
      return true 
  } else {
      return false
  }
}

function createAccount(email, password){
  if(email.length===0 || password.length===0) {
      return false
  } else if (email==="tcarpenter7699@exampleemail.com" && password==="pass"){
      return true
  } else {
      return false
  }
}

function signUpWithGoogle(email, verificationCode){
  if(email.length===0 || verificationCode===0) { 
      return false
  }else if(email==="tcarpenter7699@exampleemail.com" && verificationCode==="1 2 3 4 5"){
      return true
  } else {
      return false
  }
}

module.exports = {logIn, createAccount, signUpWithGoogle}
