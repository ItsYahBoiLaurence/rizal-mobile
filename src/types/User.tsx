export interface UserCreds {
    email: string
    password: string
}

export interface UserRegister extends UserCreds {
    confirmPassword: string
}

export interface UserVerification {
    code: string
}