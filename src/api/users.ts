import { UserType } from '../redux/users/types'
import { request, ResponseApi } from '../utils/fetch'

export const fetchUsers = async (): Promise<UserType> => {
  const { payload }: ResponseApi = await request({
    url: 'http://localhost:3002/users',
  })
  return payload
}
