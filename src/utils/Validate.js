const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const SignInFormValidation = (email, password) => {
    const validEmail = emailRegex.test(email);
    const validPassword = passwordRegex.test(password);
    if(!validEmail) return "Email Not Valid!";
    if(!validPassword) return "Password Not Valid!";
    return null;
}

export const SignUpFormValidation = (email, password, confirmPassword) => {
    const validEmail = emailRegex.test(email);
    const validPassword = passwordRegex.test(password);
    if(!validEmail) return "Email Not Valid!";
    if(!validPassword) return "Password Not Valid!";
    if(password !== confirmPassword) return "Password Not Same!";
    return null;
}