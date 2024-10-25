import {type Countries, type Currencies} from 'shared/const/common';

export interface Profile {
    'firstname': string
    'lastname': string
    'age': number
    'currency': Currencies
    'country': Countries
    'city': string
    'username': string
    'avatar': string
}

export interface ProfileSchema {
    data?: Profile
    readonly: boolean
    isLoading: boolean
    error?: string
}
