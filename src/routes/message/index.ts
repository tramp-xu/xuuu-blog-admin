import { getMessage } from "../../control/message/actions";

const MessageRouter = [
  {
    path: "/api/message/get",
    method: 'get',
    action: getMessage
  }
]

export default MessageRouter