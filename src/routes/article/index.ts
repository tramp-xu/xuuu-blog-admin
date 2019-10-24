import { getAllArticle, addArticle, updateArticle, getArticleInfo, getAllArticleInfo } from "../../control/article/actions";

const ArticleRouter = [
  {
    path: "/api/article/search",
    method: 'get',
    action: getAllArticle
  },
  {
    path: "/api/article/detail/search",
    method: 'get',
    action: getAllArticleInfo
  },
  {
    path: "/api/article/get",
    method: 'get',
    action: getArticleInfo
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