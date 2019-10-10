
import {postGetAllAction} from "../../controller/PostGetAllAction";
import {postGetByIdAction} from "../../controller/PostGetByIdAction";
import {postSaveAction} from "../../controller/PostSaveAction";

const PostRouter = [
  {
    path: "/posts",
    method: "get",
    action: postGetAllAction
  },
  {
      path: "/posts/:id",
      method: "get",
      action: postGetByIdAction
  },
  {
      path: "/posts",
      method: "post",
      action: postSaveAction
  }
]

export default PostRouter