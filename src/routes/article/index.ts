import { getAllArticle, addArticle, updateArticle } from "../../control/article/actions";

const ArticleRouter = [
  {
    path: "/api/article/search",
    method: 'get',
    action: getAllArticle
  },
  {
    path: "/api/article/add",
    method: 'post',
    action: addArticle
  },
  {
    path: "/api/article/update",
    method: 'post',
    action: updateArticle
  },
]

export default ArticleRouter