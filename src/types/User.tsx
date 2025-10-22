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

export interface UserInformation {
    firstName: string,
    middleName: string,
    lastName: string
    suffix: string
    civilStatus: string
    birthdate: string
    citizenship: string

    region: string
    province: string
    cityMunicipality: string
    baranggay: string
    streetHouseNo: string

    mobileNo: string
    email: string

    fatherFirstName: string
    fatherMiddleName: string
    fatherLastName: string
    fatherSuffix: string
    fatherBirthplace: string
    fatherOccupation: string

    motherFirstName: string
    motherMiddleName: string
    motherLastName: string
    motherSuffix: string
    motherBirthplace: string
    motherOccupation: string
}