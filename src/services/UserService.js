import fetch from 'auth/FetchInterceptor'

const userService = {}

userService.getUsers = function (params) {
  return fetch({
    url: '/users',
    method: 'get',
    params
  })
}


export default userService