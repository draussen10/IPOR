import {type Profile} from '@/entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    readonly: boolean
    isLoading: boolean
    error?: string
    validateErrors?: ValidateProfileError[]
}
