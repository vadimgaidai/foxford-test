import { LoadingStatus, ErrorStatus } from '../currentTypes'

export enum UsersActionsType {
  LOAD_USERS = 'users/LOAD_USERS',
}

/* eslint-disable camelcase */
export interface UserType {
  id: number
  email: string
  firstName: string
  surname: string
  age: number
}

export interface StateType {
  users: UserType[]
  loading: LoadingStatus
  error: ErrorStatus
}
