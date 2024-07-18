const {logIn, createAccount, signUpWithGoogle} = require("../app.js");

test('was logging in successful?', ()=>{
    expect(logIn("maya", "")).toBeFalsy();
    expect(logIn("", "pass")).toBeFalsy();
    expect(logIn("", "")).toBeFalsy();
    expect(logIn("maya", "pass")).toBeTruthy();
})

test('was the create account successful?', ()=>{
    expect(createAccount("mimmo888@exampleemail.com", "")).toBeFalsy();
    expect(createAccount("", "pass")).toBeFalsy();
    expect(createAccount("", "")).toBeFalsy();
    expect(createAccount("mimmo888@exampleemail.com", "pass")).toBeTruthy();
})

test('was the email verification successful?', ()=>{
    expect(signUpWithGoogle("mimmo888@exampleemail.com", "")).toBeFalsy();
    expect(signUpWithGoogle("","1 2 3 4 5")).toBeFalsy();
    expect(signUpWithGoogle("", "")).toBeFalsy();
    expect(signUpWithGoogle("mimmo888@exampleemail.com", "1 2 3 4 5")).toBeTruthy();
})