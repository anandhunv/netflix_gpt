
export const checkValidData=(email,password,name)=>{
    

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isNameValid=/^([a-zA-Z])/.test(name)

    
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "email is not valid";

    if (!isPasswordValid) return "Reset-Password: 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char.";

    if(!isNameValid) return "Name is not valid";


    return null;

}