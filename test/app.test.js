const {logIn, createAccount, signUpWithGoogle} = require("../app.js");

test('was logging in successful?', ()=>{
    expect(logIn("trent", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("trent", "pass")).toBeTruthy();
})

test('was the create account successful?', ()=>{
    expect(createAccount("tcarpenter7699@exampleemail.com", "")).toBeFalsy();
    expect(createAccount("", "pass")).toBeFalsy();
    expect(createAccount("", "")).toBeFalsy();
    expect(createAccount("tcarpenter7699@exampleemail.com", "pass")).toBeTruthy();
})

test('was the email verification successful?', ()=>{
    expect(signUpWithGoogle("tcarpenter7699@exampleemail.com", "")).toBeFalsy();
    expect(signUpWithGoogle("","1 2 3 4 5")).toBeFalsy();
    expect(signUpWithGoogle("", "")).toBeFalsy();
    expect(signUpWithGoogle("tcarpenter7699@exampleemail.com", "1 2 3 4 5")).toBeTruthy();
})
