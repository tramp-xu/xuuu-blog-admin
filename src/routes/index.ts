
import UserRouter from "./users/index";
import ArticleRouter from "./article/index";
import PostRouter from "./post/index";
/**
 * All application routes.
 */
const AppRoutes = [
    ...UserRouter,
    ...ArticleRouter,
    ...PostRouter
];

export default AppRoutes;