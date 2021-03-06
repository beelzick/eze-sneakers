import * as yup from "yup";

export const registerSchema = yup.object().shape({
    fName: yup
        .string('This field must contain only letters')
        .required('This field is required'),
    lName: yup
        .string('This field must contain only letters')
        .required('This field is required'),
    password: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    email: yup
        .string('Invalid email')
        .required('This field is required')
        .email('Invalid email'),
    birthDate: yup
        .date('Invalid date')
        .default(() => new Date(2000, 0, 1))
        .required('This field is required')
})

export const loginSchema = yup.object().shape({
    email: yup
        .string('This field must contain only letters')
        .email('Invalid email')
        .required('This field is required'),
    password: yup
        .string('This field must contain only letters')
        .required('This field is required')
})

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    newPassword: yup
        .string('This field must contain only letters')
        .required('This field is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
})