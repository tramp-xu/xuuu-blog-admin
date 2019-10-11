import { getAllUser, addUser, getUserInfo, login } from "../../controller/user/UserAction";

const UserRouter = [
  {
    path: "/api/register",
    method: 'post',
    action: addUser
  },
  {
    path: "/api/login",
    method: 'post',
    action: login
  },
  {
    path: "/api/user/search",
    method: 'get',
    action: getAllUser
  },
  {
    path: "/api/user/get",
    method: 'get',
    action: getUserInfo
  }
]

export default UserRouter