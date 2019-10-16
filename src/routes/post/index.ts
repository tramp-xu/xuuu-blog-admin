
import {postGetAllAction} from "../../control/post/PostGetAllAction";
import {postGetByIdAction} from "../../control/post/PostGetByIdAction";
import {postSaveAction} from "../../control/post/PostSaveAction";

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