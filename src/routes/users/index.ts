import { getAllUser, addUser, getUserInfo } from "../../controller/user/UserAction";

const UserRouter = [
  {
    path: "/api/register",
    method: 'post',
    action: addUser
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