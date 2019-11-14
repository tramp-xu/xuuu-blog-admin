import { getAllTag, getTagInfo, addTag, updateTag, deleteTag } from "../../control/tag/actions";

const TagRouter = [
  {
    path: "/api/tag/search",
    method: 'get',
    action: getAllTag
  },
  {
    path: "/api/tag/get",
    method: 'get',
    action: getTagInfo
  },
  {
    path: "/api/tag/add",
    method: 'post',
    action: addTag
  },
  {
    path: "/api/tag/edit",
    method: 'post',
    action: updateTag
  },
  {
    path: "/api/tag/delete",
    method: 'post',
    action: deleteTag
  },
]

export default TagRouter