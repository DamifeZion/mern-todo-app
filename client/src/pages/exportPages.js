//User needs need not be authorized to access the below
export { default as Home } from "./UnAuth/Home";
export { default as About } from "./UnAuth/About";
export { default as Login } from "./UnAuth/Login";
export { default as Signup } from "./UnAuth/Signup";
export { default as PasswordReset } from "./UnAuth/PasswordReset";

//User needs to be authorized to access the below
export { default as MyDay } from "./Auth/Dashboard/MyDay";
